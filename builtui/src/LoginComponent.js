
import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './LoginComponent.css'
import {Link  } from 'react-router-dom';


const FormItem = Form.Item; 
                                                                                                                                                                    
class LoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
     
      <div className="loginpage">
      <Form onSubmit={this.handleSubmit} className="login-form">
       <p className="loginpapier">Papier</p>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
         
          <Button type="primary" htmlType="submit" className="login-form-button"> <Link to="/HomePage">
            Log in
          </Link></Button><br/>
         <span className="whiteOnOr"> New member?</span> <span className="signupBtn" onClick={this.props.onRegisterClick}><Link to="/Signup">Sign up!</Link></span>
        </FormItem>
      </Form>
      </div>
      
    );
  }
}

const LoginComponent = Form.create()(LoginForm);

export default LoginComponent;
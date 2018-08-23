
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
     <div>
        <div className="papierlogo"> 
          <p className="loginpapier">Papier</p>
        </div>
        <div className="loginpage">
        <Form onSubmit={this.handleSubmit} className="login-form">
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
          
            <Button type="primary" htmlType="submit" className="login-form-button"> <Link to="/BookSearch">
              Log in
            </Link></Button><br/>
            <Button type="primary" htmlType="submit" className="signup-form-button" onClick={this.props.onRegisterClick}><Link to="/Signup">Sign up!</Link></Button>
          </FormItem>
        </Form>
        </div>
      </div>
      
    );
  }
}

const LoginComponent = Form.create()(LoginForm);

export default LoginComponent;
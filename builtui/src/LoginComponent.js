
import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './LoginComponent.css'
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
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a><br/>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
         <span className="whiteOnOr"> Or</span> <div onClick={this.props.onRegisterClick}>register now!</div>
        </FormItem>
      </Form>
      </div>
    );
  }
}

const LoginComponent = Form.create()(LoginForm);

export default LoginComponent;
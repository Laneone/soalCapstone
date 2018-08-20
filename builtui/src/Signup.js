import React from 'react';
import './Signup.css'
import { Form, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class Signup  extends React.Component {
  render(){

    return (
      <div className="signupPage">
        <FormItem className="singupform">
         
            <Input type="email" placeholder="Email" /> 
            <Input type="password" placeholder="Password" />
            <Input type="number" placeholder="Mobile" />
            <p className="askingSK">What do you want to do?</p>
            <Checkbox>
             Seller
            </Checkbox>
            <Checkbox>
             Keeper
            </Checkbox>
            <Input type="Address" placeholder="Address" />
            <Input type="pincode" placeholder="Pincode" />
        </FormItem>
        <FormItem >
          <Button type="primary">
           Regester
          </Button>
        </FormItem>
      </div>
    );
  }
}


export default Signup;
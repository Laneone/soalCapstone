import React, { Component } from 'react';
import { Icon,Button} from 'antd';
import {Link  } from 'react-router-dom';
import './tickmark.css'

const ButtonGroup = Button.Group;

class Tickmark extends Component{
    render(){
        return(
            <div className="tickmark">
               <Icon type="check-circle" className="tickicon"/>
                <ButtonGroup>
                    <button className="backbtn"><Link to="/BookSearch">Go back</Link></button>
                </ButtonGroup>
            </div>
        )
    }
}

export default Tickmark;
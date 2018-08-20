import React, { Component } from 'react';
import './BookPost.css';
import { Button } from 'antd';
import { BrowserRouter as Router, Route ,Link } from 'react-router-dom';
import { Input } from 'antd';
import { Upload, Icon, Modal } from 'antd';

const { TextArea } = Input;

const ButtonGroup = Button.Group;


// main component of posting books for selling
class BookPost extends Component {
    state={
        afterSaveText:"Save and Continue",
        bookPostHead:"Post a book to rent out",
    }
  render() {
    return (
     <Router>
        <div className="BookPost">
            <p className="posthead">{this.state.bookPostHead}</p>
            <ButtonGroup>
            <Button type="primary"><Link to="/Details">
                Details
                </Link>
            </Button>
            <Button type="primary"><Link to="/MsgforImage">
                Images
                </Link>
            </Button>
            </ButtonGroup>
            <div>
            <Route path  = "/Details" component={Details}/>
            <Route path  = "/Gist" component={Gist}/>
            <Route path  = "/Images" component={Images}/>
            <Route path  = "/MsgforImage" component={ MsgforImage}/>
            </div>
            <ButtonGroup>
            <Button type="primary" block><Link to="/Gist">{this.state.afterSaveText}</Link></Button>
            </ButtonGroup>
        </div>
      </Router>
    );
  }
}



//here user have to put details of that book
class Details extends Component{
    render(){
        return(
            <div className="bookpostDetails">
                <lable>How many books?</lable><br/>
                <input type="text" /><br/>
                <lable>Books title(s)</lable><br/>
                <input type="text" /><br/>
                <lable>Author(s)</lable><br/>
                <input type="text" /><br/>
                <lable>Genre</lable><br/>
                <input type="text" /><br/>
                <lable>Book(s) condition</lable><br/>
                <input type="text" /><br/>
                <lable>Price</lable><br/>
                <input type="text" />
            </div>
        )
    }
}


//here  we Gist 
class Gist extends Component{
    render(){
        return(
            <div className="Gist">
                <p className="gistText">Gist</p>
                <TextArea rows={17}/>
            </div>
        )
    }
}



//when the user click on image he get this component where i have msg for him
class MsgforImage extends Component{
    render(){
        return(
            <div className="msgforimage">
                <p className="imagemsgtext">Pless add some images to coomplete the process</p>
                <Button type="primary" block><Link to="/Images">Ok</Link></Button>
            </div>
        )
    }
}


//here is the thing where you can upload image
class Images extends Component{
    state = {
        previewVisible: false,
        previewImage: '',
        fileList: [{
          uid: '-1',
          name: 'xxx.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }],
      };

            handleCancel = () => this.setState({ previewVisible: false })

            handlePreview = (file) => {
                this.setState({
                previewImage: file.url || file.thumbUrl,
                previewVisible: true,
                });
            }
            
            handleChange = ({ fileList }) => this.setState({ fileList })
            
    render(){
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
          <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
          </div>
        );
        return(
            <div className="bookpostimages">
                <Upload
                    action="//jsonplaceholder.typicode.com/posts/"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                    >
                    {fileList.length >= 5 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        )
    }
}

export default BookPost;

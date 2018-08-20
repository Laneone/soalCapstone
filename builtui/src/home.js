import React from 'react'
import './home.css'
import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;
class HomePage   extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
        <div className="homepage">
        <Layout>
            <Sidebar
                sidebar={<b>Sidebar content</b>}
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                styles={{ sidebar: { background: "white" } }}
            >
                <button onClick={() => this.onSetSidebarOpen(true)}>
                Open sidebar
                </button>
            </Sidebar>
            <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
                />
            </Header>
            <Content style={{ margin: '3px 0px', padding: 24, background: '#fff', minHeight:'-webkit-fill-available' }}>
                Content
            </Content>
            </Layout>
        </Layout>
      </div>
    );
  }
}



export default HomePage;

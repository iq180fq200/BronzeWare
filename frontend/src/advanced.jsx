import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb,Button,Space,Card,Select,Checkbox, Row, Col} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Routes,BrowserRouter as Router,Route,Link,NavLink,Outlet  } from 'react-router-dom';
import MyMap from "./echarts/MyMap";



const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Advanced extends React.Component{
    render(){
        return(
            <div>
    <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="visual"><NavLink to="../visual/history">基础功能</NavLink></Menu.Item>
        <Menu.Item key="advanced"><NavLink to="../advanced">高级功能</NavLink></Menu.Item>
        <Menu.Item key="expert"><NavLink to="../expert">更多功能</NavLink></Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="地图可视化">
            <Menu.Item key="1">地图可视化</Menu.Item>
           
          </SubMenu>
          
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        
        <Content
          className="site-layout-background"
        //   style={{
        //     padding: 24,
        //     margin: 0,
        //     minHeight: 280
        //   }}
        style={{ margin: '24px 16px 0' }}
        >
            {/* <Card style={{height: '60vh', width:'800px', position: 'absolute'}}>  */}
            {/* <MyMap style={{position: 'absolute'},{top: '50%'},{width:'100%' }}/> */}
            
            {/* </Card>
           */}
           <Card style={{ width:'800px' },{height:'600px'}}>
           <MyMap/>
           </Card>
        </Content>
        
      </Layout>
    </Layout>
  </Layout>
            </div>
        )
    }
}
export default Advanced;
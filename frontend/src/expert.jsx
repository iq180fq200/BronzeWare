import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb,Button,Space,Card,Select,Checkbox, Row, Col} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Routes,BrowserRouter as Router,Route,Link,NavLink,Outlet  } from 'react-router-dom';
import clustering from "./echarts/clustering.png";
import clusters from "./echarts/clusters.png"

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Expert extends React.Component{
    render(){
        return(
            <div>
                <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']}>
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
          <SubMenu key="sub1" icon={<UserOutlined />} title="空间聚类图">
            <Menu.Item key="1">空间聚类图</Menu.Item>
           
          </SubMenu>
          
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
            <Card style={{ width:1000}}> 
            <img src={clustering} alt="clustering" />
            <br/>
            < img src={clusters} alt="clusters" />
            </Card>
          
        </Content>
      </Layout>
    </Layout>
  </Layout>
            </div>
        )
    }
}
export default Expert;
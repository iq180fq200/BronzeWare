//基础功能页
import { Routes,BrowserRouter as Router,Route,Link,NavLink,Outlet  } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

import Chartdemo from './chartdemo';

import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb,Button,Space,Card} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;



class Listdemo extends React.Component {
 
  render() {
    
    return (
        <Layout>
          <Header className="header">
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
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
                  style={{height: '100%', borderRight: 0}}
              >
                <SubMenu key="sub1" icon={<UserOutlined/>} title="数据可视化">
                  <Menu.Item key="/visual/history"  ><NavLink to="/visual/history">年代与数量关系</NavLink></Menu.Item>
                  <Menu.Item key="/visual/region"><NavLink to="/visual/region">地区与数量关系</NavLink></Menu.Item>
                  <Menu.Item key="/visual/figure"><NavLink to="/visual/figure">纹饰与数量关系</NavLink></Menu.Item>
                  <Menu.Item key="/visual/function"><NavLink to="/visual/function">功能与数量关系</NavLink></Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined/>} title="搜索功能">
                  <Menu.Item key="/search/timeandregion"><NavLink to="/search/timeandregion">数据库A（无地域数据）</NavLink></Menu.Item>
                  <Menu.Item key="/search/museum"><NavLink to="/search/museum">数据库B（有地域数据）</NavLink></Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<NotificationOutlined/>} title="多维数据可视化">
                  <Menu.Item key="/visual/3d"><NavLink to="/visual/3d">朝代与纹饰</NavLink></Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{padding: '0 24px 24px'}}>
              {/* <Breadcrumb style={{margin: '16px 0'}}>
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
                    minWidth:200,
                  }}
              >
                {/* <Routes>
                  <Route path='/home/history' element={<Chartdemo/>}> </Route>
                </Routes> */}
                
                <Outlet />
              </Content>
            </Layout>
          </Layout>
        </Layout>
    )
  }
}
export default Listdemo;
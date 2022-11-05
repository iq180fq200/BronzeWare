//首页，几个图标分别可以链接，需可以实现几个图标的居中
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
    BulbTwoTone,
    PieChartTwoTone,
    StarTwoTone,
    FundTwoTone,
    CompassTwoTone

  } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb,Button,Space,Card, Col, Row} from 'antd';
import { color } from 'echarts';
import React from 'react';
import { Routes,BrowserRouter as Router,Route,Link,NavLink,Outlet  } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
class Home extends React.Component{
    render(){
        return(
                <Layout>
                    <Layout>
                        <Header style={{height:"90px"}}>
                       <div style={{fontWeight: "bold"},{fontSize: "300px"},{color: 'white'}}>Bronze Ware</div> 
                        </Header>
                    </Layout>
                    <br/>
               
                    <Content style={{textAlign: 'center'},{ padding: '0 50px' },{height:"500px"}}>
                    <Layout>
                    <div className="site-card-wrapper" style={{textAlign: 'center'}}>
                    <Row gutter={16}>
                    <Col span={5}>
                        <Card  hoverable title="基础功能" bordered={false} key="visual" style={{textAlign: 'center'}}>
                        <NavLink to="/visual/history"><FundTwoTone style={{ fontSize: '100px', color: '#08c'}}/></NavLink>
                        </Card>
                    </Col>
                    <Col span={5}>
                        <Card  hoverable title="高级功能" bordered={false} key="advanced" style={{textAlign: 'center'}}>
                        <NavLink to="/advanced"><CompassTwoTone style={{ fontSize: '100px', color: '#08c'}}/></NavLink>
                        </Card>
                    </Col>
                    <Col span={5}>
                        <Card  hoverable title="更多功能" bordered={false} key="expert" style={{textAlign: 'center'}}>
                        <NavLink to="/expert"><StarTwoTone style={{ fontSize: '100px', color: '#08c' }}/></NavLink>
                        </Card>
                    </Col>
                    </Row>
                     </div>
                     </Layout>
                    </Content>
               
                </Layout>   
            )
    }
}
export default Home;
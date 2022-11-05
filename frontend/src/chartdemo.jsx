//朝代与数量关系图，应该没啥改的
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb,Button,Space,Card,Select,Checkbox, Row, Col} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Pie from "./echarts/pie";
import Page from "./echarts/page";


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Option } = Select;
const elsedata =require("./echarts/else");
const gugongdata=require("./echarts/gugong");
const shanghaidata=require("./echarts/shanghai");
const guojiadata=require("./echarts/guojia");

let yAxisElse=[0,0,0,0,0,0,0,0,0];
  for(var i=0;i<elsedata.length;i++){
    if(elsedata[i].年代1==='商')yAxisElse[0]++;
    if(elsedata[i].年代1==='周')yAxisElse[1]++;
    if(elsedata[i].年代1==='秦')yAxisElse[2]++;
    if(elsedata[i].年代1==='汉')yAxisElse[3]++;
    if(elsedata[i].年代1==='唐')yAxisElse[4]++;
    if(elsedata[i].年代1==='南北朝')yAxisElse[5]++;
    if(elsedata[i].年代1==='宋')yAxisElse[6]++;
    if(elsedata[i].年代1==='元')yAxisElse[7]++;
    if(elsedata[i].年代1==='明')yAxisElse[8]++;
    if(elsedata[i].年代1==='清')yAxisElse[9]++;
  }
 let yAxisGugong=[0,0,0,0,0,0,0,0,0];
 for(var i=0;i<gugongdata.length;i++){
  if(gugongdata[i].年代==='商')yAxisGugong[0]++;
  if(gugongdata[i].年代==='西周'||gugongdata[i].年代==='战国'||gugongdata[i].年代==='春秋')yAxisGugong[1]++;
  if(gugongdata[i].年代==='秦')yAxisGugong[2]++;
  if(gugongdata[i].年代==='汉')yAxisGugong[3]++;
  if(gugongdata[i].年代==='唐')yAxisGugong[4]++;
  if(gugongdata[i].年代==='南北朝'||gugongdata[i].年代==='北朝'||gugongdata[i].年代==='南朝')yAxisGugong[5]++;
  if(gugongdata[i].年代==='宋')yAxisGugong[6]++;
  if(gugongdata[i].年代==='元')yAxisGugong[7]++;
  if(gugongdata[i].年代==='明')yAxisGugong[8]++;
  if(gugongdata[i].年代==='清')yAxisGugong[9]++;
}
let yAxisGuojia=[0,0,0,0,0,0,0,0,0];

for(var i=0;i<guojiadata.length;i++){
  
  if(guojiadata[i]['朝代'].match('商'))yAxisGuojia[0]++;
  if(guojiadata[i]['朝代'].match('周'))yAxisGuojia[1]++;
  if(guojiadata[i]['朝代'].match('秦'))yAxisGuojia[2]++;
  if(guojiadata[i]['朝代'].match('汉'))yAxisGuojia[3]++;
  if(guojiadata[i]['朝代'].match('唐'))yAxisGuojia[4]++;
  if(guojiadata[i]['朝代'].match('南北朝')||guojiadata[i]['朝代'].match('晋'))yAxisGuojia[5]++;
  if(guojiadata[i]['朝代'].match('宋'))yAxisGuojia[6]++;
  if(guojiadata[i]['朝代'].match('元'))yAxisGuojia[7]++;
  if(guojiadata[i]['朝代'].match('明'))yAxisGuojia[8]++;
  if(guojiadata[i]['朝代'].match('清'))yAxisGuojia[9]++;
}
let yAxisShanghai=[0,0,0,0,0,0,0,0,0];
// var str=shanghaidata[0]['年代'];
// var str=guojiadata[0]['朝代'].match('战国');
// console.log(str);
for(var i=0;i<shanghaidata.length;i++){
  
  if(shanghaidata[i]['年代'].match('商'))yAxisShanghai[0]++;
  if(shanghaidata[i]['年代'].match('周'))yAxisShanghai[1]++;
  if(shanghaidata[i]['年代'].match('秦'))yAxisShanghai[2]++;
  if(shanghaidata[i]['年代'].match('汉'))yAxisShanghai[3]++;
  if(shanghaidata[i]['年代'].match('唐'))yAxisShanghai[4]++;
  if(shanghaidata[i]['年代'].match('南北朝'))yAxisShanghai[5]++;
  if(shanghaidata[i]['年代'].match('宋'))yAxisShanghai[6]++;
}
let yAxisAll=[0,0,0,0,0,0,0,0,0];
for(var i=0;i<10;i++){
  yAxisAll[i]=yAxisShanghai[i]+yAxisGuojia[i]+yAxisElse[i]+yAxisGugong[i];
}


class Chartdemo extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      chooseChart:'1',
      chooseMuseum:'gugong',
      yAxis:yAxisElse
    };
  }
  muchange = (val) => {
      if(val.target.value==='1')
		   this.setState({yAxis:yAxisElse,chooseMuseum:'else'})
	    if(val.target.value==='2')
       this.setState({yAxis:yAxisGugong,chooseMuseum:'gugong'})
       if(val.target.value==='3')
       this.setState({yAxis:yAxisGuojia,chooseMuseum:'guojia'})
       if(val.target.value==='4')
       this.setState({yAxis:yAxisShanghai,chooseMuseum:'shanghai'})
       if(val.target.value==='5')
		   this.setState({yAxis:yAxisAll,chooseMuseum:'all'})
    }
  render() {
    
    var chooseChart=this.state.chooseChart;
    var yAxis=this.state.yAxis;
    var chooseMuseum=this.state.chooseMuseum;
    var chart=null;
    
    if(chooseChart=='1'){

      chart=<Page key={'1'+chooseMuseum} type='bar' data={yAxis}/>;
    }
    if(chooseChart=='2'){
      chart=<Page key={'2'+chooseMuseum} type='line' data={yAxis}/>; 
    }
	if(chooseChart=='3'){
      chart=<Pie key={'3'+chooseMuseum} data={yAxis}/>; 
    }
	if(chooseChart=='4'){
      chart=<Page key={'4'+chooseMuseum} type='scatter' data={yAxis}/>; 
    }  
    return (

        <div>
                <Space>
                <Button onClick={()=>this.setState({chooseChart:'1'})}>柱状图</Button>
				          <Button onClick={()=>this.setState({chooseChart:'2'})}>折线图</Button> 
                  <Button onClick={()=>this.setState({chooseChart:'3'})}>饼图</Button>
                  <Button onClick={()=>this.setState({chooseChart:'4'})}>散点图</Button>
	  
                </Space>
                <br/><br/>
                <Space>
             
                选择博物馆： <select onChange={this.muchange} >
                    
                    <option value='2'>故宫博物院</option>
                    <option value='3'>国家博物馆</option>
                    <option value='4'>上海博物馆</option>
                    <option value='1'>其他</option>
                    <option value='5'>总馆藏</option>
                   
                </select>
                
                </Space>
                <br/><br/>
               <Card style={{ width: 800 }}> 
                  {chart}
                  
                </Card>

        
      </div>
      
    )

  }
}
export default Chartdemo;
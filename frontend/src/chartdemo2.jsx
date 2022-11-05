//地区与数量关系图，如果可以的话想添加一张地图，可以用echart实现，mapbox太麻烦了
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb,Button,Space,Card,Select,Checkbox, Row, Col} from 'antd';
import Page2 from "./echarts/page2";
import Pie2 from "./echarts/pie2";
import MyMap3 from "./echarts/MyMap3";
const datasource=require("./echarts/datasource");
let yAxisData=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

// var str=datasource[0].地点.match();
// console.log(str);

for(var i=0;i<datasource.length;i++){
    if(datasource[i]["地点"].match("陕西"))yAxisData[0]++;
    if(datasource[i]['地点'].match('湖北'))yAxisData[1]++;
    if(datasource[i]['地点'].match('河北'))yAxisData[2]++;
    if(datasource[i]['地点'].match('云南'))yAxisData[3]++;
    if(datasource[i]['地点'].match('河南'))yAxisData[4]++;
    if(datasource[i]['地点'].match('山西'))yAxisData[5]++;
    if(datasource[i]['地点'].match('山东'))yAxisData[6]++;
    if(datasource[i]['地点'].match('江苏'))yAxisData[7]++;
    if(datasource[i]['地点'].match('湖南'))yAxisData[8]++;
    if(datasource[i]['地点'].match('辽宁'))yAxisData[9]++;
    if(datasource[i]['地点'].match('四川'))yAxisData[10]++;
    if(datasource[i]['地点'].match('江西'))yAxisData[11]++;
    if(datasource[i]['地点'].match('安徽'))yAxisData[12]++;
    if(datasource[i]['地点'].match('北京'))yAxisData[13]++;
    if(datasource[i]['地点'].match('内蒙'))yAxisData[14]++;
    if(datasource[i]['地点'].match('广东'))yAxisData[15]++;
    if(datasource[i]['地点'].match('浙江'))yAxisData[16]++;
    if(datasource[i]['地点'].match('广西'))yAxisData[17]++;
    if(datasource[i]['地点'].match('甘肃'))yAxisData[18]++;
    if(datasource[i]['地点'].match('贵州'))yAxisData[19]++;
    if(datasource[i]['地点'].match('福建'))yAxisData[20]++;
    if(datasource[i]['地点'].match('青海'))yAxisData[21]++;
    if(datasource[i]['地点'].match('上海'))yAxisData[22]++;
}

class Chartdemo2 extends React.Component{
    constructor(props) {
        super(props);
        this.state={
          chooseChart:'1',
          yAxis:yAxisData,
        };
      }

 render(){
    var chooseChart=this.state.chooseChart;
    var yAxis=this.state.yAxis;
    var chart=null;
    if(chooseChart=='1'){

        chart=<Page2 key={'1'} type='bar' data={yAxis}/>;
      }
      if(chooseChart=='2'){
        chart=<Pie2 key={'2'} data={yAxis}/>; 
      }
    //   if(chooseChart=='3'){
    //     chart=<Pie key={'3'+chooseMuseum} data={yAxis}/>; 
    //   }
      if(chooseChart=='4'){
        chart=<Page2 key={'4'} type='scatter' data={yAxis}/>; 
      }  
      if(chooseChart=='5'){
        chart=<MyMap3  key={'5'} style={{ width:'100%' },{height:'100%'}}/>; 
      }  
     return(
       
         <div>
              <Space>
                <Button onClick={()=>this.setState({chooseChart:'1'})}>柱状图</Button>
				        {/* <Button onClick={()=>this.setState({chooseChart:'2'})}>折线图</Button>  */}
                <Button onClick={()=>this.setState({chooseChart:'2'})}>饼图</Button>
                <Button onClick={()=>this.setState({chooseChart:'4'})}>散点图</Button>
	  
                </Space>
                <br/><br/>
                <Button onClick={()=>this.setState({chooseChart:'5'})}>地图模式</Button>
                <Card style={{ width:'800px' },{height:'600px'}}>
                  {chart}
                  
                </Card>
         </div>
     )
 }
}
export default Chartdemo2;
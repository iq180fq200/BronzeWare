//功能与数量关系图，应该没啥改的
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb,Button,Space,Card,Select,Checkbox, Row, Col} from 'antd';
import Page4 from "./echarts/page4";
import Pie4 from "./echarts/pie4";
const datasource=require("./echarts/datasource");
const elsedata =require("./echarts/else");
const gugongdata=require("./echarts/gugong");
const shanghaidata=require("./echarts/shanghai");
const guojiadata=require("./echarts/guojia");

// let yAxisData=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
// for(var i=0;i<datasource.length;i++){
//     if(datasource[i]["名称"].match("鼎"))yAxisData[0]++;
//     if(datasource[i]["名称"].match("壶"))yAxisData[1]++;
//     if(datasource[i]["名称"].match("簋"))yAxisData[2]++;
//     if(datasource[i]["名称"].match("尊"))yAxisData[3]++;
//     if(datasource[i]["名称"].match("盘"))yAxisData[4]++;
//     if(datasource[i]["名称"].match("卣"))yAxisData[5]++;
//     if(datasource[i]["名称"].match("罍"))yAxisData[6]++;
//     if(datasource[i]["名称"].match("爵"))yAxisData[7]++;
//     if(datasource[i]["名称"].match("钟"))yAxisData[8]++;
//     if(datasource[i]["名称"].match("盉"))yAxisData[9]++;
//     if(datasource[i]["名称"].match("斝"))yAxisData[10]++;
//     if(datasource[i]["名称"].match("觚"))yAxisData[11]++;
//     if(datasource[i]["名称"].match("匜"))yAxisData[12]++;
//     if(datasource[i]["名称"].match("器"))yAxisData[13]++;
//     if(datasource[i]["名称"].match("鬲"))yAxisData[14]++;
//     if(datasource[i]["名称"].match("豆"))yAxisData[15]++;
//     if(datasource[i]["名称"].match("甗"))yAxisData[16]++;
//     if(datasource[i]["名称"].match("敦"))yAxisData[17]++;
//     if(datasource[i]["名称"].match("缶"))yAxisData[18]++;
//     if(datasource[i]["名称"].match("钺"))yAxisData[19]++;
//     if(datasource[i]["名称"].match("鉴"))yAxisData[20]++;
//     if(datasource[i]["名称"].match("炉"))yAxisData[21]++;
//     if(datasource[i]["名称"].match("瓿"))yAxisData[22]++;
//     if(datasource[i]["名称"].match("彝"))yAxisData[23]++;
//     if(datasource[i]["名称"].match("觯"))yAxisData[24]++;
//     if(datasource[i]["名称"].match("簠"))yAxisData[25]++;
//     if(datasource[i]["名称"].match("杯"))yAxisData[26]++;
//     if(datasource[i]["名称"].match("铃"))yAxisData[27]++;
//     if(datasource[i]["名称"].match("台"))yAxisData[28]++;
// }

let yAxisElse=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
for(var i=0;i<elsedata.length;i++){
    if(elsedata[i]["名称"].match("鼎"))yAxisElse[0]++;
if(elsedata[i]["名称"].match("壶"))yAxisElse[1]++;
if(elsedata[i]["名称"].match("簋"))yAxisElse[2]++;
if(elsedata[i]["名称"].match("尊"))yAxisElse[3]++;
if(elsedata[i]["名称"].match("盘"))yAxisElse[4]++;
if(elsedata[i]["名称"].match("卣"))yAxisElse[5]++;
if(elsedata[i]["名称"].match("罍"))yAxisElse[6]++;
if(elsedata[i]["名称"].match("爵"))yAxisElse[7]++;
if(elsedata[i]["名称"].match("钟"))yAxisElse[8]++;
if(elsedata[i]["名称"].match("盉"))yAxisElse[9]++;
if(elsedata[i]["名称"].match("斝"))yAxisElse[10]++;
if(elsedata[i]["名称"].match("觚"))yAxisElse[11]++;
if(elsedata[i]["名称"].match("匜"))yAxisElse[12]++;
if(elsedata[i]["名称"].match("器"))yAxisElse[13]++;
if(elsedata[i]["名称"].match("鬲"))yAxisElse[14]++;
if(elsedata[i]["名称"].match("豆"))yAxisElse[15]++;
if(elsedata[i]["名称"].match("甗"))yAxisElse[16]++;
if(elsedata[i]["名称"].match("敦"))yAxisElse[17]++;
if(elsedata[i]["名称"].match("缶"))yAxisElse[18]++;
if(elsedata[i]["名称"].match("钺"))yAxisElse[19]++;
if(elsedata[i]["名称"].match("鉴"))yAxisElse[20]++;
if(elsedata[i]["名称"].match("炉"))yAxisElse[21]++;
if(elsedata[i]["名称"].match("瓿"))yAxisElse[22]++;
if(elsedata[i]["名称"].match("彝"))yAxisElse[23]++;
if(elsedata[i]["名称"].match("觯"))yAxisElse[24]++;
if(elsedata[i]["名称"].match("簠"))yAxisElse[25]++;
if(elsedata[i]["名称"].match("杯"))yAxisElse[26]++;
if(elsedata[i]["名称"].match("铃"))yAxisElse[27]++;
if(elsedata[i]["名称"].match("台"))yAxisElse[28]++;
}
let yAxisGugong=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
for(var i=0;i<gugongdata.length;i++){
if(gugongdata[i]["名称"].match("鼎"))yAxisGugong[0]++;
if(gugongdata[i]["名称"].match("壶"))yAxisGugong[1]++;
if(gugongdata[i]["名称"].match("簋"))yAxisGugong[2]++;
if(gugongdata[i]["名称"].match("尊"))yAxisGugong[3]++;
if(gugongdata[i]["名称"].match("盘"))yAxisGugong[4]++;
if(gugongdata[i]["名称"].match("卣"))yAxisGugong[5]++;
if(gugongdata[i]["名称"].match("罍"))yAxisGugong[6]++;
if(gugongdata[i]["名称"].match("爵"))yAxisGugong[7]++;
if(gugongdata[i]["名称"].match("钟"))yAxisGugong[8]++;
if(gugongdata[i]["名称"].match("盉"))yAxisGugong[9]++;
if(gugongdata[i]["名称"].match("斝"))yAxisGugong[10]++;
if(gugongdata[i]["名称"].match("觚"))yAxisGugong[11]++;
if(gugongdata[i]["名称"].match("匜"))yAxisGugong[12]++;
if(gugongdata[i]["名称"].match("器"))yAxisGugong[13]++;
if(gugongdata[i]["名称"].match("鬲"))yAxisGugong[14]++;
if(gugongdata[i]["名称"].match("豆"))yAxisGugong[15]++;
if(gugongdata[i]["名称"].match("甗"))yAxisGugong[16]++;
if(gugongdata[i]["名称"].match("敦"))yAxisGugong[17]++;
if(gugongdata[i]["名称"].match("缶"))yAxisGugong[18]++;
if(gugongdata[i]["名称"].match("钺"))yAxisGugong[19]++;
if(gugongdata[i]["名称"].match("鉴"))yAxisGugong[20]++;
if(gugongdata[i]["名称"].match("炉"))yAxisGugong[21]++;
if(gugongdata[i]["名称"].match("瓿"))yAxisGugong[22]++;
if(gugongdata[i]["名称"].match("彝"))yAxisGugong[23]++;
if(gugongdata[i]["名称"].match("觯"))yAxisGugong[24]++;
if(gugongdata[i]["名称"].match("簠"))yAxisGugong[25]++;
if(gugongdata[i]["名称"].match("杯"))yAxisGugong[26]++;
if(gugongdata[i]["名称"].match("铃"))yAxisGugong[27]++;
if(gugongdata[i]["名称"].match("台"))yAxisGugong[28]++;
}

let yAxisGuojia=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
for(var i=0;i<guojiadata.length;i++){
    if(guojiadata[i]["名称"].match("鼎"))yAxisGuojia[0]++;
if(guojiadata[i]["名称"].match("壶"))yAxisGuojia[1]++;
if(guojiadata[i]["名称"].match("簋"))yAxisGuojia[2]++;
if(guojiadata[i]["名称"].match("尊"))yAxisGuojia[3]++;
if(guojiadata[i]["名称"].match("盘"))yAxisGuojia[4]++;
if(guojiadata[i]["名称"].match("卣"))yAxisGuojia[5]++;
if(guojiadata[i]["名称"].match("罍"))yAxisGuojia[6]++;
if(guojiadata[i]["名称"].match("爵"))yAxisGuojia[7]++;
if(guojiadata[i]["名称"].match("钟"))yAxisGuojia[8]++;
if(guojiadata[i]["名称"].match("盉"))yAxisGuojia[9]++;
if(guojiadata[i]["名称"].match("斝"))yAxisGuojia[10]++;
if(guojiadata[i]["名称"].match("觚"))yAxisGuojia[11]++;
if(guojiadata[i]["名称"].match("匜"))yAxisGuojia[12]++;
if(guojiadata[i]["名称"].match("器"))yAxisGuojia[13]++;
if(guojiadata[i]["名称"].match("鬲"))yAxisGuojia[14]++;
if(guojiadata[i]["名称"].match("豆"))yAxisGuojia[15]++;
if(guojiadata[i]["名称"].match("甗"))yAxisGuojia[16]++;
if(guojiadata[i]["名称"].match("敦"))yAxisGuojia[17]++;
if(guojiadata[i]["名称"].match("缶"))yAxisGuojia[18]++;
if(guojiadata[i]["名称"].match("钺"))yAxisGuojia[19]++;
if(guojiadata[i]["名称"].match("鉴"))yAxisGuojia[20]++;
if(guojiadata[i]["名称"].match("炉"))yAxisGuojia[21]++;
if(guojiadata[i]["名称"].match("瓿"))yAxisGuojia[22]++;
if(guojiadata[i]["名称"].match("彝"))yAxisGuojia[23]++;
if(guojiadata[i]["名称"].match("觯"))yAxisGuojia[24]++;
if(guojiadata[i]["名称"].match("簠"))yAxisGuojia[25]++;
if(guojiadata[i]["名称"].match("杯"))yAxisGuojia[26]++;
if(guojiadata[i]["名称"].match("铃"))yAxisGuojia[27]++;
if(guojiadata[i]["名称"].match("台"))yAxisGuojia[28]++;
}

let yAxisShanghai=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
for(var i=0;i<shanghaidata.length;i++){
    if(shanghaidata[i]["名称"].match("鼎"))yAxisShanghai[0]++;
if(shanghaidata[i]["名称"].match("壶"))yAxisShanghai[1]++;
if(shanghaidata[i]["名称"].match("簋"))yAxisShanghai[2]++;
if(shanghaidata[i]["名称"].match("尊"))yAxisShanghai[3]++;
if(shanghaidata[i]["名称"].match("盘"))yAxisShanghai[4]++;
if(shanghaidata[i]["名称"].match("卣"))yAxisShanghai[5]++;
if(shanghaidata[i]["名称"].match("罍"))yAxisShanghai[6]++;
if(shanghaidata[i]["名称"].match("爵"))yAxisShanghai[7]++;
if(shanghaidata[i]["名称"].match("钟"))yAxisShanghai[8]++;
if(shanghaidata[i]["名称"].match("盉"))yAxisShanghai[9]++;
if(shanghaidata[i]["名称"].match("斝"))yAxisShanghai[10]++;
if(shanghaidata[i]["名称"].match("觚"))yAxisShanghai[11]++;
if(shanghaidata[i]["名称"].match("匜"))yAxisShanghai[12]++;
if(shanghaidata[i]["名称"].match("器"))yAxisShanghai[13]++;
if(shanghaidata[i]["名称"].match("鬲"))yAxisShanghai[14]++;
if(shanghaidata[i]["名称"].match("豆"))yAxisShanghai[15]++;
if(shanghaidata[i]["名称"].match("甗"))yAxisShanghai[16]++;
if(shanghaidata[i]["名称"].match("敦"))yAxisShanghai[17]++;
if(shanghaidata[i]["名称"].match("缶"))yAxisShanghai[18]++;
if(shanghaidata[i]["名称"].match("钺"))yAxisShanghai[19]++;
if(shanghaidata[i]["名称"].match("鉴"))yAxisShanghai[20]++;
if(shanghaidata[i]["名称"].match("炉"))yAxisShanghai[21]++;
if(shanghaidata[i]["名称"].match("瓿"))yAxisShanghai[22]++;
if(shanghaidata[i]["名称"].match("彝"))yAxisShanghai[23]++;
if(shanghaidata[i]["名称"].match("觯"))yAxisShanghai[24]++;
if(shanghaidata[i]["名称"].match("簠"))yAxisShanghai[25]++;
if(shanghaidata[i]["名称"].match("杯"))yAxisShanghai[26]++;
if(shanghaidata[i]["名称"].match("铃"))yAxisShanghai[27]++;
if(shanghaidata[i]["名称"].match("台"))yAxisShanghai[28]++;
}
let yAxisAll=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
for(var i=0;i<29;i++){
  yAxisAll[i]=yAxisShanghai[i]+yAxisGuojia[i]+yAxisElse[i]+yAxisGugong[i];
}

class Chartdemo4 extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          chooseChart:'1',
          chooseMuseum:'all',
          yAxis:yAxisAll,
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
    render(){
        var chooseChart=this.state.chooseChart;
        var yAxis=this.state.yAxis;
        var chooseMuseum=this.state.chooseMuseum;
        var chart=null;
        if(chooseChart=='1'){
    
            chart=<Page4 key={'1'+chooseMuseum} type='bar' data={yAxis}/>;
          }
          if(chooseChart=='2'){
            chart=<Pie4 key={'2'+chooseMuseum} data={yAxis}/>; 
          }
        //   if(chooseChart=='3'){
        //     chart=<Pie key={'3'+chooseMuseum} data={yAxis}/>; 
        //   }
          if(chooseChart=='4'){
            chart=<Page4 key={'4'+chooseMuseum} type='scatter' data={yAxis}/>; 
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
                选择博物馆： <select onChange={this.muchange} >
                    
                    <option value='2'>故宫博物院</option>
                    <option value='3'>国家博物馆</option>
                    <option value='4'>上海博物馆</option>
                    <option value='1'>其他</option>
                    <option value='5'>总馆藏</option>
                    
                   
                </select>
                <br/><br/>
                <Card style={{ width: 1000 }}> 
                {chart}
                  
                </Card>
            </div>
        )
    }
}
export default Chartdemo4;
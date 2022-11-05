//纹饰与数量关系图，应该没啥改的
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb,Button,Space,Card,Select,Checkbox, Row, Col} from 'antd';
import Page3 from "./echarts/page3";
import Pie3 from "./echarts/pie3";
const datasource=require("./echarts/datasource");


// let yAxisData=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let yAxisData=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
for(var i=0;i<datasource.length;i++){
    if(datasource[i]["纹饰"].match("蛇纹"))yAxisData[0]++;
    if(datasource[i]["纹饰"].match("窃曲纹"))yAxisData[1]++;
    if(datasource[i]["纹饰"].match("鳞纹"))yAxisData[2]++;
    if(datasource[i]["纹饰"].match("云雷纹"))yAxisData[3]++;
    if(datasource[i]["纹饰"].match("兽面纹"))yAxisData[4]++;
    if(datasource[i]["纹饰"].match("龙纹"))yAxisData[5]++;
    if(datasource[i]["纹饰"].match("凤鸟纹"))yAxisData[6]++;
    if(datasource[i]["纹饰"].match("夔纹"))yAxisData[7]++;
    if(datasource[i]["纹饰"].match("目纹"))yAxisData[8]++;
    if(datasource[i]["纹饰"].match("兽目交连纹"))yAxisData[9]++;
    if(datasource[i]["纹饰"].match("三角纹"))yAxisData[10]++;
    if(datasource[i]["纹饰"].match("联珠纹"))yAxisData[11]++;
    if(datasource[i]["纹饰"].match("波曲纹"))yAxisData[12]++;
    if(datasource[i]["纹饰"].match("乳钉纹"))yAxisData[13]++;
    if(datasource[i]["纹饰"].match("蝉纹"))yAxisData[14]++;
    if(datasource[i]["纹饰"].match("鱼纹"))yAxisData[15]++;
    if(datasource[i]["纹饰"].match("虎纹"))yAxisData[16]++;
    if(datasource[i]["纹饰"].match("兽纹"))yAxisData[17]++;
    if(datasource[i]["纹饰"].match("火纹"))yAxisData[18]++;
    if(datasource[i]["纹饰"].match("绹索纹"))yAxisData[19]++;
    if(datasource[i]["纹饰"].match("绹纹"))yAxisData[20]++;
    if(datasource[i]["纹饰"].match("绳纹"))yAxisData[21]++;
    if(datasource[i]["纹饰"].match("直条纹"))yAxisData[22]++;
    if(datasource[i]["纹饰"].match("涡纹"))yAxisData[23]++;
    if(datasource[i]["纹饰"].match("回纹"))yAxisData[24]++;
    if(datasource[i]["纹饰"].match("沟纹"))yAxisData[25]++;
    if(datasource[i]["纹饰"].match("垂叶纹"))yAxisData[26]++;

}

class Chartdemo3 extends React.Component {
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
    
            chart=<Page3 key={'1'} type='bar' data={yAxis}/>;
          }
          if(chooseChart=='2'){
            chart=<Pie3 key={'2'} data={yAxis}/>; 
          }
        //   if(chooseChart=='3'){
        //     chart=<Pie key={'3'+chooseMuseum} data={yAxis}/>; 
        //   }
          if(chooseChart=='4'){
            chart=<Page3 key={'4'} type='scatter' data={yAxis}/>; 
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
                <Card style={{ width: 1000 }}>
                  
                {chart}
                </Card>
            </div>
        )

    }
}

export default Chartdemo3;
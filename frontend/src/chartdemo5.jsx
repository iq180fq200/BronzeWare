import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb,Button,Space,Card,Select,Checkbox, Row, Col} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Page5 from "./echarts/page5";
const datasource=require("./echarts/datasource");
// let yAxisData=[4][27];
// for(var i=0;i<4;i++){
//     for(var j=0;j<27;j++)
//     yAxisData[i][j]=0;
// }
const yAxisData = new Array(4).fill(0).map(v => new Array(27).fill(0));
for(var i=0;i<datasource.length;i++){
    if(datasource[i]["年代"].match("商")){
        if(datasource[i]["纹饰"].match("蛇纹"))yAxisData[0][0]++;
        if(datasource[i]["纹饰"].match("窃曲纹"))yAxisData[0][1]++;
        if(datasource[i]["纹饰"].match("鳞纹"))yAxisData[0][2]++;
        if(datasource[i]["纹饰"].match("云雷纹"))yAxisData[0][3]++;
         if(datasource[i]["纹饰"].match("兽面纹"))yAxisData[0][4]++;
        if(datasource[i]["纹饰"].match("龙纹"))yAxisData[0][5]++;
        if(datasource[i]["纹饰"].match("凤鸟纹"))yAxisData[0][6]++;
        if(datasource[i]["纹饰"].match("夔纹"))yAxisData[0][7]++;
        if(datasource[i]["纹饰"].match("目纹"))yAxisData[0][8]++;
        if(datasource[i]["纹饰"].match("兽目交连纹"))yAxisData[0][9]++;
        if(datasource[i]["纹饰"].match("三角纹"))yAxisData[0][10]++;
        if(datasource[i]["纹饰"].match("联珠纹"))yAxisData[0][11]++;
        if(datasource[i]["纹饰"].match("波曲纹"))yAxisData[0][12]++;
        if(datasource[i]["纹饰"].match("乳钉纹"))yAxisData[0][13]++;
        if(datasource[i]["纹饰"].match("蝉纹"))yAxisData[0][14]++;
        if(datasource[i]["纹饰"].match("鱼纹"))yAxisData[0][15]++;
        if(datasource[i]["纹饰"].match("虎纹"))yAxisData[0][16]++;
        if(datasource[i]["纹饰"].match("兽纹"))yAxisData[0][17]++;
        if(datasource[i]["纹饰"].match("火纹"))yAxisData[0][18]++;
        if(datasource[i]["纹饰"].match("绹索纹"))yAxisData[0][19]++;
        if(datasource[i]["纹饰"].match("绹纹"))yAxisData[0][20]++;
        if(datasource[i]["纹饰"].match("绳纹"))yAxisData[0][21]++;
        if(datasource[i]["纹饰"].match("直条纹"))yAxisData[0][22]++;
        if(datasource[i]["纹饰"].match("涡纹"))yAxisData[0][23]++;
        if(datasource[i]["纹饰"].match("回纹"))yAxisData[0][24]++;
        if(datasource[i]["纹饰"].match("沟纹"))yAxisData[0][25]++;
        if(datasource[i]["纹饰"].match("垂叶纹"))yAxisData[0][26]++;
    }
    if(datasource[i]["年代"].match("周")||datasource[i]["年代"].match("春秋")||datasource[i]["年代"].match("战国")){
        if(datasource[i]["纹饰"].match("蛇纹"))yAxisData[1][0]++;
        if(datasource[i]["纹饰"].match("窃曲纹"))yAxisData[1][1]++;
        if(datasource[i]["纹饰"].match("鳞纹"))yAxisData[1][2]++;
        if(datasource[i]["纹饰"].match("云雷纹"))yAxisData[1][3]++;
        if(datasource[i]["纹饰"].match("兽面纹"))yAxisData[1][4]++;
        if(datasource[i]["纹饰"].match("龙纹"))yAxisData[1][5]++;
        if(datasource[i]["纹饰"].match("凤鸟纹"))yAxisData[1][6]++;
        if(datasource[i]["纹饰"].match("夔纹"))yAxisData[1][7]++;
        if(datasource[i]["纹饰"].match("目纹"))yAxisData[1][8]++;
        if(datasource[i]["纹饰"].match("兽目交连纹"))yAxisData[1][9]++;
        if(datasource[i]["纹饰"].match("三角纹"))yAxisData[1][10]++;
        if(datasource[i]["纹饰"].match("联珠纹"))yAxisData[1][11]++;
        if(datasource[i]["纹饰"].match("波曲纹"))yAxisData[1][12]++;
        if(datasource[i]["纹饰"].match("乳钉纹"))yAxisData[1][13]++;
        if(datasource[i]["纹饰"].match("蝉纹"))yAxisData[1][14]++;
        if(datasource[i]["纹饰"].match("鱼纹"))yAxisData[1][15]++;
        if(datasource[i]["纹饰"].match("虎纹"))yAxisData[1][16]++;
        if(datasource[i]["纹饰"].match("兽纹"))yAxisData[1][17]++;
        if(datasource[i]["纹饰"].match("火纹"))yAxisData[1][18]++;
        if(datasource[i]["纹饰"].match("绹索纹"))yAxisData[1][19]++;
        if(datasource[i]["纹饰"].match("绹纹"))yAxisData[1][20]++;
        if(datasource[i]["纹饰"].match("绳纹"))yAxisData[1][21]++;
        if(datasource[i]["纹饰"].match("直条纹"))yAxisData[1][22]++;
        if(datasource[i]["纹饰"].match("涡纹"))yAxisData[1][23]++;
        if(datasource[i]["纹饰"].match("回纹"))yAxisData[1][24]++;
        if(datasource[i]["纹饰"].match("沟纹"))yAxisData[1][25]++;
        if(datasource[i]["纹饰"].match("垂叶纹"))yAxisData[1][26]++;
    }
    if(datasource[i]["年代"].match("秦")){
        if(datasource[i]["纹饰"].match("蛇纹"))yAxisData[2][0]++;
        if(datasource[i]["纹饰"].match("窃曲纹"))yAxisData[2][1]++;
        if(datasource[i]["纹饰"].match("鳞纹"))yAxisData[2][2]++;
        if(datasource[i]["纹饰"].match("云雷纹"))yAxisData[2][3]++;
         if(datasource[i]["纹饰"].match("兽面纹"))yAxisData[2][4]++;
        if(datasource[i]["纹饰"].match("龙纹"))yAxisData[2][5]++;
        if(datasource[i]["纹饰"].match("凤鸟纹"))yAxisData[2][6]++;
        if(datasource[i]["纹饰"].match("夔纹"))yAxisData[2][7]++;
        if(datasource[i]["纹饰"].match("目纹"))yAxisData[2][8]++;
        if(datasource[i]["纹饰"].match("兽目交连纹"))yAxisData[2][9]++;
        if(datasource[i]["纹饰"].match("三角纹"))yAxisData[2][10]++;
        if(datasource[i]["纹饰"].match("联珠纹"))yAxisData[2][11]++;
        if(datasource[i]["纹饰"].match("波曲纹"))yAxisData[2][12]++;
        if(datasource[i]["纹饰"].match("乳钉纹"))yAxisData[2][13]++;
        if(datasource[i]["纹饰"].match("蝉纹"))yAxisData[2][14]++;
        if(datasource[i]["纹饰"].match("鱼纹"))yAxisData[2][15]++;
        if(datasource[i]["纹饰"].match("虎纹"))yAxisData[2][16]++;
        if(datasource[i]["纹饰"].match("兽纹"))yAxisData[2][17]++;
        if(datasource[i]["纹饰"].match("火纹"))yAxisData[2][18]++;
        if(datasource[i]["纹饰"].match("绹索纹"))yAxisData[2][19]++;
        if(datasource[i]["纹饰"].match("绹纹"))yAxisData[2][20]++;
        if(datasource[i]["纹饰"].match("绳纹"))yAxisData[2][21]++;
        if(datasource[i]["纹饰"].match("直条纹"))yAxisData[2][22]++;
        if(datasource[i]["纹饰"].match("涡纹"))yAxisData[2][23]++;
        if(datasource[i]["纹饰"].match("回纹"))yAxisData[2][24]++;
        if(datasource[i]["纹饰"].match("沟纹"))yAxisData[2][25]++;
        if(datasource[i]["纹饰"].match("垂叶纹"))yAxisData[2][26]++;
    }
    if(datasource[i]["年代"].match("汉")){
        if(datasource[i]["纹饰"].match("蛇纹"))yAxisData[3][0]++;
        if(datasource[i]["纹饰"].match("窃曲纹"))yAxisData[3][1]++;
        if(datasource[i]["纹饰"].match("鳞纹"))yAxisData[3][2]++;
        if(datasource[i]["纹饰"].match("云雷纹"))yAxisData[3][3]++;
         if(datasource[i]["纹饰"].match("兽面纹"))yAxisData[3][4]++;
        if(datasource[i]["纹饰"].match("龙纹"))yAxisData[3][5]++;
        if(datasource[i]["纹饰"].match("凤鸟纹"))yAxisData[3][6]++;
        if(datasource[i]["纹饰"].match("夔纹"))yAxisData[3][7]++;
        if(datasource[i]["纹饰"].match("目纹"))yAxisData[3][8]++;
        if(datasource[i]["纹饰"].match("兽目交连纹"))yAxisData[3][9]++;
        if(datasource[i]["纹饰"].match("三角纹"))yAxisData[3][10]++;
        if(datasource[i]["纹饰"].match("联珠纹"))yAxisData[3][11]++;
        if(datasource[i]["纹饰"].match("波曲纹"))yAxisData[3][12]++;
        if(datasource[i]["纹饰"].match("乳钉纹"))yAxisData[3][13]++;
        if(datasource[i]["纹饰"].match("蝉纹"))yAxisData[3][14]++;
        if(datasource[i]["纹饰"].match("鱼纹"))yAxisData[3][15]++;
        if(datasource[i]["纹饰"].match("虎纹"))yAxisData[3][16]++;
        if(datasource[i]["纹饰"].match("兽纹"))yAxisData[3][17]++;
        if(datasource[i]["纹饰"].match("火纹"))yAxisData[3][18]++;
        if(datasource[i]["纹饰"].match("绹索纹"))yAxisData[3][19]++;
        if(datasource[i]["纹饰"].match("绹纹"))yAxisData[3][20]++;
        if(datasource[i]["纹饰"].match("绳纹"))yAxisData[3][21]++;
        if(datasource[i]["纹饰"].match("直条纹"))yAxisData[3][22]++;
        if(datasource[i]["纹饰"].match("涡纹"))yAxisData[3][23]++;
        if(datasource[i]["纹饰"].match("回纹"))yAxisData[3][24]++;
        if(datasource[i]["纹饰"].match("沟纹"))yAxisData[3][25]++;
        if(datasource[i]["纹饰"].match("垂叶纹"))yAxisData[3][26]++;
    }
}

class Chartdemo5 extends React.Component {
    render(){
        return(
            <div>
                <Card style={{ width: 1000 }}> 
                <Page5 data={yAxisData}/>
                </Card>
                
            </div>
        )
    }
}
export default Chartdemo5;
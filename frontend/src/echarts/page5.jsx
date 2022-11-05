import React from 'react';
import  ReactECharts from 'echarts-for-react';
import 'echarts-gl';


// var chartDom = document.getElementById('main');
// var myChart = echarts.init(chartDom);
// var option;

// prettier-ignore

class Page5 extends React.Component{
    constructor(props){
        super(props);
        var data=new Array(4*27).fill(0).map(v => new Array(3));
        var getdata=this.props.data;
       
        for(var i=0;i<27;i++){
            data[i][0]=0;
            data[i][1]=i;
            data[i][2]=getdata[0][i];
        }
        for(var i=27;i<54;i++){
            data[i][0]=1;
            data[i][1]=i-27;
            data[i][2]=getdata[1][i-27];
        }
        for(var i=54;i<81;i++){
            data[i][0]=2;
            data[i][1]=i-54;
            data[i][2]=getdata[2][i-54];
        }
        for(var i=81;i<108;i++){
            data[i][0]=3;
            data[i][1]=i-81;
            data[i][2]=getdata[3][i-81];
        }
        console.log(data);
        this.state={
            option : {
                title: {
                    text: '朝代与纹饰'
                  },
                visualMap: {
                    max: 20,
                    inRange: {
                      color: [
                        '#313695',
                        '#4575b4',
                        '#74add1',
                        '#abd9e9',
                        '#e0f3f8',
                        '#ffffbf',
                        '#fee090',
                        '#fdae61',
                        '#f46d43',
                        '#d73027',
                        '#a50026'
                      ]
                    }
                  },
                grid3D: {boxWidth: 100,
                    boxDepth: 150,
                    viewControl: {
                      // projection: 'orthographic'
                    },
                    light: {
                      main: {
                        intensity: 1.2,
                        shadow: true
                      },
                      ambient: {
                        intensity: 0.3
                      }
                    }},
        xAxis3D: {
            
            data:['商','周','秦','汉'],
            axisLabel:{
                interval:0,//横轴信息全部显示
                rotate:-90,//-30度角倾斜显示
            }},
        yAxis3D: {
            data:['蛇纹','窃曲纹','鳞纹','云雷纹','兽面纹','龙纹','凤鸟纹','夔纹','目纹','兽目交连纹','三角纹','联珠纹','波曲纹','乳钉纹','蝉纹','鱼纹','虎纹','兽纹','火纹','绹索纹','绹纹','绳纹','直条纹','涡纹','回纹','沟纹','垂叶纹'],
            
            axisLabel:{
                interval:0,//横轴信息全部显示
                rotate:-60,//-30度角倾斜显示
            }
      },
        zAxis3D: {},
        series: [{
        type: 'bar3D',
        symbolSize: 30,
        data: data,
        itemStyle: {
            opacity: 1
        }
        }]
                }
            }
        }
    render(){
        const option =this.state.option;
        return(
            <ReactECharts
    option={option}
    style={{ height: 400 }}
  />
        )
    }

}
export default Page5;
import React from 'react';
import ReactECharts from 'echarts-for-react';
// import 'echarts-gl';
class Page3 extends React.Component{

  constructor(props){
    super(props);
    this.state={
      option :{
        title: {
          text: '纹饰与数量关系'
        },
        tooltip: {},
        legend: {
         
        },
        grid: {
          y2: 140
        },
        xAxis: {
        //  data:['陕西','湖北','河北','云南','河南','山西','山东','江苏','湖南','辽宁','四川','江西','安徽','北京','内蒙','广东','浙江','广西','甘肃','贵州','福建','青海','上海']
        type : 'category',
        data:['蛇纹','窃曲纹','鳞纹','云雷纹','兽面纹','龙纹','凤鸟纹','夔纹','目纹','兽目交连纹','三角纹','联珠纹','波曲纹','乳钉纹','蝉纹','鱼纹','虎纹','兽纹','火纹','绹索纹','绹纹','绳纹','直条纹','涡纹','回纹','沟纹','垂叶纹'],
        axisLabel:{
          interval:0,//横轴信息全部显示
          rotate:-30,//-30度角倾斜显示
      }

      },
        yAxis: {},
        series: [{
          name:'',
          type: this.props.type,
          data:this.props.data
        }]
      }
    }
  }
  render() {
	
    const option =this.state.option;
    
    return (
      <ReactECharts
      option={option}
      style={{ height: 400 }}
      opts={{ renderer: 'svg' }}
    />
    )
  }
}

export default Page3;
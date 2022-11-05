import React from 'react';
import ReactECharts from 'echarts-for-react';



class Page2 extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      option :{
        title: {
          text: '地区与数量关系'
        },
        tooltip: {},
        legend: {
         
        },
        xAxis: {
        //  data:['陕西','湖北','河北','云南','河南','山西','山东','江苏','湖南','辽宁','四川','江西','安徽','北京','内蒙','广东','浙江','广西','甘肃','贵州','福建','青海','上海']
        data:['陕西','湖北','河北','云南','河南','山西','山东','江苏','湖南','辽宁','四川','江西','安徽','北京','内蒙','广东','浙江','广西','甘肃','贵州','福建','青海','上海']
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


export default Page2;
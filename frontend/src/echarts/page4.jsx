import React from 'react';
import ReactECharts from 'echarts-for-react';
// import 'echarts-gl';
class Page4 extends React.Component{

  constructor(props){
    super(props);
    this.state={
      option :{
        title: {
          text: '功能与数量关系'
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
        data:['鼎','壶','簋','尊','盘','卣','罍','爵','钟','盉','斝','觚','匜',
        '器','鬲','豆','甗','敦','缶','钺','鉴','炉','瓿','彝','觯','簠','杯','铃','台'],
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

export default Page4;
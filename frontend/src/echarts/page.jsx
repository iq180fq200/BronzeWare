//柱状图，以下几个柱状图和饼状图都应该没啥修改的
import React from 'react';
import ReactECharts from 'echarts-for-react';


class Page extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      option :{
        title: {
          text: '朝代与数量关系'
        },
        tooltip: {},
        legend: {
         
        },
        xAxis: {
         data:['商','周','秦','汉','唐','南北朝','宋','元','明','清']
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
      style={{ height: 500 }}
      opts={{ renderer: 'svg' }}
    />
    )
  }
}


export default Page;
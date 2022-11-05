import React from 'react';
import ReactECharts from 'echarts-for-react';


class Pie extends React.Component{
    constructor(props){
        super(props);
        this.state={
            option : {
                title: {
                  text: '朝代与数量关系',
                  left: 'center'
                },
                tooltip: {
                  trigger: 'item'
                },
                legend: {
                  orient: 'vertical',
                  left: 'left'
                },
                series: [
                  {
                    // name: 'Access From',
                    type: 'pie',
                    radius: '60%',
                    data: [
                      { value: this.props.data[0], name: '商' },
                      { value: this.props.data[1], name: '周' },
                      { value: this.props.data[2], name: '秦' },
                      { value: this.props.data[3], name: '汉' },
                      { value: this.props.data[4], name: '唐' },
                      { value: this.props.data[5], name: '南北朝' },
                      { value: this.props.data[6], name: '宋' },
                      { value: this.props.data[7], name: '元' },
                      { value: this.props.data[8], name: '明' },
                      { value: this.props.data[9], name: '清' }
                    ],
                    emphasis: {
                      itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                    }
                  }
                ]
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
export default Pie;
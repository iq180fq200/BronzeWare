import React from 'react';
import ReactECharts from 'echarts-for-react';


class Pie2 extends React.Component{
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
                      { value: this.props.data[0], name: '陕西' },
                      { value: this.props.data[1], name: '湖北' },
                      { value: this.props.data[2], name: '河北' },
                      { value: this.props.data[3], name: '云南' },
                      { value: this.props.data[4], name: '河南' },
                      { value: this.props.data[5], name: '山西' },
                      { value: this.props.data[6], name: '山东' },
                      { value: this.props.data[7], name: '江苏' },
                      { value: this.props.data[8], name: '湖南' },
                      { value: this.props.data[9], name: '辽宁' },
                      { value: this.props.data[10], name: '四川' },
                      { value: this.props.data[11], name: '江西' },
                      { value: this.props.data[12], name: '安徽' },
                      { value: this.props.data[13], name: '北京' },
                      { value: this.props.data[14], name: '内蒙' },
                      { value: this.props.data[15], name: '广东' },
                      { value: this.props.data[16], name: '浙江' },
                      { value: this.props.data[17], name: '广西' },
                      { value: this.props.data[18], name: '甘肃' },
                      { value: this.props.data[19], name: '贵州' },
                      { value: this.props.data[20], name: '福建' },
                      { value: this.props.data[21], name: '青海' },
                      { value: this.props.data[22], name: '上海' }
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
export default Pie2;
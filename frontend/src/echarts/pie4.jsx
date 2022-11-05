import React from 'react';
import ReactECharts from 'echarts-for-react';


class Pie4 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            option : {
                title: {
                  text: '功能与数量关系',
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
                    data:['鼎','壶','簋','尊','盘','卣','罍','爵','钟','盉','斝','觚','匜',
                    '器','鬲','豆','甗','敦','缶','钺','鉴','炉','瓿','彝','觯','簠','杯','铃','台'],
                    data: [
                      { value: this.props.data[0], name: '鼎' },
                      { value: this.props.data[1], name: '壶' },
                      { value: this.props.data[2], name: '簋' },
                      { value: this.props.data[3], name: '尊' },
                      { value: this.props.data[4], name: '盘' },
                      { value: this.props.data[5], name: '卣' },
                      { value: this.props.data[6], name: '罍' },
                      { value: this.props.data[7], name: '爵' },
                      { value: this.props.data[8], name: '钟' },
                      { value: this.props.data[9], name: '盉' },
                      { value: this.props.data[10], name: '斝'},
                      { value: this.props.data[11], name: '觚' },
                      { value: this.props.data[12], name: '匜' },
                      { value: this.props.data[13], name: '器' },
                      { value: this.props.data[14], name: '鬲' },
                      { value: this.props.data[15], name: '豆' },
                      { value: this.props.data[16], name: '甗' },
                      { value: this.props.data[17], name: '敦' },
                      { value: this.props.data[18], name: '缶' },
                      { value: this.props.data[19], name: '钺' },
                      { value: this.props.data[20], name: '鉴' },
                      { value: this.props.data[21], name: '炉' },
                      { value: this.props.data[22], name: '瓿' },
                      { value: this.props.data[23], name: '彝' },
                      { value: this.props.data[24], name: '觯' },
                      { value: this.props.data[25], name: '簠' },
                      { value: this.props.data[26], name: '杯' },
                      { value: this.props.data[27], name: '铃' },
                      { value: this.props.data[28], name: '台' }
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
export default Pie4;
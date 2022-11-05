import React from 'react';
import ReactECharts from 'echarts-for-react';


class Pie3 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            option : {
                title: {
                  text: '纹饰与数量关系',
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
                      { value: this.props.data[0], name: '蛇纹' },
                      { value: this.props.data[1], name: '窃曲纹' },
                      { value: this.props.data[2], name: '鳞纹' },
                      { value: this.props.data[3], name: '云雷纹' },
                      { value: this.props.data[4], name: '兽面纹' },
                      { value: this.props.data[5], name: '龙纹' },
                      { value: this.props.data[6], name: '凤鸟纹' },
                      { value: this.props.data[7], name: '夔纹' },
                      { value: this.props.data[8], name: '目纹' },
                      { value: this.props.data[9], name: '兽目交连纹' },
                      { value: this.props.data[10], name: '三角纹' },
                      { value: this.props.data[11], name: '联珠纹' },
                      { value: this.props.data[12], name: '波曲纹' },
                      { value: this.props.data[13], name: '乳钉纹' },
                      { value: this.props.data[14], name: '蝉纹' },
                      { value: this.props.data[15], name: '鱼纹' },
                      { value: this.props.data[16], name: '虎纹' },
                      { value: this.props.data[17], name: '兽纹' },
                      { value: this.props.data[18], name: '火纹' },
                      { value: this.props.data[19], name: '绹索纹' },
                      { value: this.props.data[20], name: '绹纹' },
                      { value: this.props.data[21], name: '绳纹' },
                      { value: this.props.data[22], name: '直条纹' },
                      { value: this.props.data[23], name: '涡纹' },
                      { value: this.props.data[24], name: '回纹' },
                      { value: this.props.data[25], name: '沟纹' },
                      { value: this.props.data[26], name: '垂叶纹' },
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
export default Pie3;


//应该是热力图，未实现
import React from 'react'
import mapboxgl from 'mapbox-gl'


class MyMap2 extends React.Component {
    constructor() {
      super();
    }
  
    componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiemhhbmdqaW5neXVhbiIsImEiOiJja2R5cHhoNXYycGVtMnlteXkwZGViZDc2In0.UhckH-74AgPwMsDhPjparQ'
    const map = new mapboxgl.Map({
    container: this.mapContainer, // 地图容器 id
    style: 'mapbox://styles/mapbox/streets-v11', // 样式
    center: [104.294538, 35.860092], // 地图初始中心点 [经度, 维度]
    zoom: 2.4 // 地图初始缩放级别
    });

    map.on('load', function () { 
      map.addSource('points', {
        'type': 'geojson',
        'data': './data.geojson',
        'cluster': true,
        'clusterMaxZoom': 10, // 最大聚合 zoom， 超过这个值则不聚合
        'clusterRadius': 50 // 聚合半径，默认 50
      });
      map.addLayer({
        id: 'heatmap',
        source: './data.geojson',
        type: 'heatmap',
        paint: {
          'heatmap-radius': 40,
          "heatmap-color": {
            "stops": [
                [0.0, "blue"], 
                [0.5, "yellow"], 
                [1.0, "red"]
            ]
      }
    }
    });
      })
      
    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-left');
    this.setState({map: map});
    }
    
    render() { 
        return (
          <div>
            {/* 引入样式文件 */}
            <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
            {/* 地图容器 */}
            <div ref={el => this.mapContainer = el} style={{height: '90%', width:'95%', position: 'absolute'}} />
          </div>
        );
      }
}
export default MyMap2;
//高级功能的标注点页面，应该没啥改的
import React from 'react'
import mapboxgl from 'mapbox-gl';
import { buildQueries } from '@testing-library/react';
const datasource=require("./datasource.json");

class MyMap extends React.Component {
  constructor(props){
    super(props);
    var data = [];
    // for(var i=0;i<datasource.length;i++){
    //   if(datasource[i]["地点"]!=='空'){
    //     data.push({
    //       position:[parseFloat(datasource[i]['经度']),parseFloat(datasource[i]['维度'])],
    //       content:datasource[i]['名称']+" "+datasource[i]['年代']
    //     })
    //   }
    // }
    console.log(data);
    this.state = {
      data: data,
    };
  }
  //componentDidMount
  componentDidMount() {
    const markers = this.state.data;
 
    mapboxgl.accessToken = 'pk.eyJ1IjoiemhhbmdqaW5neXVhbiIsImEiOiJja2R5cHhoNXYycGVtMnlteXkwZGViZDc2In0.UhckH-74AgPwMsDhPjparQ';
    const map = new mapboxgl.Map({
      container: this.mapContainer, // container ID
      style: 'mapbox://styles/mapbox/satellite-v9', // style URL
      center:[110, 30], // starting position [lng, lat]
      zoom: 4,
      maxZoom:5
    });

    markers.forEach(function(marker) {
        const marker_on = new mapboxgl.Marker({
        color: marker.color,
        anchor:"center",
        draggable: false,
      }).setLngLat(marker.position)
      .addTo(map);

      const el = marker_on.getElement();
      el.addEventListener('click', () => {
        window.alert(marker.content);
      });

      const popup = new mapboxgl.Popup({anchor:marker.direction,offset: marker.offset, className: 'info',closeButton:false,closeOnClick:false,width:'95%'})
      .setLngLat(marker.position)
      .addTo(map);
    });
    let url = null;
    let that = this;
    map.on('click', function (e) {
      // document.getElementById('info').innerHTML =       /* innerHTML 属性设置或返回表格行的开始和结束标签之间的 HTML  */
      //     // e.point is the x, y coordinates of the mousemove event relative
      //     // to the top-left corner of the map
      //     JSON.stringify(e.point) + '<br />' +
      //         // e.lngLat is the longitude, latitude geographical position of the event
      //     JSON.stringify(e.lngLat);  /* JSON.stringify() 方法可以将任意的 JavaScript 值序列化成 JSON 字符串 */
          url = 'http://localhost:3002/around?x='+e.lngLat.lng+'&y='+e.lngLat.lat;
          console.log(url);
          fetch(url).then(res=>res.json())
          .then((response)=>{
            console.log(response);
            var mydata = [];
            for(var i=0;i<response.length;i++){
              var pos = [];
              pos.push(parseFloat(response[i].lon));
              pos.push(parseFloat(response[i].lat));
              var content = response[i].name+response[i].time;
              mydata.push({
                position:pos,
                content:content,
                color:'#00BFFF'
              })
            }
            that.setState({data: mydata});
            that.forceUpdate();
            console.log(that.state);
            that.state.data.forEach(function(marker) {
              const marker_on = new mapboxgl.Marker({
              color: marker.color,
              anchor:"center",
              draggable: false,
            }).setLngLat(marker.position)
            .addTo(map);
            
            let timer = setTimeout(() => {
              marker_on.remove();
            }, 2000);
      
            const el = marker_on.getElement();
            el.addEventListener('click', () => {
              window.alert(marker.content);
            });
      
            const popup = new mapboxgl.Popup({anchor:marker.direction,offset: marker.offset, className: 'info',closeButton:false,closeOnClick:false,width:'95%'})
            .setLngLat(marker.position)
            .addTo(map);
            
          });
          })
        });
  }
  // componentWillReceiveProps(){
    
  // }
    

  render() { 
    return (
      <div>
        {/* 引入样式文件 */}
        <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
        {/* 地图容器 */}
        <pre id='info'></pre>
        <div ref={el => this.mapContainer = el} style={{height: '90%', width:'95%', position: 'absolute'}} />
      </div>
    );
  }
}

export default MyMap;

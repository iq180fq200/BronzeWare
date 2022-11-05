//包含路由配置
import { Routes,BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './App.css';
import Chartdemo from './chartdemo';
import Chartdemo2 from './chartdemo2';
import Chartdemo3 from './chartdemo3';
import Chartdemo4 from './chartdemo4';
import Chartdemo5 from './chartdemo5';
import Listdemo from "./listdemo";
import Home from "./home";
import {Component} from "react";
import Expert from "./expert";
import Advanced from "./advanced";
import Searchtimeandregion from "./searchtimeandregion"
import Searchmuseum from "./searchmuseum"

import React from 'react';
class App extends Component{
  render(){
    
    return(
       
        
    <Router >
     <div className="App">
       
        <Routes>
        <Route path="/" element={<Home/>} exact />
        {/* <Route path="/home" element={<Home/>}> */}
         <Route path='visual' element={<Listdemo/>}>
            <Route path='history' element={<Chartdemo/>}></Route>
            <Route path='region' element={<Chartdemo2/>}></Route>
            <Route path='figure' element={<Chartdemo3/>}></Route>
            <Route path='function' element={<Chartdemo4/>}></Route>
            <Route path='3d'element={<Chartdemo5></Chartdemo5>}></Route>
         </Route>
         <Route path='search' element={<Listdemo/>}>
           <Route path='timeandregion' element={<Searchtimeandregion/>}></Route>
           <Route path='museum' element={<Searchmuseum/>}></Route>
         </Route>

        </Routes>
        <Routes>
        <Route path='advanced' element={<Advanced/>}> </Route>

        </Routes>
        <Routes>
        <Route path='expert' element={<Expert/>}> </Route>

        </Routes>
         </div>
    </Router>
    // <div>
    // <Home/>
    // </div>
    //  <Listdemo/>
      
    
    )
  }
  
}


export default App;





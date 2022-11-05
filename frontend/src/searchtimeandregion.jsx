import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {Button} from 'antd';
import {BaseTable} from 'ali-react-table';

class Searchtimeandregion extends React.Component{
    constructor(props){
        super(props);
        this.state={            
            chooseMusuem:'gugong',
            // chooseRegion:'1',
            chooseTime:'xia',
            dataSource: [
                // { seq: '湖北省', confirm: 54406, cure: 4793, dead: 1457, t: '2020-02-15 19:52:02' },
                // { seq: '广东省', confirm: 1294, cure: 409, dead: 2, t: '2020-02-15 19:52:02' },
                // { seq: '河南省', confirm: 1212, cure: 390, dead: 13, t: '2020-02-15 19:52:02' },
                // { seq: '浙江省', confirm: 1162, cure: 428, dead: 0, t: '2020-02-15 19:52:02' },
                // { seq: '湖南省', confirm: 1001, cure: 417, dead: 2, t: '2020-02-15 19:52:02' },
            ],
            columns: [
                { code: 'seq', name: '编号', width: 150 },
                { code: 'name', name: '名称', width: 100, align: 'right' },
                { code: 'time', name: '年代', width: 100, align: 'right' },
                { code: 'info', name: '信息', width: 100, align: 'right' },
            ],
        };
    }
    
    
    

    timechange = (val) => {
        if(val.target.value==='1'){
            this.setState({chooseTime:'xia'});
        }
        else if(val.target.value==='2'){
            this.setState({chooseTime:'shang'});
        }
        else if(val.target.value==='3'){
            this.setState({chooseTime:'zhou'});
        }
        else if(val.target.value==='4'){
            this.setState({chooseTime:'chunqiu'});
        }
        else if(val.target.value==='5'){
            this.setState({chooseTime:'zhanguo'});
        }
        else if(val.target.value==='6'){
            this.setState({chooseTime:'qin'});
        }
        else if(val.target.value==='7'){
            this.setState({chooseTime:'han'});
        }
        else if(val.target.value==='8'){
            this.setState({chooseTime:'sanguo'});
        }
        else if(val.target.value==='9'){
            this.setState({chooseTime:'jin'});
        }
        else if(val.target.value==='10'){
            this.setState({chooseTime:'nanbeichao'});
        }
        else if(val.target.value==='11'){
            this.setState({chooseTime:'sui'});
        }
        else if(val.target.value==='12'){
            this.setState({chooseTime:'tang'});
        }
        else if(val.target.value==='13'){
            this.setState({chooseTime:'wudaishiguo'});
        }
        else if(val.target.value==='14'){
            this.setState({chooseTime:'song'});
        }
        else if(val.target.value==='15'){
            this.setState({chooseTime:'jin'});
        }
        else if(val.target.value==='16'){
            this.setState({chooseTime:'yuan'});
        }
        else if(val.target.value==='17'){
            this.setState({chooseTime:'ming'});
        }
        else if(val.target.value==='18'){
            this.setState({chooseTime:'qing'});
        }
    }

    // regionchange = (val) => {
    //     if(val.target.value==='1'){
    //         this.setState()
    //     }
    // }

    museumchange = (val) => {
        if(val.target.value==='1'){
            this.setState({chooseMusuem:'gugong'});
        }
        else if(val.target.value==='2'){
            this.setState({chooseMusuem:'guojia'});
        }
        else if(val.target.value==='2'){
            this.setState({chooseMusuem:'shanghai'});
        }
        else if(val.target.value==='2'){
            this.setState({chooseMusuem:'else'});
        }
        else if(val.target.value==='2'){
            this.setState({chooseMusuem:'all'});
        }
    }

    search = () => {
        //do search
        var arg = 'http://localhost:3001/search/time?time=';
        arg += this.state.chooseTime;
        arg += '&museum=';
        arg += this.state.chooseMusuem;
        console.log(arg);
        //从后端取数据用fetch().then().then();
        // fetch(arg)
        // .then(res=>res.json())
        // .then(myjson=>console.log(myjson));
    }

    render() {
        return (
            <div>
                选择朝代：<select onChange={this.timechange} >
                    <option value='1'>夏</option>
                    <option value='2'>商</option>
                    <option value='3'>周</option>
                    <option value='4'>春秋</option>
                    <option value='5'>战国</option>
                    <option value='6'>秦</option>
                    <option value='7'>汉</option>
                    <option value='8'>三国</option>
                    <option value='9'>晋</option>
                    <option value='10'>南北朝</option>
                    <option value='11'>五代十国</option>
                    <option value='12'>宋</option>
                    <option value='13'>金</option>
                    <option value='14'>元</option>
                    <option value='15'>明</option>
                    <option value='16'>清</option>
                </select>
                {/* &nbsp;&nbsp;选择地域：<select onChange={this.regionchange} >
                    <option value='1'>北京</option>
                    <option value='1'>上海</option>
                    <option value='1'>天津</option>
                    <option value='1'>重庆</option>
                    <option value='1'>安徽</option>
                    <option value='1'>福建</option>
                    <option value='1'>甘肃</option>
                    <option value='1'>广东</option>
                    <option value='1'>广西</option>
                    <option value='1'>贵州</option>
                    <option value='1'>海南</option>
                    <option value='1'>河北</option>
                    <option value='1'>黑龙江</option>
                    <option value='1'>湖北</option>
                    <option value='1'>吉林</option>
                    <option value='1'>湖南</option>
                    <option value='1'>江苏</option>
                    <option value='1'>江西</option>
                    <option value='1'>辽宁</option>
                    <option value='1'>内蒙古</option>
                    <option value='1'>宁夏</option>
                    <option value='1'>青海</option>
                    <option value='1'>山东</option>
                    <option value='1'>山西</option>
                    <option value='1'>陕西</option>
                    <option value='1'>四川</option>
                    <option value='1'>河南</option>
                    <option value='1'>西藏</option>
                    <option value='1'>新疆</option>
                    <option value='1'>云南</option>
                    <option value='1'>浙江</option>
                    <option value='1'>台湾</option>
                </select> */}
                &nbsp;&nbsp;选择博物馆：<select onChange={this.museumchange} >
                    <option value='1'>故宫博物馆</option>
                    <option value='2'>国家博物馆</option>
                    <option value='3'>上海博物馆</option>
                    <option value='4'>其他</option>
                    <option value='5'>总馆藏</option>
                </select>
                <Button onClick={()=>this.search()}>一键搜索</Button>
                <br/>
                <BaseTable dataSource={this.state.dataSource} columns={this.state.columns} />
            </div>
        )
    }
}

export  default Searchtimeandregion
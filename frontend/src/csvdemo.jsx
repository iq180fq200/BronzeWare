import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Upload } from 'antd';
import { Layout, Menu, Breadcrumb,Button,Space,Card} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Papa from 'papaparse';
import jschardet from 'jschardet';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Csvdemo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        csvParseData: [],
    };
  }
  checkEncoding = (base64Str) => {
    //这种方式得到的是一种二进制串
    const str = atob(base64Str.split(";base64,")[1]); // atob  方法 Window 对象 定义和用法 atob() 方法用于解码使用 base-64 编码的字符
    //要用二进制格式

    let encoding = jschardet.detect(str);
    encoding = encoding.encoding;
    // 有时候会识别错误
    if(encoding == "windows-1252"){
      encoding = "ANSI";
    }
  }
  render(){
    const _this = this;
    const props = {
      beforeUpload: file => {
        const fReader = new FileReader();
        fReader.readAsDataURL(file); //  readAsDataURL 读取本地文件 得到的是一个base64值
        fReader.onload = function(evt){// 读取文件成功
          const data = evt.target.result;
          const encoding = _this.checkEncoding(data);
          //papaparse.js 用来解析转换成二维数组
          Papa.parse(file, {
            encoding: encoding,
            complete: function(results) {        // UTF8 \r\n与\n混用时有可能会出问题
              const res = results.data;
              if(res[res.length - 1] === ""){    //去除最后的空行 有些解析数据尾部会多出空格
                res.pop();
              }
              // 当前res 就是二维数组的值 数据拿到了 那么在前端如何处理渲染 就根据需求再做进一步操作了
              _this.setState(res);
            }
          });

        }
        return false;
      },
    };
    return(
      <Upload {...props}>
      <Button>
        <Upload type="upload" /> 点击上传csv
      </Button>
    </Upload>
    )
  }
}
export  default Csvdemo
import Taro,{Component} from '@tarojs/taro';
import {view,Text, View} from '@tarojs/components'
import './index.scss'

export default class Index extends Component{
  config = {
    navigationBarTitleText:'首页'
  }  
  constructor(props){
    super(props)
    this.state = {
      list:[
        '吃饭',
        '睡觉',
        '打豆豆',
      ],
      inputVal:''
    }
  }
  componentWillMount(){
  }
  componentDidMount(){
  }
  componentWillUpdate(){
  }
  componentDidUpdate(){
  }
  componentWillUnmount(){
  }
  componentDidHide(){
  }
  componentDidShow(){
  }
  addItem(){
    let {list} = this.state;
    const inputValue = this.inputVal
    if(inputValue == '') return;
    list.push(inputValue);
    this.setState({
      list,
      inputValue: ''
    })
  }
  inputHandler(e){
    this.inputVal = e.target.value;
  }
  
  delItem(e,index){
    let {list} = this.state;
    list.splice(index,1);
    this.setState({
      list
    })
    }
  render(){
    const {list,inputValue} = this.state
      return(
        <View className="index">

          <View className="list_wrap">
            <Text>Todo List</Text>
            <Input className="input" type="text" value={inputValue} onInput={this.inputHandler.bind(this)}></Input>
            <Text className="add" onClick={this.addItem.bind(this)}>添加</Text>
            {
              list.map((item,index)=>{
                return <View>
                  <Text>{index+1}.{item}</Text>
                  <Text className="del" onClick={this.delItem.bind(this,index)}>删除</Text>
                </View>
              })
            }
          </View>
        </View>
      )
    }
}
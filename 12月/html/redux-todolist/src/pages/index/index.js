import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import { connect } from "@tarojs/redux"
import { add, del } from "../../action/index"
import './index.styl'

class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  state={
      newTodo:''
  }
  componentWillMount () { }

  componentDidMount () {
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
deleteItem(index){
    console.log(index)
}
saveNewTodo(e){
    const { newTodo }=this.state
    const { value }=e.detail
    if(newTodo===value)return
    this.setState({
        newTodo:value
    })
}
addTodo(){
    const { add }=this.props
    const { newTodo }=this.state;
    if(!newTodo)return;
    add(newTodo)
    this.setState({
        newTodo:''
    })
}
delTodo(e){
    const { del } = this.props
    const { id }=e.currentTarget.dataset;
    console.log(id)
    del(id)
}
  render () {
      const { todos }= this.props
      const newTodo=this.state
      const todosJsx = todos.map((todo)=>{
          const id = todo.text
          return(
              <View className="todos_item">
                <Text>{ todo.text }</Text>
                  <View className="del"  data-id={ id } onClick={ this.delTodo }>-</View>
              </View>
          )
      })
    return (
      <View className='index todos'>
        <View className="add_wrapp">
            <Input className="todos_item" value={newTodo} onBlur={this.saveNewTodo.bind(this)} ></Input>
            <View className="add" onClick={ this.addTodo.bind(this) }>+</View>
        </View>
        <View >{ todosJsx }</View>
      </View>
    )
  }
}

export default connect(({ todos }) => ({
    todos:todos.todos
}),(dispatch)=>({
    add(data){
        dispatch(add(data))
    },
    del(id){
        dispatch(del(id))
    }
}))(Index)

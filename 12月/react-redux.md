redux 解决是父子层级关系传递数据关系
安装的时候，redux react-redux。redux和react是两个相互独立的。
Redux 是 JavaScript 状态容器，提供可预测化的状态管理。redux来自Flux，独立的数据抽象层。是一个数据管理的设计模式。
react-redux是这个模式在react中的实现    react + react-redux构成react全家桶开发的数据（状态设计）部分
mobx   es7  decorator


组件只使用自己的状态，不需要redux
hedader会用body，body会用header



redux让所有的状态共享后读无所谓，
修改状态值只能按规矩改只有action可以修改状态。对状态写，对所有组件都遵守的约定。组件只能dispatch触发一个action。

reducer是闺房小姐。不可直接调用，action才可以，组件是帅哥，不能见面，dispatch是媒婆，
要保护好数据，设置了reducer。提供并且精确计算状态的函数，组件只有dispatch一个action 才能执行reducer。

context  新的希望，react-redux 基于它实现。



//action
function addTodoWithDispatch(text) {
  const action = {
    type: ADD_TODO,
    text
  }
  dispatch(action)
}

const boundAddTodo = text => dispatch(addTodo(text))
const boundCompleteTodo = index => dispatch(completeTodo(index))

//reducers     switch
{
  todos: [
    {
      text: 'Consider using Redux',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}



context
当你不想在组件树中通过逐层传递props或者state的方式来传递数据时，可以使用Context来实现跨层级的组件数据传递。
如果要Context发挥作用，需要用到两种组件，一个是Context生产者(Provider)，通常是一个父节点，另外是一个Context的消费者(Consumer)，通常是一个或者多个子节点。所以Context的使用基于生产者消费者模式。
对于父组件，也就是Context生产者，需要通过一个静态属性childContextTypes声明提供给子组件的Context对象的属性，并实现一个实例getChildContext方法，返回一个代表Context的纯对象


-connect封装，有关的context的操作都交给它，后代组件，只需要做自己的事。

React特点：
1，动态的模板技术：React提供单向绑定，数据驱动页面，页面改变不会修改数据，所以是单向。
2，高效：state存储数据。体现在通过虚拟DoM（React在内存创建一颗虚拟Dom树，组件发生改变，先在内存在生成新虚拟Dom树，和之前虚拟Dom树的比较，减少真实DOM渲染，提高性能，Dom渲染最耗性能。
3，组件化:高度可复用的模板。
4，灵活：能和现有的库和框架配合使用。

得到浏览器上显示的元素用refs，不能使用Dom。
addto(){
  如果没有bind，指针为空。
  console.log(this.refs.todoVal.value)
将输入框里输入的添加到List
  this.state.List.push(this.refs.todoVal.value)到这一步还不会更新，要通知setstate更新
  this.setState({
    List：this.state.List
  }
}
在Constructor构造器里bind指针，修正指针指向。效率高，性能高。
id娶不到dom元素，用ref
<input type="text" ref="todoVal"/> 
<button onClick={this.addto}/>

react单向数据流，从上到下，从父到子。
子到父传递数据（不推荐）：在父组件定义一个设置state的方法，然后把这个方法通过属性传给子组件，子组件中调用这个方法，把值传入。



constructor(props){
  super(props)
  this.sendDataFromChild=this.endDatatFromChild.bind(this)
  this.state={
    message:'Hello'
  }
}
父组件App定义sendDataFromChild方法，修正this，val是从子Todolist传过来的。message替换成接收到的val。
sendDataFromChild(val){
  this.setState({
    message:val
  })
}
render(){
  return(
    <div>
    <h1>{this.state.message}</h1>
    把方法交给子组件，子组件调用它
    <Todolist title="todo" sendDataFromChild={this.sendDataFromChild}/>
  )
}



留言板
new Date().toLocaleTimeString()  //（本地格式输出）下午9:34:49
时间戳是指格林威治时间1970年01月01日00时00分00秒(

<div classname="App">
<h2>留言板</h2>
<div classname="comments">
  {
    this.state.comments.map(()=>{
      return <div>
      <span></span>
      </div>
    })
  }
  </div>
</div>


<ReactCSSTansitionGroup transitionName="" transitionEnterTimeout={} transitionTimeout={}>{items}</ReactCSSTransitionGroup>
npm react-addons-css-transition-group
.example-enter 进入动画的起点
.example-enter-active 进入动画的终点
.example-leave 离开动画起点
.example-leave-active 离开动画终点




diff算法：web界面由dom树构成，当其中一部分发生变化时，也就是dom节点变化。在react中，状态变化决定界面变化，前后界面对比。知识后需要dom的diff算法

路由：<Route path"/" component={Home}>做匹配工作，path路径自动加载component对应组件，/自动加载home组件.

NavLink链接
activeClassName
activeStyle激活时候的style
isActive参数为function，判断是否是active状态
知道哪个链接被点击，背景色改变，处于激活状态，普通链接没有这个功能。
加exact，点击的变色，其他不变


动态路由传参数（列表页跳到详情页）
组件参数
<Route path="/detail/:paramNmae" component={Home}>
this.props.match.params.paramName

constructor(){
  this.state={
    list:["10010","10086"]
  }
}
render(){
  return(
    <div>
    <ul>{this.state.list.map((item)=>{
      return <li>
      字符串模板``
      $()表要取的的参数
      <link to={`/detail/${item}`}>{item}</Link>
    })}
    </div>
  )
}



重定向，跳转到一个不存在的路由时，和Switch配合使用


flux架构，架构解决复杂的工程化问题
简单不需要用flux
todoList文件夹
export default...{
  render(){
    return(
      <div>
      <input type="text" ref="todoVal"/>
      用箭头函数往里面传参数
      <button onClick={()=>this.props.onClick(this.refs.todoVal.value)}>ADD Todo</button>
      //将来在这里显示列表
    )
  }
}

todoAction文件夹
const TodoActions={
  addTodo:function(){
    TodoDispatcher.dispatch({
      actionType:'ADD_TODO',
      payload:data   //payload承载数据
    })
  }
}

App.js文件
addTodo(data){
  调用action
TodoActions.addTodo(data)
}
store文件

const store=object.assign({},EventEmitter.prototype,{
    list:[],
  addTodoData:function(data){
    this.list.push(data);
  }
  emitChange:function(){
    /通知
  }
  addChangeListener:function(callback){
    //注册事件，调用回调函数
  }
}


render（）{return（
<div><TodoList onClick={this.addtodo}/></div>
）}

dispatcher文件夹

const TodoDispatcher=new Dispatcher()
  TodoDispatcher.regeist(function(action){
    switch(action.actionType){
      case 'ADD_TODO:
      store.addTodoData(action.payload)
          }
  })


Provider




redux-thunk支持action返回不再是{plainobject}，还可以是函数
报错：Actions must be plain objects. Use custom middleware for async actions.
这句话加createStore的第三个参数 applyMiddleware(ReduxThunk)解决






redux自身无法处理异步，redux-thunk有一些性能问题
redux值处理同步

saga是redux 状态异步处理的中间件，
原生的react 通过生命周期或者业务逻辑，来异步请求数据，耦合了redux数据管理业务在UI之中，是不可取的。
- 异步是绝对不可能改变的，(axios,定时器)
promise + generator*yield / async await
放到saga文件中
watch 每一个actionType,take 给一个异步函数去执行，位于中间件中，仍然属于redux
createStore(reducers,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga);
takeEvery(ActionType,gen);

- redux 状态最终仍然是同步处理的，
    put 在saga内部dispatch同步action

- 异步流程很多，所以把他合为一处 => all
redux 的container+components组合
redux 半边天。


'element-theme-default';来自饿了吗，


App去containers文件夹，因为要hoc 一下provider。
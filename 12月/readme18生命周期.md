1,组件也是有实例化的，组件class  mount一个jsx 对象，constructor 本职state声明，可以用于数据的准备或者请求，传统面向对象思想，可以这样用，但是没有必要
2，围绕mount 挂载是首要任务
class Demo extends Component {
  constructor(props,context) {
      super(props,context)
      this.state = {
          //定义state
      }
  }
componentWillMount () {
componentDidMount () {
componentWillReceiveProps (nextProps)
shouldComponentUpdate (nextProps,nextState) {
componentWillUpdate (nextProps,nextState) {
componentDidUpdate (prevProps,prevState) {
render () {
    return (
        <div></div>
    )
}
componentWillUnmount () {
}
}
export default Demo;

-性能优化（用户体验的需求），comountDidMount（） 挂载后请求数据，组件的基本ui已渲染 ，mvvm的setstate可以推迟异步执行的数据
props因为MVVM数据流的流向，由外到内，来自于props的更新，更加频繁。
React 性能优化的核心，拒绝不必要的更新
nextProps，nextstate,this.state,this.props新旧比较
shouldComponentupdate（nextprops）{
    if（新旧比较）{return false；}
}




封装一个modal组件 
1,模态框   css  结构  弹窗窗口，标题内容，底栏的按钮组
父子交互，父元素可以调用弹窗组件，弹窗组件可以传递数据给父组件
自身组件类实现，样式




404 Route 不加path  所有都匹配。未匹配到path的路由404  一定要用switch
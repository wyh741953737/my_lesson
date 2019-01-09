import React,{Component} from 'react'
import './modal.css'

class Modal extends Component{
    constructor(props){
        super(props)
        this.state = {
            visible:true
        }
    }
    componentDidMount(){
        console.log('组件挂载')
        this.setState({
            visible:this.props.visible
        })
    }
    componentWillReceiveProps(props){
        console.log('接受props')
        this.setState({
            visible:this.props.visible
        });
    }
    // shouldComponentUpdate(props){
        
    // }
   
    maskClick=()=>{
        console.log("点击了蒙层")
        this.setState({
            visible:false
        })
    }
    closeModal = ()=>{
        const {onClose}=this.props;
        onclose && onclose();
        console.log("通知了父组件，关闭了")
        this.setState({
            visible:false
        })
    }
    confirmModal = () => {
        const {confirm}=this.props;
        confirm && confirm();
        console.log("通知父组件，确定")
        this.setState({
            visible:false
        })
    }
    render(){
        const {visible} =this.state;
        console.log(visible)
        const {title,children} = this.props;
        return visible && 
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="modal-title">
                        {title}
                    </div>
                    <div className="modal-content">
                        {children}
                    </div>
                    <div className="modal-operator">
                        <button className="modal-operator-close" onClick={this.closeModal}>取消</button>
                        <button className="modal-operator-confirm" onClick={this.confirmModal}>确认</button>
                    </div>
                    
                </div>
                <div className="mask" onClick={this.maskClick}>
                
                </div>
            </div>
        
    }
}

export default Modal;

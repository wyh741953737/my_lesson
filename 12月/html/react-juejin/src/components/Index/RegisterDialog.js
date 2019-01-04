import React from "react";
import { Button, Dialog, Input, Menu,Form } from 'element-react';
export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user:{
                username:"",
                email:"",
                password:""
            },
            loading:false
        }
    }
    handleSubmit=(e)=>{
       e.preventDefault();
        this.refs.user.validate((valid)=>{
            if(valid){
                this.props.registerAction(this.state.user);
                this.setState({
                    loading:true
                })
            }
        });
    }
    handleChange(key,value){
        this.setState((state)=>({
            user:Object.assign(state.user,{ [key]:value })
        }))
    }
    render(){
        return(
            <Dialog  
                size="tiny" 
                title="注册" 
                top="30%" 
                customClass="register-dialog"
                visible={ this.props.visible }
                onCancel={ this.props.onClose }
                closeOnClickModal={ false }
            >
                <Dialog.Body>
                    <Form ref="user" model={ this.state.user }>
                        <Form.Item required={true} prop="username"
                            rules={{ required: true, message: '用户名不能为空', trigger: 'blur' }}
                        >
                            <Input value={this.state.user.username} placeholder="请输入用户名"
                                onChange={this.handleChange.bind(this, 'username')} />
                        </Form.Item>
                        <Form.Item required={true} prop="email" rules={{ type:"email",required:true,message:"格式不正确:x@x.x", trigger:"blur" }} >
                            <Input value={ this.state.user.email }  placeholder="请填写邮箱地址" onChange={ this.handleChange.bind(this,"email") } />
                        </Form.Item>
                        <Form.Item required={true} prop="password"
                            rules={{ required: true, message: '密码不能为空', trigger: 'blur' }}
                        >
                            <Input type="password" value={this.state.user.password} placeholder="请输入密码"
                                onChange={ this.handleChange.bind(this, 'password') } />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" onClick={ this.handleSubmit } loading={ this.state.loading }>注册</Button>
                        </Form.Item>
                    </Form>
                </Dialog.Body>
            </Dialog>
        )
    }
}

import React, { Component } from 'react';
import { Button, Dialog, Input, Menu } from 'element-react';
import Register from "./RegisterDialog";

export default class Header extends React.Component{
    constructor(props){ 
        super(props);
        this.state={
            searchInput:"",
            registerDialog:false
        }
    }
    onClose=()=>{
        this.setState({
            registerDialog:false
        })
    }
    render() {
        return (
            <header className="main-header visible">
                <div className="container">
                    <a href="#" className="logo">
                        <img src="https://gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="" className="logo-img" />
                    </a>
                </div>
                <div className="nav-menu">
                    <Menu defaultActive="1" mode="horizontal">
                        <Menu.Item className="Item" index="1">首页</Menu.Item>
                        <Menu.Item className="Item" index="2">专栏</Menu.Item>
                        <Menu.Item className="Item" index="3">收藏夹</Menu.Item>
                        <Menu.Item className="Item" index="4">发现</Menu.Item>
                        <Menu.Item className="Item" index="5">标签</Menu.Item>
                        <Menu.Item className="Item" index="6">
                                <Input size="small" icon="search" placeholder="搜索" />
                        </Menu.Item>
                        <Menu.Item className="Item" index="7">
                            <Button type="text" icon="edit" className="contribute">投稿</Button>
                        </Menu.Item>
                        <Menu.Item className="Item" index="8">
                            <Button type="text" className="login-button">登录</Button>
                            <Button type="text" onClick={ ()=>this.setState({registerDialog:true}) } >注册</Button>
                        </Menu.Item>
                    </Menu>
                </div>
                <Register visible={ this.state.registerDialog } onClose={ this.onClose } registerAction={ this.props.registerAction }></Register>
            </header>
        )
    }
}

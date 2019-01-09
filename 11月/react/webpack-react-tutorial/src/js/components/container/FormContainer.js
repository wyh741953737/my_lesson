import React,{ Component } from 'react';
import Input from "../presentational/input";
class FormContainer extends Component{
    constructor(){  //构造函数
        super();
        this.state = {
            seo_title:""
        }
        this.handleChange = this.handleChange.bind(this);   
    }
    //等待子组件来交流  父子传递的地方
    handleChange(event){
            this.setState({
                [event.target.id]:event.target.value
            })
    }
    render(){            //输出模板
        //代替了wxml
        return(
            <form id="article-form">
                <Input text="SEO title" label="seo_title" type="text" id="seo_title" value={this.state.seo_title} handleChange={this.handleChange}/>
                <div>{this.state.seo_title}</div>
            </form>
           
        ); 
    }
}

export default FormContainer;
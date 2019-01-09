//不同的player JSON
//1,发送   2.接受  输入输出
const Ryu={
    name:'Ryu',
    attack(){//接口方法 接口不一样，英雄就可以替换使用，解耦
        console.log(this.name+'攻击');
    },
    defense(){
        console.log(this.name+'格挡');
    },
    jump(){
        console.log(this.name+'跳跃');
    },
    crouch(){
        console.log(this.name+'蹲下');
    }
}
//回放功能，数据结构，栈
const commandstack=[];

const makeCommand=function(receiver,state){
    return function(){
    if(receiver[state])//如果有英雄的状态（攻击，蹲下等）
    {
    receiver[state]();//执行攻击等方法  
    }
}    
}
const commands={//列出命令
    "119":"jump",
    "115":"crouch",
    "97":"defense",
    "100":"attack"
}
document.onkeypress=function(ev){//按下时生成对象
    var keyCode=ev.keyCode;
    var command=makeCommand(Ryu,commands[keyCode]);
    if(command){//如果
        commandstack.push(command);
        command();
    }

}
document.getElementById('backBtn').addEventListener('click',function(){
var command;
while(command=commandstack.shift()){
    command();
}
},false);
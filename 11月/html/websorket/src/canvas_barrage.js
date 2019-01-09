import Barrage from './barrage.js'
class CanvasBarrage{
    constructor(canvas,video,opts = {}){
        if(!canvas || !video) return;
        this.canvas = canvas;
        this.video = video ;
        this.canvas.width = video.width;
        this.canvas.height = video.height;
        this.ctx = canvas.getContext('2d');
        let defOpts ={     //弹幕的默认属性，安全的data的初始化
            color:'#e91e63',
            speed:1.5,
            opacity:0.5,
            fontSize:20,
            data:[]
        }
        Object.assign(this,defOpts,opts);
        // console.log(this)
        this.isPaused = true;
        this.barrages = this.data.map(item => new Barrage(item,this));
        // 将上述属性直接挂载到对象上，opts{data:[]}
        
    }
    render(){       //形成递归调用
        this.clear();
        this.renderBarage();
        if(!this.isPaused){  //canvas 的刷帧
            requestAnimationFrame(this.render.bind(this));  //bind使this.render指向当前元素、默认 this 指向window
        }   
    }
    clear(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    }
    renderBarage(){
        let time = this.video.currentTime;
        console.log(time);
        this.barrages.forEach(barrage => {
            if(!barrage.flag && time >= barrage.time){
                if(!barrage.isInit){
                    barrage.init();
                    barrage.isInit = true;
                }
                barrage.x -= barrage.speed;
                barrage.render();
            }
            if(barrage.x<-barrage.width){        //barrage 超出了屏幕时，走过整个屏幕，消失
                barrage.flag = true;
            }

        });
    }
}

export default CanvasBarrage;
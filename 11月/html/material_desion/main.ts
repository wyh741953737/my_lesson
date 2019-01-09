interface IDrawerConfig{
enterDOM:HTMLElement;
leaveDOM:HTMLElement;
duration:number;
ease:string;
}
class Drawer implements IDrawerConfig{
    enterDOM:HTMLElement//聲明屬性
    leaveDOM:HTMLElement
     _duration:number=0.5
     _ease:string="ease"
     enterTransition:string
     leaveTransition:string
    // enterTransition:string
    // leaveTransition:string
    get duration(){
        return this._duration;
    }
    get ease(){
        return this._ease;
    }
    set duration(duration:number){
    this._duration=duration;
    }
    set ease(ease:string){
        this._ease=ease;
    }
    constructor(opt){
        this.enterDOM=opt.enterDOM;
        this.leaveDOM=opt.leaveDOM;
        this.initDOMStyle();
        this.updateTransition();

    }
    updateTransition(){
        this.enterTransition=`left:0px;transition:left ${this.duration}s ${this.ease}`;
        this.leaveTransition=`margin-left:200px;transition:margin-left ${this.duration}s ${this.ease}`;
    }
    initDOMStyle(){
        if(this.enterDOM && this.leaveDOM){
            this.enterDOM.setAttribute("style",`transition:left${this.duration}s ${this.ease};`);
            this.leaveDOM.setAttribute("style",`transition:margin-left ${this.duration}s ${this.ease}`);

        }
    }
    enter(){
     if(this.enterDOM &&this.leaveDOM){
         this.enterDOM.setAttribute("style",this.enterTransition);
         this.leaveDOM.setAttribute("style",this.leaveTransition);
     }

    }
}
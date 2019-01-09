class Boom{
    constructor({childList,container,boomNumber,rotate,spread,delayRange,power}={}){
        this.particalList=[];
        this.boomTimer=0;
        this.boomTimeGap=.1e3;
        this.childList=childList || [];
        this.con=container || null;
        this.particalNumbers=boomNumber || 10;
        this.rotate=rotate || 120;
        this.spread=spread || 180;
        this.delayRange=delayRange || 100;
        this.power=power || 3;
        this.createParticals(this.particalNumbers);

    }
    createParticals(num){
        for(i=0;i<number;i++){
            let partical=new Partical();
            this.particalList.push(partical);
        }
    }
    boom(){
        let lastBoomTimer=this.boomTimer;
        let now=+new Date();
        if(now-lastBoomTimer<this.boomTimeGap){
            return;
        }
        this.boomTimer=now;
        let boomNums=0;
        
        let unAimateList=this.particalList.filter()
         }
}
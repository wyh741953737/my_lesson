const DEG=Math.PI/180;
const POWER=10;
const G=5;
const Duration=.4e3;
const Quad=Math.tween.Quad;


class Partical{
    constructor(){
this.StartTime=-1;
this.direction='UP';
this.delay=0;
this.targetZ=0;
this.targetY=0;
this.targetX=0;
this.scaleNum=1;
this.animating=false;
this.parent=null;
this.animEndList=[];
this.dom=document.createElement('di')
    }
}
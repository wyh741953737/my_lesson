export function formatTime(time){
  let seconds=0;
  let minutes=0;
  let hours=0;
  let day=0;
  if(time){
    seconds=time;
    if(seconds>59){
      minutes=Math.floor(seconds/60);
      seconds=seconds % 60;
      if (minutes > 59) {
        hours = Math.floor(minutes / 60);
        minutes= minutes % 60;
        if (hours > 23) {
          day=Math.floor(hours/24);
         hours=hours % 60;
        }
      }
    }
  }
  let ds=day>9 ? day:`${day}`;
  let hs=hours>9? hours:`0${hours}`;
  let ms=minutes>9?minutes:`0${minutes}`;
  let ss=seconds>9?seconds:`0${seconds}`;
  return ds > 0 ? `${ds} ${hs}:${ms}:${ss}`:`${hs}:${ms}:${ss}`;
}
let t='';
export function countDown(that){
  let seconds=that.data.remainTime;
  if(seconds===0){
    that.setData({
      remainTime:0,
      clock:formatTime(0)
    })
    return;
  }
  t=setTimeout(function(){
    that.setData({
      remainTime:seconds-1,
      clock:formatTime(seconds-1)
    });
    countDown(that);
  },1000);
}
export function clearTimeOut(){
  clearTimeOut(t);
}
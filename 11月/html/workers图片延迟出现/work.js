self.addEventListener('message',function(e){
    console.log(e);
    var data=e.data;
    switch(data.cmd){
        case 'start': self.postMessage('Worker start:'+data.msg);  break;
        case 'stop' : self.postMessage('WORKER STOPP:'+data.msg); break;
    }
})
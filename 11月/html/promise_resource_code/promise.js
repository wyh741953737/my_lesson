//手写Promise
class Promise{
    constructor(executor){
      

        this.status='pedding';
        this.value='undefined';
        this.reason=undefined;
        this.onResolveCallbacks=[];
        this.onRejectedCallbacks=[];
        let resolve=(value)=>{
            this.status='resolved';
            this.value=value;
            this.onResolveCallbacks.forEach(fn =>fn())          

        }
        let reject=(reason)=>{
            this.status='reject';
            this.reason=reason;
            this.onRejectedCallbacks.forEach(fn =>fn())  
        }
        executor(resolve,reject);
    }
    then(onFullfield,onRejected)
    {
    // if(this.status==='resolved'){
    //     // onFullfield(this.value);
    // }
    // if (this.status === 'rejected') {
    //     onRejected(this.reason);
    // }
    if (this.status === 'pending') {
          this.onFulfilledCallbacks.push(()=>{
              onFulfilled(this.value);
            });
          this.onRejectedCallbacks.push(()=>{
              onRejected(this.reason);
            });
  }
    }
}

module.exports=Promise;
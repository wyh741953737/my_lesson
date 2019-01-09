globalContext={
    VO:{
        data:[],
        i:3
    }
}

var data=[];
// for(var i=0;i<3;i++){
//     data[0]Context = {
//         Scope: [AO, globalContext.VO]
//     }
//     data[1]Context={
//         scope:[AO,globalContext.AO,VO]
//     }
//     data[2]Context={
//         scope:[AO,globalContext.AO,VO]
//     }
//     data[i]=function(){
//         console.log(i);
//     }
// }
data[0]();
data[1]();
data[2]();


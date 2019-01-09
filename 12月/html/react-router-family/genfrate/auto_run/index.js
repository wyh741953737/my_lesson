var fetch=require('node-fetch');
function* gen(){
    var url="https://api.github.com/users/github";
    var result=yield fetch(url);
    console.log(result.bio);

}
const a=gen();
console.log(a.next());
console.log(a.next({bio:'hello'}));
console.log(a.next());
console.log(result);
result.value.then(function(data){
    return data.json();
}).then(data=>{
    gen.next(data);
})
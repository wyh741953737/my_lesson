// const defaultState=0;
const reducer=(state=defaultState,action)=>{
 switch(action.type){
     case 'INCREMENT': return state+action.payload
     default:
      return state
 }
}
const actions=[
    {type:'INCREMENT',playload:0},
    {type:'INCREMENT',playload:1},
    {type:'INCREMENT',playload:2},
    {type:'INCREMENT',playload:3},
];
const total=actions.reduce(reducer,0);

 console.log(total);

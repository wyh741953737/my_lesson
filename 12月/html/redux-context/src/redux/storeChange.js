export const storeChange=(store,action)=>{
    //reducers
    switch(action.type){
        case 'HEAD':
        return{
            ...store,
            head:action.payload
        }
        case 'BODY':
        return{
            ...store,
            body:action.payload
        }
        default:return {...store}
    }
}
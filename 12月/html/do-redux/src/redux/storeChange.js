//未来就是action,只负责state计算
export const storeChange=(state,action)=>{
    //action
    switch(action.type){
        case 'HEAD_COLOR':
        state.head.color=action.color
        break;
        case 'BODY_TEXT':
        state.body.text=action.text
        break;
        default:
        break;
    }
}

import React, { Component } from 'react'
import AppDispatcher from '../dispatcher/AppDispatcher'
import {EventEmitter} from 'events';
import CommentConstants from '../constants/CommentConstants'
const _comments={}
function create(author,text){
    const id=(new Date()+Math.floor(Math.random()*99999)).toString
    _comments[id]={
        id:id,
        text:text,
        author:author,
        date:new Date()
    }
}
for(let i=0;i<2;i++){
    create('Nate','this.is smaple');
}
function destory(id){
    delete _comments[id]
}
const CommentStore=Object.assign({},EventEmitter.prototype,{
    getAll(){
        const arr=[];
        for(const p in _comments){
            arr.push(_comments[p])
        }
        arr.sort((c1,c2)=>c1.date.getTime()-c2.date.getTime());
        return arr;
    },
emitChange(){
    this.emit('change');
},
addChangeListener(callback){
    this.on('change',callback)
},
removeChangeListener(callback){
    this.removeListener('change',callback);
}


});
AppDispatcher.register(action=>{
    let text;
    switch(action.actionType){
        case CommentConstants.COMMENT_CREATE:
        text=action.text.trim();
if(text!==''){
    create(action.author,action.text);
    CommentStore.emitChange();
}
break;
case CommentConstants.TODO_DESTROY:
       destory(action.id);
    CommentStore.emitChange();
    break;
    default:
}
})
export default  CommentStore ;
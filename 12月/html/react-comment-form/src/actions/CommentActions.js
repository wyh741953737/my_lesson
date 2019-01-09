import AppDispatch from '../dispatcher/AppDispatcher';
import CommentConstants from '../constants/CommentConstants';

export default {
 create(author,text){
     AppDispatch.dispatch({
         actionType:CommentConstants.COMMENT_CREATE,
         author:author,
         text:text,
     })
 },
 destory(id){
     AppDispatch.dispatch({
         actionType:CommentConstants.COMMENT_DESTORY,
         id:id,
     })
 }
}

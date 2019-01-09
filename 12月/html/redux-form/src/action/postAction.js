import {FETCH_POSTS} from './types';
import {NEW_POST} from './types';
export const fetchPosts=()=> dispatch=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(
        post=>dispatch({
            type:FETCH_POSTS,
            payload:post
        })
    )
}
export const createPost=postData =>dispatch=>{
    console.log('createPost');
     fetch('https://jsonplaceholder.typicode.com/posts',{
         method:'POST',
         headers:{
             'content-type':'application/json'
         },
         body:JSON.stringify(postData)
     })
     .then(res=>res.json())
     .then(
         post=>dispatch({
             type:NEW_POST,
             payload:post
         })
     )
}
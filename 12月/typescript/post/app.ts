//post 文章！标题，
enum PostStatus{
    //枚举
    Unpublished,
    published,
    Draft
}
interface Post{
    //定义一个接口
    title:string;
    content?:string;
    status:PostStatus;
}

let post:Post={
    title:'过五关斩六将',
    status:PostStatus.Unpublished,
    content:'春招以来，我的面试在哪'
}

console.log(post);
console.log(PostStatus[0]);
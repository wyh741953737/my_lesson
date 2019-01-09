//post 文章！标题，
var PostStatus;
(function (PostStatus) {
    //枚举
    PostStatus[PostStatus["Unpublished"] = 0] = "Unpublished";
    PostStatus[PostStatus["published"] = 1] = "published";
    PostStatus[PostStatus["Draft"] = 2] = "Draft";
})(PostStatus || (PostStatus = {}));
var post = {
    title: '过五关斩六将',
    status: PostStatus.Unpublished,
    content: '春招以来，我的面试在哪'
};
console.log(post);
console.log(PostStatus[0]);

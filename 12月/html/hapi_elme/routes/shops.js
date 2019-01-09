const GROUP_NAME='shops';

module.exports=[{
    method:'GET',
    path:`/${GROUP_NAME}`,
    handler:async (request,reply)=>{
        reply();
    },
    config:{
        tags:['api',GROUP_NAME],
        description:'获取店铺列表'
    },
},
{
    
}]
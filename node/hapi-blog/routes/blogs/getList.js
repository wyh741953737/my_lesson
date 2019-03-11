const redis = require('../../redis')

module.exports = (GROUP_NAME, options) => ({
  method: 'GET',
  path: `/${GROUP_NAME}`,
  handler: async (request, reply) => {
    const { limit, page } = request.query;
    const offset = (page -1) * limit;
    // reply(limit, page, offset);
    const { client, getAsync, setAsync } = redis(request);
    // mysql 有IO瓶颈， 用户量一大不做缓存就会炸， 
    //一般使用redis或早起的memorycache（一种内存的缓存数据库）来做内存数据库
    // redis 是在内存中 读取速度快， 没有IO压力
    // 取数据，先去判断redis中有没有， 如果有就直接返回，没有的话就去mysql set redis
    const redisResName = `postlimit${limit}offset${offset}list`
    console.log(redisResName)
    const redisRes = await getAsync(redisResName) // 从redis拿数据
    console.log('---------------------')
    console.log(redisRes)
    console.log('+++++++++++++++++++++')
    if(redisRes) {
      reply(JSON.parse(redisRes))
    } else {
      const { rows: results, count: totalCount } = await options.models.blogs.findAndCountAll({
        limit,
        offset
      });
      await setAsync(redisResName, JSON.stringify({ results, totalCount }))
      client.EXPIRE(redisResName, 50) // 设置过期时间
      reply({ results, totalCount });
    }
  },
  config: {
    tags: ['api', GROUP_NAME],
    description: '获取文章列表',
    validate: {
      query: {
        ...options.paginationDefine
      }
    }
  }
})

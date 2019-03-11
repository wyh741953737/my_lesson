const Hapi = require('hapi');
const server = new Hapi.Server();
const routesBlogs = require('./routes/blogs')
// const routesUsers = require('./routes/users')
const hapiSwagger = require('./plugins/hapi-swagger');
const pluginHapiPagination = require('./plugins/hapi-pagination')
const pluginHapiRedis = require('./plugins/hapi-redis');
require('env2')('./.env')
const { env } = process;

server.connection({
  host: env.HOST,
  port: env.PORT
});

const start = async() => {
  await server.register([
    ...hapiSwagger,
    pluginHapiPagination,
    pluginHapiRedis
  ]);
  server.route([
    ...routesBlogs
  ])
  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

start()
yarn add  env2环境变量加载器,.env文件进行环境配置
首先考虑安全，数据库的连接信息，统一放到.env文件下保存，.env文件保存在.gitignore文件中，本地有，github提交里不会有   .env2读取env文件变成json
yarn add  mysql2
yarn add sequelize
yarn add sequelize-cli

node_modules\.bin\sequelize init初始化



一个应用对应一个数据库 eleme DB_NAME
使用sequlize工具来形象化mysql，让数据库更好使用的orm（库）工具。mysql关系型数据库。行列结构映射成类和对象。

sequlize提供一个类，shop。new Shop（）把数据交给它。new Shop（{}）
save（），find（），all（），count（）。
mysql2一起合作，翻译成sql语句。=》到mysql的database里面执行。
MySQL2交给sequlize


操作代码运行环境分为开发环境develope， 线上环境production 测试环境test  线上mysql密码不会给我们
process.env.NODE_ENV 设置当前环境
线上机器走.env.prod
本地开发.env 只需要有基本结构和一些数据就好了
env2 绑我们将.env装读取为配置



mysql2第二个版本 负责数据库连接，数据驱动。翻译工作
node js逻辑，
。

\node_modules\.bin\sequelize db:create 创建数据库
\node_modules\.bin\sequelize migration:create --name create-shops-table 创建数据表


yarn add hapi-redis@6

mysql -uroot -p
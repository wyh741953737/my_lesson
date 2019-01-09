const path=require('path');
module.exports={
    entry:"./src/main.js",
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'.')  
      },
    module:{
        rules:[
            {
                test:/\.js/,
                use:{
                    loader:'babel-loader'
                },
                exclude:'/node_modules/'
            }
        ]
    },
    resolve:{
        extensions:['.js'],

    } ,
    devServer:{
        contentBase:'.'
    }
}
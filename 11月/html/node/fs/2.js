// const fs=require('fs');//读取文件
// const path=require('path');//获得路径
// //遍历目录及子目录，输出文件名，大小
// //递归 在下层重复用递归
// const getFilesInDir=function(dir){
//     var results=[path.resolve(dir)];
//     var files=fs.readdirSync(dir,'utf8');
//     files.forEach(file=>{
//         file=path.resolve(dir,file);
//         const status=fs.statSync(file);
//         console.log(status);
//         if(status.isFile()){
//             results.push(file);
//              }else{
//                 results=results.concat(getFilesInDir(file));

//              }
//     })
//     return results; 
// }
// const files=getFilesInDir('./src');
// console.log(files);
var fs = require('fs');
var path = require('path');

//解析需要遍历的文件夹，我这以E盘根目录为例
var filePath = path.resolve('./src');

//调用文件遍历方法
fileDisplay(filePath);

/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
function fileDisplay(filePath){
    //根据文件路径读取文件，返回文件列表
    fs.readdir(filePath,function(err,files){
        if(err){
            console.warn(err)
        }else{
            //遍历读取到的文件列表
            files.forEach(function(filename){
                //获取当前文件的绝对路径
                var filedir = path.join(filePath,filename);
                //根据文件路径获取文件信息，返回一个fs.Stats对象
                fs.stat(filedir,function(eror,stats){
                    if(eror){
                        console.warn('获取文件stats失败');
                    }else{
                        var isFile = stats.isFile();//是文件
                        var isDir = stats.isDirectory();//是文件夹
                        if(isFile){
                            console.log(filedir);
                        }
                        if(isDir){
                            fileDisplay(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
                        }
                    }
                })
            });
        }
    });
}
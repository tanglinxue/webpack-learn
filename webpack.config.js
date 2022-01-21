/* 
此文件是是webpack的配置文件,用于指定webpack去执行那些任务
*/
const {resolve} = require('path')
module.exports = {
  entry:'./src/js/index.js',//入口
  output:{
    path:resolve(__dirname,'dist'),//输出的路径
    filename:'./js/index.js'//输出的文件的名字
  },
  mode:'development',//配置工作的模式
   //所有的Loader都要配置在module对象中的rules属性中
    //rules是一个数组,数组中的每一个对象就是一个Loader,
    //Loader的特点:下载后无需引入,只需声明
  module:{
    rules:[{
      test:/\.less$/,//匹配所有的less文件
      use:[
        'style-loader',//用于在HTML文档中创建一个style标签,将样式塞进去
        'css-loader',//将less编译后的css转换成为CommentJs的一个模块
        'less-loader'//将less编译为css,但是不生成单独的css文件,在内存中.
      ]
    },
     ///使用eslint-loader解析,js语法检查
    {
      test:/\.js$/,//匹配所有js文件
      exclude:/node_modules/,//排除node_modules文件夹
      enforce:'pre',//提前加载使用
      use:["eslint-loader"]
    },
     //js兼容性处理(语法转换)
    {
      test:/\.js$/,//值检测js文件
      exclude:/node_modules/,//排除node_modules文件夹
      use:{
        loader:'babel-loader',
        options:{
          //预设： 只是babel做怎么样的兼容性处理
          presets: [
            [
                '@babel/preset-env',
                {
                    useBuiltIns: 'usage',//按需加载和全部加载不能同时进行
                    corejs: {//指定core-js版本
                        version: 3
                    },
                    targets: {//指定兼容性做到那个版本的浏览器
                        chrome: '58', //兼容版本大于60的chrome浏览器
                        ie: '9'
                    }
                }
            ]
          ],
          cacheDirectory:true,//开启babel缓存
        }
      }
    },
     //使用url-loader处理样式文件中的图片
     {
       test:/\.(png|jpg|gif)$/,
       use:[
         {
           loader:'file-loader',
           options:{
            name:'[hash:5].[ext]',//修改文件的名称[hash:5] hash值的前5位,[ext] 文件的扩展名
           }
         }
       ]
     }
   ]
  },
}

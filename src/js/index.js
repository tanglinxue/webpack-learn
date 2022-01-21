/*
    注意:
        该index.js不同于学习模块化时,那个用于会总js的文件
        模块化技术的index.js只用于汇总各个js模块
        该index.js是webpack的[入口文件]
        该文件可以用于汇总:js,css,json,图片,音频,视频
*/
//import '@babel/polyfill';//包含ES6的高级语法
import {sum} from './module1'
import {sub} from './module2'
import module3 from './module3'
//在入口文件中引入json文件
import a from '../json/test.json'
//在入口文件中引入样式,不用写from
import '../css/index.less'

console.log(sum(1,2))
console.log(sub(4,3))
console.log(module3.mul(5,6))
console.log(module3.div(10,5))
console.log(a,typeof a)

let c = 2;
console.log(c)

let promise = new Promise((resolve)=>{
  setTimeout(()=>{
    resolve('哈哈')
  },2000)
  
})

promise.then(data=>{
  console.log(data)
})

//webpack 只管翻译ES6的模块语法变为浏览器认识的,但是不会处理其他的新语法
setTimeout(()=>{
  console.log("定时器到点了");
},1000);





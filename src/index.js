import "./css/base.less"
import {join}  from "lodash"
console.log('lodash',join([1,2,3,4],2))
// import(/* webpackChunkName:'moduleA' */ './components/moduleA').then(module=>{
//     console.log(module)
// })
// import { add } from "./components/moduleA"
// console.log('this is add1',add(1, 2))
// console.log('this is add2',add(3, 4))
// console.log('this is muni1',muni(8, 7))

import(/* webpackChunkName:'moduleB' */ './components/moduleB').then(module=>{
    console.log(module)
})
import(/* webpackChunkName:'moduleC' */ './components/moduleC').then(module=>{
    console.log(module)
})
import(/* webpackChunkName:'moduleD' */ './components/moduleD').then(module=>{
    console.log(module)
})

class Hello{
    constructor(){
        console.log("hello")
    }
}
let hello = new Hello()

let gen = function * (){
    yield 1
    yield 2
    return 3
}
let genr = gen()
console.log(genr.next())

let pro = new Promise(function(resolve, inject){
    setTimeout(function(){
        resolve('promise')
    },2000)
})
pro.then((res)=>{
    console.log(res)
})

// js中引用的图片不会走postcss-sprites插件
import img from './assets/image/sp/sp2/us@2x.png'
const image = new Image()
image.src = img
document.getElementById('root').appendChild(image)


if (module.hot) {
    module.hot.accept()
}

export default "this is app root"
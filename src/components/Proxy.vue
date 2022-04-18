<template>
  <div>
    <h3>
      Object.defineProperty---VS---Proxy
    </h3>
    <pre class="obj1">
Vue2  Object.defineProperty(data, 'count', {get() {}, set() {},})


class Oberver{
    constructor(data){
        for(let key of Object.keys(data)){
            if(typeof data[key]==='object'){
                data[key]=new Oberver(data[key])
            }
            Object.defineProperty(this,key,{
                enumerable:true,
                configurable: true,
                get(){
                    console.log(`你访问了${key}`)
                },
                set(newVal){
                    console.log(`你设置了${key}`)
                    data[key]=newVal
                }
            })
        }
    }
}
    </pre>
    <pre class="obj2">
Vue3 new Proxy(data, {get(key) { }, set(key, value) { },})


let people={
    name:'jay',
    age:22
}
let proxy=new Proxy(people,{
    get(target,key,receiver){
        console.log(`你访问了${key}`)
        return Reflect.get(target,key,receiver)
    },
    set(target,key,value,receiver){
        console.log(`设置属性为${key}`)
        console.log(`新的属性：${key},值为${value}`)
        Reflect.set(target,key,value,receiver)
    }
})
    </pre>
  </div>
</template>
<style scoped>
.obj1 {
  width: 45%;
  background: #dcdcdc;
  padding: 10px;
  margin-left: 10px;
  float: left;
}
.obj2 {
  width: 45%;
  background: #dcdcdc;
  padding: 10px;
  margin-left: 10px;
  float: left;
}
</style>

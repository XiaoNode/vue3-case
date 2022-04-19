<template>
  <div>Reactive effect 手动触发</div>
  <br />
  total=price*num
  <br/>
  <!-- 购物车包含多商品，数量，总价，税费，重量，是否包邮，都需要effect -->
</template>

<script setup>
let price = 3;
let num = 2;
let total = 0;
let t=price*num

console.log(`price:${price},num:${num},total:${t}`)

num=3
console.log(`price:${price},num:${num},total:${t}`)

// let effect = () => {  // 相关运算
//   total = price * num;
// };

// let dep=new Set()

// function track(){ // 记录运算
//     dep.add(effect)
// }

// function trigger(){ // 重新执行运算
//     dep.forEach(effect=> effect())
// }

// num=3
// console.log(t)

// track()
// trigger()
// console.log(total)

</script>

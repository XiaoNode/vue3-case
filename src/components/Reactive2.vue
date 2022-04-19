<template>
  <div>Reactive with Proxy</div>
  <div>
     product = { price: 3, num: 2 }
  </div>
  <br />
  <p>dep(type of Set)存储底层effect,如num=3,==>total= price*num</p>
  <code>
    The Set object lets you store unique values of any type
  </code>
  <p>depsMap(type of Map)存储 {price:10， weight:60},多个effect/dep</p>
  <code>
    The Map object holds key-value pairs and remembers the original insertion
    order of the keys. Any value (both objects and primitive values) may be used
    as either a key or a value.
  </code>
  <p>
    targetMap(type of WeakMap)存储product{ price: 10, weight:60 },多个depsMap
  </p>
  <code>
    A WeakMap is a collection of key/value pairs whose keys must be objects,
    with values of any arbitrary JavaScript type.
  </code>
  <code> </code>
</template>

<script setup>
// 所有effect
const targetMap = new WeakMap();

// 记录运算
function track(target, key) {
  // product, price变更==> price*num  effect
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    // 如无则加
    targetMap.set(target, (depsMap = new Map())); // 无product{},创建新的
  }

  let dep = depsMap.get(key); // 获取跟price有关的effect
  if (!dep) {
    // 如无则加
    depsMap.set(key, (dep = new Set()));
  }

  dep.add(effect);
}

// 重新执行相关运算
function trigger(target, key) {
  const depsMap = targetMap.get(target); //获取product
  if (!depsMap) {
    // 有无product相关effect
    // 没有，不re-run
    return;
  }
  let dep = depsMap.get(key); // 查找与price相关的effect
  if (dep) {
    dep.forEach((effect) => {
      effect();
    });
  }
}

// proxy 代理
function reactive(target) {
  const handlers = {
    // get的时候，添加相关的effect track(target,key)
    get(target, key, receiver) {
      let result = Reflect.get(target, key, receiver);
      track(target, key);
      return result;
    },
    // set的时候，重新运行相关effect
    set(target, key, value, receiver) {
      let oldValue = target[key];
      let result = Reflect.set(target, key, value, receiver);
      if (result && oldValue != value) {
        trigger(target, key);
      }
      return result;
    },
  };
  return new Proxy(target, handlers);
}

// let product = { price: 3, num: 2 };
let product = reactive({ price: 3, num: 2 });
let total = 0;

// 相关运算
var effect = () => {
  total = product.price * product.num;
};

effect();

console.log("初始总价 = " + total);
product.num = 3;
console.log("变更数量num = " + product.num);
console.log("变更后总价 = " + total);
</script>
<style scoped>
code {
  background: #dcdcdc;
  padding: 7px;
  margin-left: 15px;
}
</style>

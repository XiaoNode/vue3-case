<template>
<!-- modal是要挂在的dom节点 -->
  <teleport to="#modal">
    <div class="center">
      <p>
        <code>Teleport</code
        >方法，可以把Dialog组件渲染到你任意想渲染的外部Dom上，不必嵌套再#app里了，这样就不会互相干扰了
      </p>
    </div>
  </teleport>

  <div>
    <Node/>
  </div>

</template>

<script lang="ts" setup>
// render function
import { h, createApp} from 'vue'
const list = [
  { name: "xxx", code: 1 },
  { name: "yyy", code: 2 },
];

const Node = {
  render() {
    // v-for"item in list"  函数渲染 --- 模板渲染
    return list.map((item) => {
      return h("div", { key: item.code }, item.name);
    });
  },
};

createApp({
  components:{
    Node,
  }
}) 
</script>
<style>
.center {
  width: 200px;
  height: 200px;
  border: 2px solid black;
  background: white;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -100px;
}
</style>

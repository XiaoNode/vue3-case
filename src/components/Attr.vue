<template>
  <div>
    <p>我是子组件:</p>
    <p>props: {{ name }}--{{ age }}</p>
    <button @click="sendMessage">发送</button>
    <p>$attrs: {{ $attrs }}</p>
    <hr />
    
    <!-- 跨级传递事件:在中间组件(Attr组件)绑定了$listeners属性，孙组件中能直接触发父组件中的getName事件-->
    <!-- 跨级传递数据:通过在中间组件绑定$attrs属性，Grandson组件可以直接获取到App组件中传递下来的props-->
    <!-- props与attrs属性传递互斥 vue3$listeners已弃用 -->
    <Grandson v-bind="$attrs" :disabled="false" />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import Grandson from "./Grandson.vue";
export default defineComponent({
  inheritAttrs: false,
  components: { Grandson },
  setup(props, context) {
    interface DataProps {
      sendMessage: () => void;
    }
    const data: DataProps = reactive({
      sendMessage: () => {
        context.emit("getName", "haha");
      },
    });
    onMounted(() => {
      console.log("context.attrs", { ...context.attrs });
    });
    const refData = toRefs(data);
    return {
      //   data,
      ...refData,
    };
  },
});
</script>

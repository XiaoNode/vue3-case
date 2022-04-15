<template>
  <div>
    <p>我是孙组件:</p>
    <p>props: {{ name }}--{{ age }}</p>
    <p>$attrs: {{ $attrs }}</p>
    <p style="color:red">
      vue3中listeners已弃用
    </p>
    <!-- <button @click="listeners.getAge">listeners.getAge</button> -->
    <!-- 跨级发送事件方式一 -->
    <button @click="sendEvent">调用最上级getAge()</button>
    <!-- 跨级发送事件方式二 -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from "vue";
export default defineComponent({
  //   props: {
  //     name: String,
  //     age: Number,
  //   },
  setup(props, context) {
    // context传递三个参数 { attrs, slots, emit }
    interface DataProps {
      sendEvent: () => void;
    }
    const data: DataProps = reactive({
      sendEvent: () => {
        context.emit("getAge");
      },
    });

    onMounted(() => {
      //   context.emit("getAge");
      console.log("context.attrs", { ...context.attrs });
    });

    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
});
</script>

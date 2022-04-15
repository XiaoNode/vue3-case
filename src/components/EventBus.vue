<template>
这是组件：EventBus
<p>Vue3中去掉自带的bus,可使用第三方event-bus</p>
  获取root级function<button @click="getRootMsg">获取</button>
</template>
<script lang="ts">
import { defineComponent, toRefs, onMounted, reactive } from "vue";
import { eventBus } from "@ai-zen/event-bus";
export default defineComponent({
  setup() {
    interface DataProps {
      getRootMsg: () => void;
    }
    const data: DataProps = reactive({
      getRootMsg: () => {
        eventBus.emit("onMsg", "🐱🐱🐱");
      },
    });

    const refData = toRefs(data);

    return {
      ...refData,
    };
  },
});
</script>

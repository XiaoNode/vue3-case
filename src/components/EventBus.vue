<template>
这是组件：EventBus
<p>Vue3中去掉自带的bus,可使用第三方event-bus等插件</p>
  获取root级function<button @click="getRootMsg">获取</button>
  <pre style="background:#dcdcdc; width:50%; padding:10px;">
V2:
    
const bus = new Vue()

...
bus.$emit('updateCount')
...
bus.$on('vtab-index', (data) => {
  ...
})
  </pre>
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

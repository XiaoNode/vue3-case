<template>
  <div class="content">
    Vue.js v3 data count:{{ count }} <button @click="addCount">add count</button>
    <p>computed double count:{{ doubleCount }}</p>
  </div>
  <hr/>
  <pre>
import { defineComponent, reactive, toRefs, onMounted, 
computed,watch } from "vue";

export default defineComponent({
  components: {},
  setup() {
    const dataMap = reactive({
      count: 0,
    });

    const addCount = () => {
      dataMap.count++;
    };

    const doubleCount = computed(() => {
      return dataMap.count * 2;
    });

    watch(
      () => dataMap.count,
      (value) => {
        console.log(value);
      }
    );    

    onMounted(() => {
      dataMap.count = 1;
    });

    return {
      ...toRefs(dataMap),
      addCount,
      doubleCount,
    };
  },
});    
  </pre>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, computed,watch } from "vue";
export default defineComponent({
  setup() {
    const dataMap = reactive({
      count: 0,
    });

    const addCount = () => {
      dataMap.count++;
    };

    const doubleCount = computed(() => {
      return dataMap.count * 2;
    });

    // 监听多个是，name=>[name1,name2],返回newValue[0],newValue[1]
    watch(
      () => dataMap.count,
      (value) => {
        console.log(`V3 watch:${value}`);
      }
    );    

    onMounted(() => {
      dataMap.count = 1;
    });

    return {
      ...toRefs(dataMap),
      addCount,
      doubleCount,
    };
  },
});
</script>
 
import { ref, reactive } from "vue";

const globalCount = ref(0);
const city = reactive({ name: "ShenZhen", code: 10001 });

const addGlobalCount = () => {
  globalCount.value++;
};

const subGlobalCount = () => {
  globalCount.value--;
};

export { globalCount, city, addGlobalCount, subGlobalCount };

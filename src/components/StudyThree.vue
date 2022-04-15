<template>
  <div>
    <h2>接口图片请求</h2>
    <div v-if="loading">Loading.....</div>
    <img v-if="loaded" :src="result.url" style="width:500px" />
    <div></div>
  </div>
</template>
<script lang="ts">
import useUrlAxios from "../hooks/useURLAxios";
const app = {
  name: "Three",
  setup() {
    const dataUrl = "http://127.0.0.1:6677/list/product";
    const { result, loading, loaded, error } = useUrlAxios(dataUrl);
    return { result, loading, loaded, error };
  },
};
export default app;
</script>

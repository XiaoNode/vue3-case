<template>
  <div class="content">
    <div class="vue2"><VueCon2 /></div>
    <div class="vue3"><VueCon3 /></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from "vue";
import VueCon2 from "./VueCon2.vue";
import VueCon3 from "./VueCon3.vue";
export default defineComponent({
  components: {
    VueCon2,
    VueCon3,
  },
  setup() {
    const dataMap = reactive({
      product: {
        id: "",
        name: "",
        images: [],
      },
    });

    const getNewPro = (data: any) => {
      console.log(data);
      dataMap.product = data;
    };

    onMounted(() => {
      console.log("11");
    });
    return {
      ...toRefs(dataMap),
      getNewPro,
    };
  },
});
</script>

<style scoped>
.content {
  padding-top: 10px;
}
.vue2{
    width: 45%;
    float: left;
    background: #dcdcdc;
    padding: 10px;
}
.vue3{
    width: 45%;
    float: left;
    background: #dcdcdc;
    padding: 10px;
    margin-left: 10px;
}
</style>

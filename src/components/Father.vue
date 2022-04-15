<template>
  <div>二代目，继承了一套房子:<code>{{ house }}</code></div>
  <div><Son :house="house" /></div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Son from "./Son.vue";
export default defineComponent({
  name: "Father",
  components: { Son },
  props: {
    house: String,
  },
  setup() {
    return {};
  },
});
</script>

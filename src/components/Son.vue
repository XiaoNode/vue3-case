<template>
  三代目，有<code>{{ house }}</code
  >,也有<code>{{ house2 }}</code>
</template>
<script lang="ts">
import { defineComponent, inject } from "vue";
export default defineComponent({
  props: {
    house: String,
  },
  setup() {
    let house2 = inject("house2");
    return {
      house2,
    };
  },
});
</script>

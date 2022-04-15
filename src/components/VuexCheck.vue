<template>
  V2: Vuex-mode: {{ mode }} <input type="text" v-model="changeValue" />
  <button @click="changeMode">
    change Vuex mode
  </button>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      changeValue: "",
    };
  },
  computed: {
    ...mapState({
      mode: (state) => state.User.mode,
    }),
  },
  methods: {
    changeMode() {
      this.$store.commit("User/SET_MODE", this.changeValue);
    },
  },
};
</script>

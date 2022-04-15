<template>
<br>
  V3: Vuex-isCollapse:
  {{ state.Controls.isCollapse }}
  <button @click="changeMode">Switch isCollapse</button>
  Vuex-userInfo:{{ state.User.userInfo }}
  <!-- <input type="text" v-model="newName" /> -->
  <button @click="changeName">change userInfo</button> {{newName}}
</template>

<script lang="ts">
import { defineComponent} from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore();
    const changeMode = () => {
      store.commit("Controls/TOOGLESIDEBAR");
    };
    const changeName=()=>{
      store.commit("User/SET_USER_INFO_NAME",'xxxxx');
    }

    return {
      state: store.state,
      changeMode,
      newName:'',
      changeName
    };
  },
});
</script>

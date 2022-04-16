<template>
  <div class="divcenter">
    选项：
    <select v-model="data.componentName">
      <option
        :value="item.name"
        v-for="(item, index) in data.componentType"
        :key="item"
        >{{ index + 1 }}--{{ item.value }}</option
      >
    </select>
    <component
      :is="data.componentName"
      v-if="data.componentName !== 'Father' && data.componentName !== 'Attr'"
    />

    <div v-if="data.componentName === 'mokuai'">
      <h2>引入模块，可替代mixins,可以引入单个方法</h2>
      <div>{{ nowTime }}</div>
      <div><button @click="getNowTime">显示时间</button></div>

      <br />
      <p>globalCount: {{ globalCount }}</p>
      <button @click="addGlobalCount">globalCount ++</button>
      <button @click="subGlobalCount">globalCount --</button>

      <br />
      <br />
      另一个hooks:
      {{ mousePosition }}
    </div>

    <div v-if="data.componentName === 'Suspense1'">
      <!-- Suspense是有两个template插槽的，第一个default代表异步请求完成后，显示的模板内容。fallback代表在加载中时，显示的模板内容 -->
      <Suspense>
        <template #default>
          <AsyncShow />
        </template>
        <template #fallback>
          <h1>Loading...</h1>
        </template>
      </Suspense>
    </div>

    <div v-if="data.componentName === 'Father'">
      一代目，拥有<code>{{ data.house }}</code>
      <Father :house="data.house" />
    </div>

    <div v-if="data.componentName === 'Attr'">
      最上级:name:{{ data.name }},age:{{ data.age }}
      <hr />
      <Attr
        :name="data.name"
        :age="data.age"
        @getName="data.getName"
        @getAge="data.getAge"
      />
    </div>

    <div v-if="data.componentName === 'Directive'">
      警告<span v-warn>这段文字</span>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  onErrorCaptured,
  provide,
  watch,
  onMounted,
} from "vue";
import { eventBus } from "@ai-zen/event-bus";
import { timeData } from "./hooks/useNowTime";
import {
  globalCount,
  addGlobalCount,
  subGlobalCount,
} from "./hooks/useGlobalCount";
import { nowTime, getNowTime } from "./hooks/useNowTimeSingle";
import useMousePosition from "./hooks/useMousePosition";
import StudyOne from "./components/StudyOne.vue";
import Contrast from "./components/Contrast.vue";
import StudyThree from "./components/StudyThree.vue";
import Proxy from "./components/Proxy.vue";
import Modal from "./components/Modal.vue";
import AsyncShow from "./components/AsyncShow.vue";
import LifeCycle from "./components/LifeCycle.vue";
import Father from "./components/Father.vue";
import Attr from "./components/Attr.vue";
import Vuex from "./components/Vuex.vue";
import EventBus from "./components/EventBus.vue";
// defineComponent是用来解决TypeScript情况下，
// 传统的Vue.extends无法对组件给出正确的参数类型推断的。
// 也就是说在TypeScript环境中如果参数类型推断不正常时，
// 用defineComponent()组件来进行包装函数。
import comArr from "./arrData";
export default defineComponent({
  name: "App",
  components: {
    StudyOne,
    Contrast,
    StudyThree,
    Proxy,
    Modal,
    AsyncShow,
    LifeCycle,
    Father,
    Attr,
    Vuex,
    EventBus,
  },

  setup() {
    onErrorCaptured((error) => {
      console.log(`error====>`, error);
      return true;
    });

    onMounted(() => {
      eventBus.on("onMsg", (a) => data.returnMsg(a));
    });

    interface DataProps {
      componentType: { value: string; name: string }[];
      componentNumber: number;
      componentName: string;
      house: string;
      name: string;
      age: number;
      getName: (val: string) => void;
      getAge: () => void;
      returnMsg: (msg: string) => void;
    }

    const data: DataProps = reactive({
      componentType: comArr,
      componentNumber: 0,
      componentName: "StudyOne",
      house: "北京房产",
      name: "小明",
      age: 18,
      getName(val: string) {
        console.log(data.name);
        alert(val);
      },
      getAge() {
        alert(data.age);
      },
      returnMsg(msg: string) {
        alert(msg);
      },
    });

    watch(
      () => data.componentName,
      (value) => {
        console.log(value);
      }
    );

    provide("house2", "上海房产");

    return {
      data,
      timeData,
      nowTime,
      getNowTime,
      globalCount,
      addGlobalCount,
      subGlobalCount,
      ...useMousePosition(),
    };
  },
  directives: {
    warn: {
      // 指令的定义
      mounted(el) {
        el.style.color = "#f00";
        el.style.fontWeight = "bold";
        el.style.cursor = "pointer";
      },
    },
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.divcenter {
  text-align: left;
  width: 65%;
  margin: 0 auto;
}
</style>

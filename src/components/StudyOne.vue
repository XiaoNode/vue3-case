<template>
  <p v-if="!!globalCount">
    公用状态管理：<b>globalCount: {{ globalCount }}</b>
    <br />
    {{ city }}
  </p>
  <p>
    生命周期console状态 {{ lifeCycleConsole }}
    <button @click="lifeCycleConsole = !lifeCycleConsole">
      switch console
    </button>
  </p>
  <p
    v-for="(item, index) in options"
    :key="item"
    @click="selectOptionFun(index), alertName(item)"
    style="cursor: pointer;
    background: #dcdcdc;"
  >
    {{ item }}
  </p>
  <div>你选择了【{{ selectOption }}】选项</div>
  <input v-model="name" />
  <input v-model="data11" />
  <br />
  Vue3 data:{{ name }}
  <br />
  Vue2 data:{{ data11 }}
</template>

<script lang="ts">
import { globalCount, city } from "../hooks/useGlobalCount";
import {
  defineComponent,
  ref,
  reactive,
  toRefs,
  watch,
  watchEffect,
  onMounted,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
  onRenderTracked, // 状态跟踪
  onRenderTriggered, // 状态触发
} from "vue";
export default defineComponent({
  name: "App",
  // 因为 props 是响应式的，你不能使用 ES6 解构，因为它会消除 prop 的响应性。
  // props: {
  //   title: String,
  // },
  // setup(props, context) {}
  setup() {
    console.log("1.setup,开始创建组件");
    interface DataProps {
      name: string;
      lifeCycleConsole: boolean;
      options: string[];
      selectOption: string;
      selectOptionFun: (index: number) => void;
      setName: (name: string) => void;
    }
    const data: DataProps = reactive({
      name: "来自3.x的数据",
      // options:[]变为响应式
      lifeCycleConsole: true,
      options: ref(["土星", "地球", "火星"]),
      selectOption: "", //data.options[0],
      selectOptionFun: (index: number) => {
        data.selectOption = addSomething(data.options[index]);
      },
      setName: (name: string) => {
        return name;
      },
    });
    const addSomething = (something: string) => {
      return something + "";
    };

    // 需指定值
    // watch(
    //   () => data.name,
    //   (value) => {
    //     console.log(value + "!!!");
    //   }
    // );
    
    // watchEffect ==> onStateChanged
    watchEffect(() => {
      console.log(data.name);
    });

    onBeforeMount(() => {
      consoleMsg("2.组件挂在在页面之前执行，----onBeforeMount");
    });

    onMounted(() => {
      // console.log("3.组件挂载在页面之后执行---onMounted");
      consoleMsg("3.组件挂载在页面之后执行---onMounted");
    });

    onBeforeUpdate(() => {
      consoleMsg("4.组件更新之前---onBeforeUpdate");
    });

    onUpdated(() => {
      consoleMsg("5.组件更新之后---onUpdated");
    });

    onRenderTracked((event) => {
      consoleMsg("状态跟踪组件--onRenderTracked");
      // console.log(event);
    });

    onRenderTriggered((event) => {
      consoleMsg("状态触发组件--onRenderTriggered");
      // console.log(event); // 追踪被改变的值，oldValue,newValue
    });

    const consoleMsg = (msg: string) => {
      data.lifeCycleConsole ? console.log(msg) : "";
    };
    const refData = toRefs(data);

    return {
      // data, // data时，template--data.name
      ...refData, // refData时，template--name
      globalCount,
      city,
    };
  },

  //兼容2.x写法
  data() {
    return {
      data11: "来自2.x的数据",
    };
  },
  computed: {},
  watch: {
    data11(val) {
      console.log(val + "!!!");
    },
  },
  methods: {
    alertName(val: string) {
      val === "地球" ? alert("来地球了") : "";
    },
  },
  mounted() {
    console.log("mounted");
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
</style>

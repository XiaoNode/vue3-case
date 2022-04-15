<template>
  <a href="https://vuex.vuejs.org/zh/guide/state.html" target="blank"
    >Vuex Core</a
  >
  <p>----State:状态树</p>
  <p>
    ----Getters:store 的计算属性，getter
    的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算
  </p>
  <p>
    ----Mutations:更改store的state的唯一方法就是提交mutations,例:<code
      >this.$store.commit('setVuexValue', tempValue)</code
    >,<code>setVuexValue</code>是mutations定义的方法
  </p>
  <p>
    ----Actions:Action类似于mutation,不同在于1.Action 提交的是
    mutation，而不是直接变更状态;2.Action 可以包含任意异步操作
  </p>
  <pre>
      const store = new Vuex.Store({
        state: {
          count: 0
        },
        mutations: {
          increment (state) {
            state.count++
          }
        },
        actions: {
          increment (context) {
            context.commit('increment')
          }
        }
      })
    </pre
  >
  <!-- <p>
    Action 通过 store.dispatch 方法触发：
  </p>
  <pre>
      store.dispatch('increment')
    </pre
  >
  <p>
     action 可以在内部执行异步操作：
  </p>
  <pre>
      actions: {
        incrementAsync ({ commit }) {
          setTimeout(() => {
            commit('increment')
          }, 1000)
        }
      }      
    </pre
  > -->
  <p>
    ----Modules:由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store
    对象就有可能变得相当臃肿。Vuex 允许我们将 store
    分割成模块（module）。每个模块拥有自己的
    state、mutation、action、getter、甚至是嵌套子模块
  </p>
  <VuexCheck />
  <VuexCheck2 />
</template>

<script>
import VuexCheck from "./VuexCheck.vue";
import VuexCheck2 from "./VuexCheck2.vue";
export default {
    components: { VuexCheck,VuexCheck2 },
}
</script>

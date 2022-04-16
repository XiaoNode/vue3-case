<template>
  <div class="lefeclyce">
    setup()
    :开始创建组件之前，在beforeCreate和created之前执行。创建的是data和method<br />
    onBeforeMount() : 组件挂载到节点上之前执行的函数。 <br />
    onMounted() : 组件挂载完成后执行的函数。 onBeforeUpdate():
    组件更新之前执行的函数。<br />
    onUpdated(): 组件更新完成之后执行的函数。 <br />
    onBeforeUnmount(): 组件卸载之前执行的函数。 onUnmounted():
    组件卸载完成后执行的函数<br />
    onActivated():
    被包含在<code>keep-alive</code>中的组件，会多出两个生命周期钩子函数。被激活时执行。<br />
    onDeactivated(): 比如从 A 组件，切换到 B 组件，A 组件消失时执行。<br />
    onErrorCaptured(): 当捕获一个来自子孙组件的异常时激活钩子函数。<br />

    <h2>Vue.js 2 和 Vue.js 3 生命周期对比</h2>
    <pre class="db">
        <code class="language-js">
        Vue.js 2--------------Vue.js 3
        <span class="hljs-function"><span class="hljs-title">beforeCreate</span>  -&gt;</span> setup()  第一个钩子，在beforeCreate created之前
        <span class="hljs-function"><span class="hljs-title">created</span>       -&gt;</span> setup()
        <span class="hljs-function"><span class="hljs-title">beforeMount</span>   -&gt;</span> onBeforeMount
        <span class="hljs-function"><span class="hljs-title">mounted</span>       -&gt;</span> onMounted
        <span class="hljs-function"><span class="hljs-title">beforeUpdate</span>  -&gt;</span> onBeforeUpdate
        <span class="hljs-function"><span class="hljs-title">updated</span>       -&gt;</span> onUpdated
        <span class="hljs-function"><span class="hljs-title">beforeDestroy</span> -&gt;</span> onBeforeUnmount
        <span class="hljs-function"><span class="hljs-title">destroyed</span>     -&gt;</span> onUnmounted
        <span class="hljs-function"><span class="hljs-title">activated</span>     -&gt;</span> onActivated
        <span class="hljs-function"><span class="hljs-title">deactivated</span>   -&gt;</span> onDeactivated
        <span class="hljs-function"><span class="hljs-title">errorCaptured</span> -&gt;</span> onErrorCaptured
        </code>
    </pre>
  </div>
</template>

<style scoped>
.lefeclyce {
  width: 800px;
  text-align: left;
  margin: 0 auto;
}
.db{
  font-size: 18px;
  font-weight: bold;
}
</style>

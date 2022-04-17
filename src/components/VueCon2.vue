<template>
  <div class="content">
    Vue.js v2 data count:{{ count }}
    <button @click="addCount">add count</button>
    <p>computed double count:{{ doubleCount }}</p>
  </div>
  <hr />
  <pre style="height: 557px;">
export default {
  data() {
    return {
      count: 0,
    };
  },

  computed: {
    doubleCount() {
      return this.count * 2;
    },
  },

  watch: {
    count(val) {
      console.log(val);
    },
  },

  mounted() {
    this.$data.count++;
  },
  
  methods: {
    addCount() {
      this.$data.count++;
    },
  },
};
  </pre>
  <hr/>
  <pre>
    ...
    dataA
    ...
    ...
    function1
    ...
    ...
    function6
    ...
    ...
    function11
    ...
  </pre>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },

  computed: {
    doubleCount() {
      return this.count * 2;
    },
  },

  watch: {
    count(val) {
      console.log(`V2 watch:${val}`);
    },
  },

  mounted() {
    this.$data.count++;
  },

  methods: {
    addCount() {
      this.$data.count++;
    },
  },
};
</script>

<template>
  <div id="app">
    <Child :title="foo" :count="bar" />
    {{ hoge }}
    <Button @my-event="hoge = $event" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import Child from "@/components/child.vue";
import Button from "@/components/Button.vue";

export default defineComponent({
  components: { Child, Button },
  setup: () => {
    const foo = ref("abc");
    const bar = ref(123);
    const hoge = ref("hoge")

    return {
      foo,
      bar,
      hoge
    };
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

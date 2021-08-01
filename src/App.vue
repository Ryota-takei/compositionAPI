<template>
  <div id="app">
    <section class="hero is-primary">
      <div class="hero-body">
        <p class="title">
          <router-link to="/">spaceX</router-link>
        </p>
        <p class="subtitle">
          selct what you like
        </p>
      </div>
    </section>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
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

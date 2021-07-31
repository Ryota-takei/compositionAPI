<template>
  <div id="app">
    <section class="hero is-primary">
      <div class="hero-body">
        <p class="title">
          spaceX
        </p>
        <p class="subtitle">
          selct what you like
        </p>
      </div>
    </section>
    <rocket-list :loading="loading" :rockets="rockets" />
  </div>
</template>
<script lang="ts">
import { useQuery, useResult } from "@vue/apollo-composable";
import { defineComponent, watch } from "@vue/composition-api";
import { GET_ROCKETS } from "./qeuries/queries";
import { Rockets } from "@/types/queryTypes";
import RocketList from "@/components/rockets/RocketList.vue";

interface RocketsRes {
  rockets: Rockets[];
}

export default defineComponent({
  components: { RocketList },
  setup() {
    const { result, error, loading, onError } = useQuery<RocketsRes>(
      GET_ROCKETS
    );
    const rockets = useResult(result);

    onError((error) => {
      console.log(error);
      alert("エラーが発生しました");
    });

    return {
      rockets,
      error,
      loading,
    };
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

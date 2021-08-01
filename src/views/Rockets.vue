<template>
  <div>
    <div v-if="loading">
      <b-loading
        :is-full-page="false"
        v-model="loading"
        :can-cancel="true"
      ></b-loading>
    </div>
    <div class="card" v-else-if="rocket">
      <header class="card-header">
        <p class="card-header-title">
          {{ rocket.name }}
        </p>
      </header>
        <div class="content">
          {{rocket.company}} <br>
          {{rocket.country}} <br>
          {{rocket.type}} <br>
          <a :href="rocket.wikipedia">wikipedia</a>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { GET_ROCKET } from "@/qeuries/queries";
import { Rocket } from "@/types/queryTypes";
import { useQuery, useResult } from "@vue/apollo-composable";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    id: {
      type: String,
    },
  },
  setup(props) {
    const { onError, result, loading } = useQuery<Rocket>(GET_ROCKET, {
      id: props.id,
    });
    const rocket = useResult(result, null, (data) => data?.rocket);

    onError((error) => {
      console.log(error);
      alert("エラーが発生しました");
    });

    return { rocket, loading };
  },
});
</script>

<style scoped>
.card {
  width: 50%;
  margin: 0 auto;
}
.card-header {
  text-align: center;
}

@media screen and (max-width: 500px) {
  .card {
    width: 100%;
  }
}
</style>

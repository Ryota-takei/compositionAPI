<template>
  <div class="container">
    <div v-if="loading">
      <b-loading
        :is-full-page="false"
        v-model="loading"
        :can-cancel="true"
      ></b-loading>
    </div>
    <div v-else-if="rockets">
      <ul v-for="rocket in rockets" :key="rocket.id">
        <li>
          <div class="box" @click="clickBox(rocket.id)">
            {{ rocket.name }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { useQuery, useResult } from "@vue/apollo-composable";
import { defineComponent, watch } from "@vue/composition-api";
import { GET_ROCKETS } from "@/qeuries/queries";
import { Rockets } from "@/types/queryTypes";
import router from "@/router";

interface RocketsRes {
  rockets: Rockets[];
}

export default defineComponent({
  setup() {
    const { result, error, loading, onError } = useQuery<RocketsRes>(
      GET_ROCKETS
    );
    const rockets = useResult(result);

    onError((error) => {
      console.log(error);
      alert("エラーが発生しました");
    });

    const clickBox = (num: string) => {
      router.push(`/rockets/${num}`);
    };

    return {
      rockets,
      error,
      loading,
      clickBox,
    };
  },
});
</script>

<style scoped>
.box:hover {
  cursor: pointer;
  background-color: rgb(243, 243, 243);
  opacity: 0.6;
}
</style>

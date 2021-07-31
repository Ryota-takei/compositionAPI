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
          <div class="box" @click="clickBox">
            {{ rocket.name }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import { Rockets } from "@/types/queryTypes";

export default defineComponent({
  name: "RocketList",
  props: {
    rockets: {
      type: Array as PropType<Rockets[]>,
    },
    loading: {
      type: Boolean,
    },
  },
  setup() {
    return {};
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

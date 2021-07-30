<template>
  <div>
    <button @click="handleClick">Click me!</button>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup(props, {emit}) {
    const handleClick = () => {
      emit("my-event", "hogeweww");
    };

    return { handleClick };
  },
});
</script>

<style></style>

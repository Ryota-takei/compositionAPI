<template>
  <div>
    title: {{ title }} <br />
    count: {{ count }} <br />
    {{ dobuleCount }} <br />
    <button @click="handleClick">押してー！</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "Child",
  props: {
    title: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  setup(props, context) {
    const dobuleCount = computed(() => props.count * 2);
    const handleClick = () => {
      context.emit("input", props.count + 1);
    };

    return {
      dobuleCount,
      handleClick,
    };
  },
});
</script>

<template>
  <div>
    title: {{ title }} <br />
    count: {{ count }} <br />
    {{ dobuleCount }}
  </div>
</template>

<script>
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
  setup(props) {
    const dobuleCount = computed(() => props.count * 2);

    return {
      dobuleCount,
    };
  },
});
</script>

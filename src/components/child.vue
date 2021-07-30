<template>
  <div>
    title: {{ title }} <br />
    count: {{ count }} <br />
    
  </div>
</template>

<script>
import { defineComponent, ref } from "@vue/composition-api";

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
  setup() {
    const foo = ref("abc");
    return {foo};
  },
});
</script>

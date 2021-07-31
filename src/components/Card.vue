<template>
  <div>
    <h1>
      {{ post.title }}
    </h1>
    <br />
    <p v-if="user">by{{ user.name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "@vue/composition-api";
import { Post } from "@/App.vue";

type User = {
  id: number;
  name: string;
  company: string;
  username: string;
  email: string;
};

export default defineComponent({
  // name: "Card",
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },
  setup(props) {
    const user = ref<User>();

    const url = "https://jsonplaceholder.typicode.com/users";
    const getUserInfomation = async () => {
      try {
        const res = await fetch(`${url}/${props.post.userId}`);
        const userInfo: User = await res.json();
        user.value = userInfo;
      } catch (error) {
        console.log(error);
      }
    };

    getUserInfomation();

    return {
      user,
    };
  },
});
</script>

<style></style>

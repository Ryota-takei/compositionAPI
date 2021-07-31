<template>
  <div id="app">
    <Child :title="foo" :count="count" v-model="count" />
    <Button @my-event="hoge = $event" />
    {{ count }}
    <div v-for="post in posts" :key="post.id">
      <Card :post="post" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import Child from "@/components/child.vue";
import Button from "@/components/Button.vue";
import Card from "@/components/Card.vue";

export type Post = {
  userId: number;
  id: number;
  title: string;
};
export default defineComponent({
  components: { Child, Button, Card },

  setup: () => {
    const foo = ref("abc");
    const count = ref(123);
    const posts = ref<Post[]>([]);

    const url = "https://jsonplaceholder.typicode.com/posts";
    const getUsers = async () => {
      try {
        const res = await fetch(url);
        const postLists: Post[] = await res.json();
        console.log(postLists)
        posts.value = postLists;
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();

    return {
      foo,
      count,
      posts,
    };
  },
});
</script>

<style>
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

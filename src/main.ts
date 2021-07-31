import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import VueCompositionApi from "@vue/composition-api";
import { provide } from "@vue/composition-api";
import { DefaultApolloClient } from "@vue/apollo-composable";
import "buefy/dist/buefy.css";

const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "https://api.spacex.land/graphql/",
});
const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

Vue.use(Buefy);
Vue.use(VueCompositionApi);

Vue.config.productionTip = false;

new Vue({
  router,
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: (h) => h(App),
}).$mount("#app");

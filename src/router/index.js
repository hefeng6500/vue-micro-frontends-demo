import Vue from "vue";
import VueRouter from "vue-router";

import Foo from "../components/Foo.vue";
import Bar from "../components/Bar.vue";

import First from "../app-first/entry"
import Second from "../app-second/entry"

Vue.use(VueRouter);

const routes = [
  { path: "/foo", component: Foo },
  { path: "/bar", component: Bar },
  First,
  Second
];
const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

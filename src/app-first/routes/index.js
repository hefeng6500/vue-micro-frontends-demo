import View from "../container.vue";

const routes = {
  path: "/page-constructor",
  component: View,
  children: [
    {
      path: "page-list",
      component: () => import("../components/page-list.vue"),
    },
    {
      path: "page-details",
      component: () => import("../components/page-details.vue"),
    },
  ],
};

export default routes;

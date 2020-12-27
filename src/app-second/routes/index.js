import View from "../container.vue";

const routes = {
  path: "/user-management",
  component: View,
  children: [
    {
      path: "user",
      component: () => import("../components/user.vue"),
    },
    {
      path: "role",
      component: () => import("../components/role.vue"),
    },
  ],
};

export default routes;

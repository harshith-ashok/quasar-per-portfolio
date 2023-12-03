const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    name: "home",
    children: [{ path: "", component: () => import("src/pages/HomePage.vue") }],
  },
  {
    path: "/about",
    component: () => import("layouts/MainLayout.vue"),
    name: "about",
    children: [
      { path: "", component: () => import("src/pages/AboutPage.vue") },
    ],
  },
  {
    path: "/contact",
    component: () => import("layouts/MainLayout.vue"),
    name: "contact",
    children: [
      { path: "", component: () => import("src/pages/ContactPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

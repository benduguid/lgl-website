import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/adminLogin",
      name: "adminLogin",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AdminLogin.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      // route level code-splitting
      // this generates a separate chunk (Admin.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Admin.vue"),
    },
    {
      path: "/addRecipe",
      name: "addRecipe",
      // route level code-splitting
      // this generates a separate chunk (Admin.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AddRecipe.vue"),
    },
    {
      path: "/browse",
      name: "browse",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/BrowseView.vue"),
    },
    {
      path: "/browseRecipes",
      name: "browseRecipes",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/BrowseAllRecipes.vue"),
    },
    {
      path: "/removeRecipe",
      name: "removeRecipe",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/RemoveRecipe.vue"),
    },
    {
      path: "/allergyPage",
      name: "allergyPage",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AllergyPage.vue"),
    },
    {
      path: "/highlightRecipe",
      name: "highlightRecipe",
      // route level code-splitting
      // this generates npm a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/HighlightRecipe.vue"),
    },
    {
      path: "/recipe/:recipe_id",
      name: "recipePage",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/RecipePage.vue"),
    },
    {
      path: "/removeRecipe",
      name: "removeRecipe",
      // route level code-splitting
      // this generates npm a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/RemoveRecipe.vue"),
    },
  ],
});

export default router;

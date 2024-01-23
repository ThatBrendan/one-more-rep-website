// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../components/IndexPage.vue"),
    name: "Home",
  },
  {
    path: "/workout",
    component: () => import("../components/WorkoutComponents/Workout.vue"),
    name: "Workout",
  },
  {
    path: "/meal-prep",
    component: () => import("../components/MealPrepComponents/MealPrep.vue"),
    name: "Meal-Prep",
  },
  {
    path: "/equipments",
    component: () => import("../components/EquipmentComponents/Equipments.vue"),
    name: "Equipments",
  },
  {
    path: "/about",
    component: () => import("../components/AboutComponents/AboutPage.vue"),
    name: "About",
  },
  {
    path: "/workout/:title",
    component: () =>
      import("../components/WorkoutComponents/WorkoutDetails.vue"),
    name: "WorkoutDetail",
    props: true,
  },
  {
    path: "/challenges/:title",
    component: () =>
      import("../components/WorkoutComponents/ChallengesDetails.vue"),
    name: "ChallengesWorkout",
    props: true,
  },
];

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    return { top: 0 };
  },
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

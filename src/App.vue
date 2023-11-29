<template>
  <v-layout>
    <v-navigation-drawer
      theme="dark"
      expand-on-hover
      width="200"
      class="black"
      rail
      permanent
    >
      <v-list>
        <router-link :to="{ name: 'Home' }">
          <v-list-item
            prepend-avatar="@\assets\brandLogo.png"
            title="One More Rep"
            subtitle="Your go-to fitness app"
          ></v-list-item>
        </router-link>
      </v-list>
      <v-divider></v-divider>
      <v-list density="compact" nav v-for="(m, index) in menu" :key="index">
        <v-list-item
          :prepend-icon="m.avatar"
          :title="m.title"
          :to="{ name: m.link }"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main style="height: 100vh"> <router-view /></v-main>
  </v-layout>
</template>

<script lang="ts" setup>
const menu = [
  {
    title: "Home",
    link: "Home",
    avatar: "mdi-home",
  },
  {
    title: "Workouts",
    link: "Workout",
    avatar: "mdi-weight-lifter",
  },
  {
    title: "Meal-Prep",
    link: "Meal-Prep",
    avatar: "mdi-food-fork-drink",
  },
  {
    title: "Equipments",
    link: "Equipments",
    avatar: "mdi-dumbbell",
  },
  {
    title: "About",
    link: "About",
    avatar: "mdi-account-multiple",
  },
];
</script>
<style>
main {
  min-height: 100vh;
}
</style>

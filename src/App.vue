<template>
  <nav>
    <v-layout>
      <v-app-bar class="navbar" color="black">
        <router-link :to="{ name: 'Home' }">
          <img
            src="@\assets\brandLogo.png"
            alt="One rep Logo"
            class="companyLogo"
          />
        </router-link>
        <v-toolbar-items class="hide-mobile">
          <v-spacer></v-spacer>
          <v-btn
            v-for="m in menu"
            :key="m.title"
            :to="{ name: m.link }"
            variant="plain"
            class="text-capitalize boldFont white-text"
            >{{ m.title }}</v-btn
          >
        </v-toolbar-items>
        <v-app-bar-nav-icon
          @click.stop="toggleNav"
          class="hide-desktop mr-0"
          density="comfortable"
        >
        </v-app-bar-nav-icon>
      </v-app-bar>
    </v-layout>
  </nav>
  <div class="mobile-nav container text-center">
    <div class="top-half">
      <span class="close mb-10" @click="toggleNav">&times;</span>
      <p v-for="m in menu" :key="m.title">
        <router-link
          :to="{ name: m.link }"
          class="h6 white-text"
          @class="toggleNav"
          >{{ m.title }}</router-link
        >
      </p>
    </div>
  </div>
  <router-view />
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";

let open = false;

function toggleNav() {
  open = !open;

  if (open) {
    document.body.classList.add("open");
  } else {
    document.body.classList.remove("open");
  }
}

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
  margin-top: var(--navbar-height);
}
.open .mobile-nav {
  transform: translate(0%);
}

.close {
  display: block;
  text-align: right;
  font-size: 3rem;
  color: var(--white);
}
.navbar {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.mobile-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: var(--black);
  z-index: 99999;
  overflow-y: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translateX(100%);
  transition: transform 0.5s ease-in-out;
}
.mobile-nav span {
  cursor: pointer;
}
img.companyLogo {
  width: 70%;
}
</style>

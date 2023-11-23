<template>
  <nav>
    <v-layout>
      <v-app-bar class="navBar" color="black">
        <router-link :to="{ name: 'Home' }">
          <img
            src="@\assets\brandLogo.png"
            alt="one more rep logo"
            class="brandLogo"
            width=""
            height=""
          />
        </router-link>
        <v-toolbar-items class="hide-mobile">
          <v-spacer></v-spacer>
          <v-btn
            v-for="m in menu"
            :key="m.title"
            :to="{ name: m.link }"
            variant="plain"
            class="boldFont headerNav"
          >
            {{ m.title }}
          </v-btn>
        </v-toolbar-items>
        <v-app-bar-nav-icon
          @click.stop="toggleNav"
          class="hide-desktop"
        ></v-app-bar-nav-icon>
      </v-app-bar>
    </v-layout>
  </nav>
  <div class="mobile-nav container text-center">
    <div class="top-half">
      <span class="close mb-10" @click="toggleNav">&times;</span>
      <p v-for="m in menu" :key="m.title">
        <router-link
          :to="{ name: m.link }"
          class="white-text h5"
          @click="toggleNav"
          >{{ m.title }}</router-link
        >
      </p>
    </div>
  </div>
  <router-view />
</template>

<script lang="ts" setup>
const menu = [
  {
    title: "Home",
    link: "Home",
  },
  {
    title: "Workouts",
    link: "Workout",
  },
  {
    title: "Meal-Prep",
    link: "Meal-Prep",
  },
  {
    title: "Equipments",
    link: "Equipments",
  },
  {
    title: "About",
    link: "About",
  },
];
let open = false;

function toggleNav() {
  open = !open;

  if (open) {
    document.body.classList.add("open");
  } else {
    document.body.classList.remove("open");
  }
}
</script>

<style>
.navBar {
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  display: flex;
  justify-content: space-around;
}
main {
  margin-top: var(--navbar-height);
}
img.brandLogo {
  width: 70%;
  height: 20%;
}
.headerNav {
  font-weight: 900;
  opacity: 1;
}
.headerNav:hover{
  color: var(--orange);
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

.open .mobile-nav {
  transform: translate(0%);
}

.close {
  display: block;
  text-align: right;
  font-size: 3rem;
  color: var(--white);
}
.brandLogo {
  border-radius: 50%;
}
</style>

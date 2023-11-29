<template>
  <div class="mt-4">
    <h2 class="text-center">Essential Workouts</h2>
    <div class="col-12 row pa-8">
      <div
        v-for="(w, index) in workout"
        :key="index"
        class="workout-container col-6"
      >
        <img
          :src="w.src"
          :alt="w.title"
          width=""
          height=""
          class="workout-image"
        />
        <div class="workout-title">
          <p class="text-white">{{ w.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import aerobics from "../../assets/aerobics.jpg";
import yoga from "../../assets/yoga.jpg";
import cardio from "../../assets/cardio.jpg";
import strength from "../../assets/strength.jpg";
import crossfit from "../../assets/crossfit.jpg";
import core from "../../assets/core.jpg";
const workout = [
  {
    src: aerobics,
    title: "Aerobics",
  },
  {
    src: yoga,
    title: "Yoga",
  },
  {
    src: cardio,
    title: "Cardio",
  },
  {
    src: strength,
    title: "Strength",
  },
  {
    src: crossfit,
    title: "CrossFit",
  },
  {
    src: core,
    title: "Core",
  },
];
</script>

<style>
.workout-container {
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  min-height: 300px;
  height: 100%;
}
.workout-title {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 5rem 0;
  pointer-events: none;
}
.workout-image {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  object-fit: cover;
  object-position: top;
  width: 100%;
  height: 100%;
  z-index: -1;
  margin: 0 1rem;
}
</style>

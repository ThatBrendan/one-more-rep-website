<template>
  <div class="mt-4 row workout-section">
    <h2 class="text-center mb-4 h3">Essential Workouts</h2>
    <div
      v-for="(w, index) in workout"
      :key="index"
      class="workout-container pa-2 col-12 col-lg-4"
    >
      <div class="workout-inner">
        <img
          :src="w.src"
          :alt="w.title"
          width=""
          height=""
          class="workout-image"
        />
        <div class="workout-title">
          <p class="h3 white-text">{{ w.title }}</p>
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
.workout-section {
  padding: 0 1rem;
}
.workout-container {
  text-align: center;
  margin: 0.5rem 0;
  position: relative;
  min-height: 300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.workout-title {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 7rem 0;
}
.workout-image {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: -1;
  margin: 0 1rem;
  filter: sepia(3%) invert(19%);
}
.workout-inner {
  position: relative;
  min-height: 300px;
  width: 100%;
  margin: 0 1rem;
}

@media screen and (max-width: 767px) {
  .workout-container {
    min-height: 190px;
  }
  .workout-title {
    padding: 4.5rem 0;
  }
  .h3 {
    font-size: 24px;
  }
  .workout-inner {
    margin: 0;
  }
}
</style>

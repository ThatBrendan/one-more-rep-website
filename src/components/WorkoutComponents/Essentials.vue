<template>
  <div class="mt-4 row workout-section">
    <h2 class="text-center mb-4 h3">Essential Workouts</h2>
    <div
      v-for="(w, index) in workout"
      :key="index"
      class="workout-container pa-2 col-12 col-lg-4"
    >
      <img
        :src="`/workout/${w.workoutSegment}.jpg`"
        :alt="`${w.workoutSegment} workout image`"
        width=""
        height=""
        class="workout-image"
      />
      <div class="workout-inner">
        <div class="workout-title">
          <p class="h3 white-text text-capitalize">{{ w.workoutSegment }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

interface WorkoutItems {
  workoutSegment: string;
  workouts: string[];
}

const workout = ref<WorkoutItems[]>([]);
const apiURL = "http://localhost:5126/api/WorkoutApp/GetWorkout";

const getWorkOut = async () => {
  try {
    const response = await fetch(apiURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Http error ${response.status}`);
    }

    const data: [] = await response.json();
    workout.value = data;
  } catch (error) {
    console.error("Error fetching workout", error);
  }
};

onMounted(() => {
  getWorkOut();
});
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

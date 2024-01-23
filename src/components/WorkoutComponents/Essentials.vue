<template>
  <div class="mt-4 row workout-section">
    <h2 class="text-center mb-4 h3">Essential Workouts</h2>
    <div
      v-for="(w, index) in workout"
      :key="index"
      class="workout-container col-12 col-lg-4"
    >
      <router-link :to="{ name: 'WorkoutDetail', params: { title: w.Title } }">
        <img
          :src="`/workout/${w.Title}.jpg`"
          :alt="`${w['Title']} workout image`"
          width=""
          height=""
          class="workout-image"
        />
        <div class="workout-inner">
          <div class="workout-title">
            <p class="h4 white-text text-capitalize">{{ w["Title"] }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import workoutJSON from "../../data/workout.json";

interface WorkoutItems {
  Title: string;
  "workout-plans"?: string[];
}

const workout = ref<WorkoutItems[]>(workoutJSON.categories);
</script>


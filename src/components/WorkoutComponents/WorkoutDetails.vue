<template>
  <div class="text-center">
    <h2>{{ title }} workout plans</h2>
    <ul>
      <li v-for="(plan, index) in workoutPlans" :key="index">{{ plan }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps } from "vue";
import { Router, useRouter } from "vue-router";
import workoutJson from "../../data/workout.json";

interface WorkoutItems {
  Title: string;
  "workout-plans"?: string[];
}

const router = useRouter() as Router;
const workout = ref<WorkoutItems[]>(workoutJson.categories);

const props = defineProps(["title"]);

const workoutItem = ref<WorkoutItems | null>(null);
const workoutPlans = ref<string[]>([]);

onMounted(() => {
  const workoutItem = workout.value.find((w) => w.Title === props.title);

  if (workoutItem && workoutItem["workout-plans"]) {
    workoutPlans.value = workoutItem["workout-plans"];
  }
});
</script>

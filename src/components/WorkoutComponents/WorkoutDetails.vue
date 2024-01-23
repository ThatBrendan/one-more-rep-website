<template>
  <main>
    <div class="text-center">
      <h2>{{ title }} workout plans</h2>
      <ul>
        <span>Warm Up:</span>
        <li v-for="(plan, index) in workoutPlans" :key="index">{{ plan }}</li>
      </ul>
      <ul>
        <span>Warm Up:</span>
        <li v-for="(plan, index) in workoutPlans" :key="index">{{ plan }}</li>
      </ul>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps } from "vue";
import workoutJson from "../../data/workout.json";

interface WorkoutItems {
  Title: string;
  "workout-plans"?: string[];
}

const workout = ref<WorkoutItems[]>(workoutJson.categories);

const props = defineProps(["title"]);
const workoutPlans = ref<string[]>([]);

onMounted(() => {
  const workoutItem = workout.value.find((w) => w.Title === props.title);

  workoutPlans.value = workoutItem?.["workout-plans"] ?? [];
});
</script>

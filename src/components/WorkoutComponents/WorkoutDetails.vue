<template>
  <main>
    <div class="details-container">
      <h2>{{ title }} workout plans</h2>
      <div class="row">
        <div class="col-12 col-lg-6 workout-photo">
          <img src="../../assets/chin-up.jpg" alt="" />
        </div>
        <div class="col-12 col-lg-6">
          <ul>
            <span>Warm Up:</span>
            <li v-for="(plan, index) in workoutPlans" :key="index">
              {{ plan }}
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6 workout-photo">
          <img src="../../assets/chin-up.jpg" alt="" />
        </div>
        <div class="col-12 col-lg-6">
          <ul>
            <span>Workout:</span>
            <li v-for="(plan, index) in workoutPlans" :key="index">
              {{ plan }}
            </li>
          </ul>
        </div>
      </div>
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

<style scoped>
.workout-photo img {
  width: 100%;
  height: 50%;
}
</style>

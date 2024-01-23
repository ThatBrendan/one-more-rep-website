<template>
  <main>
    <div class="text-center">
      <h2>{{ title }}</h2>
      <ul>
        <li v-for="(plan, index) in challengesPlans" :key="index">
          {{ plan }}
        </li>
      </ul>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps } from "vue";
import challengesWorkout from "../../data/challenges.json";

interface ChallengesWorkout {
  Title: string;
  "workout-plans"?: string[];
}

const challenges = ref<ChallengesWorkout[]>(challengesWorkout.categories);

const props = defineProps(["title"]);
const challengesPlans = ref<string[]>([]);

onMounted(() => {
  const challengesItem = challenges.value.find((c) => c.Title === props.title);

  challengesPlans.value = challengesItem?.["workout-plans"] ?? [];
});
</script>

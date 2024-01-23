<template>
  <div class="mt-4 row">
    <h2 class="text-center mb-4 h3">Challenges Workouts</h2>
    <div
      v-for="(c, index) in challenges"
      :key="index"
      class="workout-container pa-2 col-12 col-lg-4"
    >
      <img
        :src="`/challenge/${c.photo}.jpg`"
        :alt="`${c['Title']} workout`"
        class="workout-image"
      />
      <div class="workout-inner">
        <div class="workout-title">
          <p class="h4 white-text text-capitalize">
            {{ c["Title"] }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import challengesJSON from "../../data/challenges.json";

interface ChallengesItems {
  Title: string;
  photo?: string;
}

const challenges = ref<ChallengesItems[]>(challengesJSON.categories);
</script>

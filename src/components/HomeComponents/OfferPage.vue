<template>
  <div class="mt-4">
    <h2 class="section-title">What we offer</h2>
    <div class="col-12 col-6 row pa-8 card-section">
      <v-card
        v-for="(o, index) in offering"
        :key="o.title"
        max-width="400"
        color="black"
      >
        <v-img :src="o.src" class="mb-2" height="300"></v-img>
        <div class="pt-2">
          <p class="large">{{ o.title }}</p>
          <p>{{ o.subtitle }}</p>
          <v-card-actions class="ma-0 pa-0">
            <v-btn color="orange-lighten-2" variant="text"> More </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="cards[index] ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="toggleCards(index)"
            ></v-btn>
          </v-card-actions>
        </div>

        <v-expand-transition>
          <div v-show="cards[index]">
            <v-divider></v-divider>
            <v-card-text>
              {{ o.text }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import mealprep from "../../assets/meal-prep.jpg";
import barbell from "../../assets/barbell.jpg";
import workout from "../../assets/workout.jpg";

const cards = ref([false, false, false]);

const toggleCards = (index: any) => {
  cards.value[index] = !cards.value[index];
};

const offering = [
  {
    src: workout,
    title: "Workouts",
    subtitle: "Skipping leg day?",
    text: "Struggling on structuring your workouts? Look no further.",
  },
  {
    src: mealprep,
    title: "Quality Meal-Preps",
    subtitle: "Trying to get the best out of your meals?",
    text: "We provide the best of meal preps irregardless of your dietary",
  },
  {
    src: barbell,
    title: "Equipments",
    subtitle: "Looking to take workout further?",
    text: "One more rep will suggest workout equipments to help you make the right decisions",
  },
];
</script>

<style scoped>
.card-section {
  justify-content: space-around;
}
.section-title {
  text-align: center;
}
@media screen and (max-width: 767px) {
  h2 {
    font-size: 2.2rem;
  }
}
</style>

<template>
  <div class="mt-4">
    <h2 class="section-title">What we offer</h2>
    <div class="col-12 col-6 row pa-8 card-section">
      <v-card
        v-for="o in offering"
        :key="o.title"
        max-width="420"
        height="270"
        class="offer-img"
        color="black"
        :to="{ name: o.path }"
      >
        <v-img
          :src="o.src"
          cover
          class="mb-2 align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          ><v-card-title>{{ o.title }}</v-card-title></v-img
        >
      </v-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import mealprep from "../../assets/meal-prep.jpg";
import barbell from "../../assets/barbell.jpg";
import workout from "../../assets/workout.jpg";

const offering = [
  {
    src: workout,
    title: "Workouts",
    path: "Workout",
  },
  {
    src: mealprep,
    title: "Quality Meal-Preps",
    path: "Meal-Prep",
  },
  {
    src: barbell,
    title: "Equipments",
    path: "Equipments",
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
.offer-img {
  transition: all 0.3s ease-in-out;
}
.offer-img:hover {
  transform: scale(1.1);
}
.offerImg img {
  object-fit: cover !important;
}
@media screen and (max-width: 767px) {
  h2 {
    font-size: 2.2rem;
  }
}
</style>

<template>
  <v-img cover :src="desktopBG" class="heroImage">
    <div class="blur-overlay">
      <div class="row fill-height">
        <div class="col-12 white-text header-item pt-10">
          <h2 class="animated fadeInUp mb-6">One More Rep</h2>
          <p class="animated delay-1s fadeInUp mb-6 large">
            Shape your body and mind
          </p>
          <button class="whiteButton">Take a tour</button>
        </div>
      </div>
    </div>
  </v-img>
</template>

<script lang="ts" setup>
import desktopBG from "../../assets/lifting.jpg";
</script>

<style scoped>

@media screen and (max-width: 767px) {
  h2 {
    font-size: 2.5rem;
  }
  .large {
    font-size: 1.2rem;
  }
  .header-item {
    width: 90vw;
    padding: 0 2rem;
  }
}
</style>

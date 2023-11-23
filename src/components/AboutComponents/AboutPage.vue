<template>
  <main>
    <v-img cover :src="bgPhoto" class="heroImage">
      <div class="blur-overlay">
        <div class="row fill-height">
          <div class="col-12 white-text header-item pt-10">
            <h2 class="animated fadeInUp mb-6">One More Rep</h2>
            <p class="animated delay-1s fadeInUp mb-6 large">
              Contact us
            </p>
            <button class="whiteButton">Take a tour</button>
          </div>
        </div>
      </div>
    </v-img>
  </main>
</template>

<script lang="ts" setup>
import bgPhoto from "../../assets/one-more-rep.jpg";
</script>

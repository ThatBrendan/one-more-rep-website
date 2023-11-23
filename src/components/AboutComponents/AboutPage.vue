<template>
  <main>
    <v-img cover :src="bgPhoto" class="heroImage">
      <div class="blur-overlay">
        <div class="row fill-height">
          <div class="col-12 white-text header-item pt-10">
            <h2 class="animated fadeInUp mb-6">One More Rep</h2>
            <p class="animated delay-1s fadeInUp mb-6 large">Contact us</p>
            <div class="icons">
              <a href="#">
                <v-icon icon="mdi-instagram" class="white-text"></v-icon>
              </a>
              <a href="#">
                <v-icon icon="mdi-twitter" class="white-text"></v-icon>
              </a>
              <a href="#">
                <v-icon icon="mdi-snapchat" class="white-text"></v-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </v-img>
  </main>
</template>

<script lang="ts" setup>
import bgPhoto from "../../assets/one-more-rep-bg.png";
</script>

<style scoped>
.icons a {
  margin-right: 1.5rem;
  font-size: 2rem;
}
</style>

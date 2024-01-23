<template>
  <main>
    <ul class="slider" ref="slider">
      <li
        v-for="i in items"
        :key="i.title"
        :style="'background: url(' + i.img + ')'"
        class="item"
      >
        <div class="content">
          <h2 class="title">{{ i.title }}</h2>
          <p class="description">{{ i.description }}</p>
          <button class="whiteButton">Read More</button>
        </div>
      </li>
    </ul>
    <nav class="nav">
      <button
        class="btn whiteButton prev mdi mdi-skip-next"
        @click="activate"
      ></button>
      <button
        class="btn whiteButton next mdi mdi-skip-previous"
        @click="activate"
      ></button>
    </nav>
  </main>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import equip from "../../data/equipments.json";

interface Items {
  img: string;
  title: string;
  description: string;
}

const items = ref<Items[]>(equip as Items[]);

const slider = ref<HTMLElement | null>(null);
onMounted(() => {
  slider.value = document.querySelector(".slider");
});

function activate(e: MouseEvent) {
  if (e.target instanceof Element) {
    if (e.target.matches(".next")) {
      items.value.push(items.value.shift()!);
    } else if (e.target.matches(".prev")) {
      items.value.unshift(items.value.pop()!);
    }
  }
}

document.addEventListener("click", activate, false);
</script>

<style scoped>
.item {
  width: 200px;
  height: 300px;
  list-style-type: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  transition: transform 0.1s, left 0.75s, top 0.75s, width 0.75s, height 0.75s;

  &:nth-child(1),
  &:nth-child(2) {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: none;
    border-radius: 0;
    box-shadow: none;
    opacity: 1;
  }

  &:nth-child(3) {
    left: 50%;
  }
  &:nth-child(4) {
    left: calc(50% + 220px);
  }
  &:nth-child(5) {
    left: calc(50% + 440px);
  }
  &:nth-child(6) {
    left: calc(50% + 660px);
    opacity: 0;
  }
}

.content {
  width: min(30vw, 400px);
  position: absolute;
  top: 50%;
  left: 3rem;
  transform: translateY(-50%);
  opacity: 0;
  display: none;

  & .description {
    line-height: 1.7;
    margin: 1rem 0 1.5rem;
    font-size: 0.8rem;
  }
}

.item:nth-of-type(2) .content {
  display: block;
  animation: show 0.75s ease-in-out 0.3s forwards;
}

@keyframes show {
  0% {
    filter: blur(5px);
    transform: translateY(calc(-50% + 75px));
  }
  100% {
    opacity: 1;
    filter: blur(0);
  }
}

.nav {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  user-select: none;
}

@media (min-width: 768px) {
  .item {
    width: 160px;
    height: 270px;

    &:nth-child(3) {
      left: 50%;
    }
    &:nth-child(4) {
      left: calc(50% + 170px);
    }
    &:nth-child(5) {
      left: calc(50% + 340px);
    }
    &:nth-child(6) {
      left: calc(50% + 510px);
      opacity: 0;
    }
  }
}

@media (max-width: 690px) {
  .item {
    width: 130px;
    height: 220px;

    &:nth-child(3) {
      left: 50%;
    }
    &:nth-child(4) {
      left: calc(50% + 140px);
    }
    &:nth-child(5) {
      left: calc(50% + 280px);
    }
    &:nth-child(6) {
      left: calc(50% + 420px);
      opacity: 0;
    }
  }
}
</style>

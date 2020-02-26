<template>
  <div class="title">
    <div class="title__item">
      <p class="title__text">{{ label }}</p>
      <template v-if="isToday">
        <span class="title__text__day">{{ day }}</span>
      </template>
    </div>
    <template v-if="isToday">
      <p class="title__temp">
        <span>{{ temperature.displayTemperatureHigh }}</span
        >/<span>{{ temperature.displayTemperatureMin }}</span>
      </p>
    </template>
  </div>
</template>

<script>
import { weatherMixin } from "@/mixins/weather-mixin";
export default {
  name: "TheTitle",
  mixins: [weatherMixin],
  props: {
    label: {
      type: String,
      required: true
    },
    day: {
      type: String,
      required: false,
      default: ""
    },
    isToday: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

<style scoped></style>

<template>
  <div class="today">
    <TheTitle label="Today" :is-today="true" :day="displayDay()"></TheTitle>
    <div class="today-weather">
      <template v-for="(temperature, index) in temperature.todayTemperature">
        <template v-if="index < 12">
          <TheWeatherItem :key="index" :content="temperature"></TheWeatherItem>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import { weatherMixin } from "@/mixins/weather-mixin";
import TheTitle from "@/components/parts/TheTitle";
import TheWeatherItem from "@/components/parts/TheWeatherItem";
export default {
  name: "TheToday",
  components: { TheWeatherItem, TheTitle },
  mixins: [weatherMixin]
};
</script>

<style scoped></style>

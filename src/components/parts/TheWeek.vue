<template>
  <div class="week">
    <TheTitle label="Week"></TheTitle>
    <div class="week-weather">
      <template v-for="(temperature, index) in temperature.weekTemperature">
        <TheWeekItem :key="index" :content="temperature"></TheWeekItem>
      </template>
    </div>
  </div>
</template>

<script>
import { weatherMixin } from "@/mixins/weather-mixin";
import TheTitle from "@/components/parts/TheTitle";
import TheWeekItem from "@/components/parts/TheWeekItem";
export default {
  name: "TheWeek",
  components: { TheWeekItem, TheTitle },
  mixins: [weatherMixin]
};
</script>

<style scoped></style>

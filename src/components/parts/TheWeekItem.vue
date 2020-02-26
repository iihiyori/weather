<template>
  <ul class="week-weather__item">
    <li class="week-weather__day">
      {{ content.time | filDay }}
      <span class="title__text__day">{{ content.time | filWeekDay }}</span>
    </li>
    <li><img :src="getWeatherIcon()" alt="" class="week-weather__img" /></li>
    <li class="week-weather__temp">
      <span>{{ content.temperatureHigh | filMathFloor }}</span
      >/<span>{{ content.temperatureMin | filMathFloor }}</span>
    </li>
    <li class="week-weather__rainy">
      {{ content.precipProbability | filPercent }}
    </li>
  </ul>
</template>

<script>
import { weatherMixin } from "@/mixins/weather-mixin";
export default {
  name: "TheWeekItem",
  mixins: [weatherMixin],
  props: {
    content: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      weatherData: ""
    };
  },
  mounted() {
    this.getWeather();
  },
  methods: {
    getWeather() {
      this.$axios.get("/weather.json", {}).then(result => {
        this.weatherData = result.data;
      });
    },
    getWeatherIcon() {
      for (let data of this.weatherData) {
        if (this.content.icon === data.name) {
          return data.icon;
        }
      }
    }
  }
};
</script>

<style scoped></style>

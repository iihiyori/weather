<template>
  <div class="weather-item">
    <p class="weather-item__time">{{ content.time | filTime }}</p>
    <img :src="getWeatherIcon()" alt="" class="weather-item__img" />
    <p class="weather-item__temp">{{ content.temperature | filMathFloor }}</p>
  </div>
</template>

<script>
import { weatherMixin } from "@/mixins/weather-mixin";
export default {
  name: "TheWeatherItem",
  mixins: [weatherMixin],
  data() {
    return {
      weather_data: ""
    };
  },
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.getWeather();
  },
  methods: {
    getWeather() {
      this.$axios.get("/weather.json", {}).then(result => {
        this.weather_data = result.data;
      });
    },
    getWeatherIcon() {
      for (let data of this.weather_data) {
        if (this.content.icon === data.name) {
          return data.icon;
        }
      }
    }
  }
};
</script>

<style scoped></style>

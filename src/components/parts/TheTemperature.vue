<template>
  <div class="temperature" :class="image_class">
    <TheHead></TheHead>
    <div class="temperature__content">
      <TheBlur :label="weather.displayPlace" :isCity="true"></TheBlur>
      <p class="temperature__num">{{ temperature.displayTemperature }}</p>
      <TheBlur :label="displayNowWeather()" :isTemp="true"></TheBlur>
    </div>
  </div>
</template>

<script>
import { weatherMixin } from "@/mixins/weather-mixin";
import TheBlur from "@/components/parts/TheBlur";
import TheHead from "@/components/parts/TheHead";
export default {
  name: "TheTemperature",
  components: { TheHead, TheBlur },
  mixins: [weatherMixin],
  data() {
    return {
      now_weather_data: "",
      image_class: ""
    };
  },
  mounted() {
    this.getWeather();
    this.getNowWeather();
  },
  methods: {
    getNowWeather() {
      this.$axios.get("/nowWeather.json", {}).then(result => {
        this.now_weather_data = result.data;
      });
    },
    displayNowWeather() {
      for (let data of this.now_weather_data) {
        if (this.weather.weather === data.name) {
          this.image_class = data.image;
          return data.nameJp;
        }
      }
    }
  }
};
</script>

<style scoped></style>

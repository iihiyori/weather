import { Weather } from "@/models/Weather";
import { Temperature } from "@/models/Temperature";

export const weatherMixin = {
  data() {
    return {
      weather: "",
      temperature: "",
      place: ""
    };
  },
  mounted() {
    this.getTemperature();
  },
  methods: {
    getWeather() {
      this.$axios
        .get(process.env.VUE_APP_API_URL_WEATHER, {})
        .then(result => {
          this.weather = Weather.create(result);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getTemperature() {
      this.$axios
        .get(process.env.VUE_APP_API_URL_FORECAST, {})
        .then(result => {
          this.temperature = Temperature.create(result);
        })
        .catch(error => {
          console.log(error);
        });
    },
    displayDay() {
      let date = new Date();
      let week = date.getDay();
      let weekEn = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][week];
      return weekEn;
    }
  }
};

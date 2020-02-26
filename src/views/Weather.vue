<template>
  <div class="content">
    <TheTemperature></TheTemperature>
    <TheToday></TheToday>
    <TheWeek></TheWeek>
  </div>
</template>

<script>
import TheTemperature from "@/components/parts/TheTemperature";
import TheToday from "@/components/parts/TheToday";
import TheWeek from "@/components/parts/TheWeek";
export default {
  name: "Weather",
  components: { TheWeek, TheToday, TheTemperature }
};
</script>

<style scoped lang="scss">
.content {
  position: relative;
}
</style>

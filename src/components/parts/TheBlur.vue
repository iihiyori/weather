<template>
  <div class="blur">
    <p class="blur__text" :class="{ city: isCity, temp: isTemp }">
      {{ label }}
    </p>
  </div>
</template>

<script>
export default {
  name: "TheBlur",
  props: {
    label: {
      type: String,
      required: false,
      default: ""
    },
    isCity: {
      type: Boolean,
      required: false,
      default: false
    },
    isTemp: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

<style scoped></style>

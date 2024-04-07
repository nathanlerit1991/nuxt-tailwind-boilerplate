<script setup>
import { ref } from 'vue';

// Define props
const props_data = defineProps({
  image_src: {
    type: String,
    default: () => '',
    required: true,
  },
  image_alt: {
    type: String,
    default: () => '',
    required: true,
  },
  image_loading: {
    type: String,
    default: () => '',
    required: true,
  },
});
const baseURL = import.meta.env.VITE_API_BASE_URL;
</script>

<template>
  <img
    :src="baseURL + props_data.image_src"
    :alt="props_data.image_alt"
    :loading="props_data.image_loading"
  />
</template>

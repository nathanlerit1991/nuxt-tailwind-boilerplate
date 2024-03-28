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

// Placeholder image ref
const placeholderImage = ref('lazy_placeholder');

// Glob for image paths
const glob = import.meta.glob('@/assets/images/**/*.{jpg,png,gif,webp}', { eager: true });
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [key, `${value.default}`])
);

// Method to clean image source and retrieve image path
const getImagePath = () => {
  const cleanedImagePath = props_data.image_src.replace('@/', '/');
  const imagePath = images[cleanedImagePath];
  return imagePath;
};
</script>

<template>
  <img
    :src="props_data.image_loading === 'lazy' ? images[`${placeholderImage}`] : getImagePath()"
    :data-src="props_data.image_loading === 'lazy' ? getImagePath() : null"
    :alt="props_data.image_alt"
    :loading="props_data.image_loading"
  />
</template>

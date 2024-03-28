<script setup>
  import { ref } from 'vue'
  import { filename } from 'pathe/utils'
  
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
  })

  const placeholderImage = ref('lazy_placeholder');
  const glob = import.meta.glob('@/assets/images/**/*.{jpg,png,gif,webp}', { eager: true })
  const images = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), value.default])
  )
</script>

<template> 
  <img
    :src="props_data.image_loading === 'lazy' ? images[`${placeholderImage}`] : images[`${props_data.image_src}`]"
    :data-src="props_data.image_loading === 'lazy' ? images[`${props_data.image_src}`] : null"
    :alt="props_data.image_alt"
    :loading="props_data.image_loading"
  />
</template>

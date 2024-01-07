<template>
  <img :src="imageLocation" :alt="recipe" />
</template>

<script>
export default {
  props: ["recipe"],
  data() {
    return {
      imageLocation: `/recipeImages/${this.recipe}.jpg`,
    };
  },
};
</script>

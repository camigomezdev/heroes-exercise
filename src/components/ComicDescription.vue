<template>
  <div class="comic-description" :tabindex="getComic.name ? 0 : -1" :class="{ 'comic-description--hidden': !getComic.name }">
    <div class="comic-description__thumbnail">
      <img class="comic-description__image" :src="getComic.thumbnail" :alt="getComic.name" aria-hidden="true">
    </div>
    <div class="comic-description__info">
      <h1 class="comic-description__title">
        {{getComic.name}}
      </h1>
      <p class="comic-description__description">
        {{getComic.description}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    thumbnail: String,
    description: String,
  },
  computed: {
    getComic() {
      return this.$store.getters.getComic;
    },
  },
};
</script>

<style scoped lang="scss">
.comic-description {
  position: relative;
  display: flex;
  width: 50vw;
  height: 40vh;
  margin: 0 auto;
  background: black;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  transition: width .5s;

  &--hidden {
    width: 0;
    height: 0;
  }

  &--hidden &__info {
    opacity: 0;
  }

  &__thumbnail {
    height: 100%;
  }

  &__image {
    height: 100%;
    border-right: 5px solid red;
  }

  &__info {
    width: 100%;
    padding: 15px;
    opacity: 1;
    transition: opacity 1s;
    transition-delay: .5s;
  }

  &__title {
    text-align: center;
  }
}
</style>

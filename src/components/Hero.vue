<template>
  <div class="hero">
    <div class="hero__dark"></div>
    <div class="hero__info">
      <h1 class="hero__title">{{title}}</h1>
      <h3 class="hero__subtitle">{{subtitle}}</h3>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
  },
};
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  background-image: url("/background.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  width: 100vw;
  height: 80vh;

  &__dark {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: 0.5)
  }

  &__info {
    position: absolute;
    bottom: 100px;
    left: 100px;
    z-index: 1;
  }

  &__title {
    font-size: 90px;
  }

  &__subtitle {
    font-size: 40px;
  }
}
</style>

<template>
  <div class="hero hero__parallax">
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
  width: 100vw;
  height: 90vh;
  background: rgba($color: #000000, $alpha: 0.5);

  &::after {
    background-image: url("/background.jpeg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &.hero__parallax::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateZ(-1px) scale(1.7);
    z-index: -1;
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

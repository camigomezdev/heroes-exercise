<template>
  <section class="home" tabindex="0">
    <div class="home__hero">
      <h1 class="home__title">Marvel</h1>
      <h3 class="home__subtitle">Vue.js</h3>
    </div>
  </section>
</template>

<style lang="scss">
.home {
  position: absolute;
  top: 0;
  left: 0;
  background-image: url('/background.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &__hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
  }

  &__title {
    font-size: 100px;
  }

  &__subtitle {
    font-size: 70px;
  }
}
</style>

<template>
  <div class="footer">
    <div>Page created by Cami Gómez</div>
    <div>@camigomez35</div>

    <div class="footer__social">
      <a href="https://www.instagram.com/camigomez35/"
        target ="_blank"
        class="footer__icon"
        aria-label="instagram"
      ><font-awesome-icon :icon="['fab', 'instagram']" /></a>
      <a
        href="https://twitter.com/Camigomez318"
        target ="_blank"
        class="footer__icon"
        aria-label="twitter"
      ><font-awesome-icon :icon="['fab', 'twitter']" /></a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20vh;
  background: $black;
  bottom: 0;

  &__social {
    display: flex;
  }

  &__social &__icon {
    font-size: 30px;
    padding: 5px;
    text-decoration: none;
    color: $white;
  }
}
</style>

<template>
  <div class="nav">
    <div class="nav__items">
      <!-- <router-link to="/">Home</router-link> -->
      <router-link to="/" class="nav__link">Home</router-link>
      <router-link
        v-for="(link, index) in links"
        :key="index"
        :to="`/${link}`"
        class="nav__link"
      >{{link}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: ['characters', 'comics'],
    };
  },
};
</script>

<style scoped lang="scss">
.nav {
  position: relative;
  width: 100%;
  background: $black;
  z-index: 2;

  &__items {
    position: relative;
    padding: 20px 50px;
  }

  &__link {
    font-weight: bold;
    color: $white;
    padding: 0 5px;
    text-transform: uppercase;
    text-decoration: none;

    &.router-link-exact-active {
      color: $aquamarine;
    }
  }
}
</style>

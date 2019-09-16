<template>
  <div class="nav">
    <!-- <router-link to="/">Home</router-link> -->
    <router-link
      v-for="(link, index) in links"
      :key="index"
      :to="`/${link}`"
      class="nav__link"
    >{{link}}</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: ['heroes', 'comics'],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  padding: 20px 50px;
  background: black;

  &__link {
    font-weight: bold;
    color: white;
    padding: 0 5px;
    text-transform: uppercase;
    text-decoration: none;

    &.router-link-exact-active {
      color: #5bf3ae;
    }
  }
}
</style>

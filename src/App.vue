<template>
  <div id="app">
    <navbar></navbar>
    <keep-alive>
      <router-view />
    </keep-alive>
    <Footer></Footer>
  </div>
</template>

<script>
import "@/sass/_global.scss";
import "@/sass/_variables.scss";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: white;
}
</style>

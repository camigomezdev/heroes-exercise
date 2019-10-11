<template>
  <div id="app" class="app">
    <navbar></navbar>
    <keep-alive>
      <router-view />
    </keep-alive>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  font-family: 'Noto Sans', sans-serif;
}

body {
  background: #2c3e50;
}

.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: white;
  position: relative;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 2px;
}

button {
  background: transparent;
  border: none;
  color: inherit;
  font: inherit;
}

.container {
  max-width: 1470px;
  padding: 30px 0;
  margin: 0 auto;
}

.button {
  background: #ff0000;
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  color: white;
  font-weight: 600;
  transition: background 0.5s;

  &:hover {
    background: #AA0000;
  }
}
</style>

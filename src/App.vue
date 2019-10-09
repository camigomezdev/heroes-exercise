<template>
  <div id="app">
    <navbar></navbar>
    <div class="container">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

body {
  background: #2c3e50;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: white;
}

button {
  background: transparent;
  border: none;
  color: inherit;
  font: inherit;
}

.container {
  padding: 10px 50px;
}
</style>

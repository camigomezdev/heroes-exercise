<template>
  <section class="heroes" tabindex="0">
    <h1 class="heroes__title">Heroes</h1>
    <heroes-list :heroes="heroes"></heroes-list>
  </section>
</template>

<script>
import axios from 'axios';
import heroesList from '@/components/HeroesList.vue';
import { urlAPI } from '@/credentials';
import getAuth from '@/utils/utils';

export default {
  components: {
    heroesList,
  },
  data() {
    return {
      heroes: [],
    };
  },
  methods: {
    getheroes() {
      const { ts, hash, publicKey } = getAuth();
      axios
        .get(
          `${urlAPI}characters?limit=30&ts=${ts}&apikey=${publicKey}&hash=${hash}`,
        )
        .then((response) => {
          this.heroes = response.data.data.results;
        });
    },
  },
  mounted() {
    this.getheroes();
  },
};
</script>
<style lang="scss">
.heroes {

  &__title {
    padding: 0 10px;
  }
}
</style>

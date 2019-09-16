<template>
  <div class="comics">
    <h1 class="heroes__title">Comics</h1>
    <comics-carousel :comics="comics"></comics-carousel>
  </div>
</template>

<script>
import axios from 'axios';
import ComicsCarousel from '@/components/ComicsCarousel.vue';
import { urlAPI } from '@/credentials';
import getAuth from '@/utils/utils';

export default {
  components: {
    ComicsCarousel,
  },
  data() {
    return {
      comics: [],
    };
  },
  methods: {
    getComics() {
      const { ts, hash, publicKey } = getAuth();
      axios
        .get(
          `${urlAPI}comics?limit=10&ts=${ts}&apikey=${publicKey}&hash=${hash}`,
        )
        .then((response) => {
          this.comics = response.data.data.results;
        });
    },
  },
  mounted() {
    this.getComics();
  },
};
</script>
<style lang="scss">
.comics {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>

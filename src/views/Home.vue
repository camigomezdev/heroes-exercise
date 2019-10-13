<template>
  <section class="home">
    <hero title="Marvel" subtitle="Vue.js exercise" image="/background.jpeg"></hero>
    <div class="home__section">
      <div class="container">
        <h1>Characters</h1>
        <characters-list :characters="characters"></characters-list>
        <router-link class="button" to="/characters">See more characters</router-link>
      </div>
    </div>
    <div class="home__section">
      <div class="container">
        <h1>Comics</h1>
        <comics-carousel :comics="comics"></comics-carousel>
        <router-link class="button" to="/comics">See more comics</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import Hero from '@/components/Hero.vue';
import ComicsCarousel from '@/components/ComicsCarousel.vue';
import CharactersList from '@/components/CharactersList.vue';
import { urlAPI } from '@/credentials';
import getAuth from '@/utils/utils';

export default {
  components: {
    Hero,
    ComicsCarousel,
    CharactersList,
  },
  data() {
    return {
      characters: [],
      comics: [],
    };
  },
  methods: {
    getComics() {
      const { ts, hash, publicKey } = getAuth();
      axios
        .get(
          `${urlAPI}comics?orderBy=modified&limit=10&ts=${ts}&apikey=${publicKey}&hash=${hash}`,
        )
        .then((response) => {
          this.comics = response.data.data.results;
        });
    },
    getCharacters() {
      const { ts, hash, publicKey } = getAuth();
      axios
        .get(
          `${urlAPI}characters?orderBy=modified&limit=5&ts=${ts}&apikey=${publicKey}&hash=${hash}`,
        )
        .then((response) => {
          this.characters = response.data.data.results;
        });
    },
  },
  mounted() {
    this.getComics();
    this.getCharacters();
  },
};
</script>
<style lang="scss">
.home {
  position: relative;
  top: 0;
  left: 0;

  &__section {
    background-color: #2c3e50;
  }

  &__section:nth-child(odd) {
    background-color: #364c62;
  }

  &__section {
    text-align: center;

    & .container {
      max-width: 1050px;
    }
  }
}
</style>

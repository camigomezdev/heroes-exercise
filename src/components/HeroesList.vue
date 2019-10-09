<template>
  <div class="heroes-list">
    <hero-card
      v-for="hero in heroes"
      :key="hero.id"
      :name="hero.name"
      :description="hero.description"
      :thumbnail="`${hero.thumbnail.path}.${hero.thumbnail.extension}`"
    ></hero-card>
  </div>
</template>

<script>
import HeroCard from '@/components/HeroCard.vue';

export default {
  components: {
    HeroCard,
  },
  props: {
    heroes: Array,
  },
};
</script>

<style scoped lang="scss">
.heroes-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>

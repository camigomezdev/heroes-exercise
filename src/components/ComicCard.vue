<template>
  <button class="comic-card" @click="selectComic">
    <div class="comic-card__avatar">
      <img class="comic-card__avatar-img" :src="thumbnail" :alt="name" aria-hidden="true"/>
    </div>
    <div class="comic-card__info">
      <div class="comic-card__nickname">{{name}}</div>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    name: String,
    thumbnail: String,
    description: String,
  },
  methods: {
    selectComic() {
      if (this.$route.path !== '/comics') return;

      this.$store.commit('SET_COMIC', {
        name: this.name,
        thumbnail: this.thumbnail,
        description: this.description,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.comic-card {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 5px;
  width: 200px;
  background: black;
  cursor: pointer;

  &__avatar {
    height: 200px;
    overflow: hidden;
    border-bottom: 5px solid red;
  }

  &__avatar-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: transform .2s;
  }

  &__info {
    margin: auto 0;
    padding: 0 5px;
    text-align: center;
  }

  &:hover &__avatar-img {
    transform: scale(1.2);
  }
}
</style>

<template>
  <div class="comic-card">
    <div class="comic-card__avatar">
      <img class="comic-card__avatar-img" :src="thumbnail" :alt="name" aria-hidden="true"/>
    </div>
    <div class="comic-card__info">
      <div class="comic-card__nickname">{{name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    thumbnail: String,
    description: String,
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
    text-align: center;
  }

  &:hover &__avatar-img {
    transform: scale(1.2);
  }
}
</style>

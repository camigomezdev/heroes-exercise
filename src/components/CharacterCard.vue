<template>
  <button
    :id="characterId"
    @click="descriptionEvent"
    :aria-expanded="`${showDescription}`"
    :aria-controls="`${characterId}-description`"
    class="character-card"
    :class="{'character-card--show-description': showDescription}"
  >
    <div class="character-card__info" :id="name">
      <div class="character-card__avatar" :aria-hidden="true" :alt="name">
        <img class="character-card__avatar-img" :src="thumbnail"/>
      </div>
      <div class="character-card__nickname-container">
        <div class="character-card__nickname">{{name}}</div>
      </div>
    </div>
    <div
      class="character-card__description"
      :id="`${characterId}-description`"
      :aria-hidden="!showDescription"
    >
      <div v-if="description" class="character-card__description-text">{{description}}</div>
      <div v-else class="character-card__description-text">Info not found</div>
    </div>
  </button>
</template>

<script>
export default {
  data() {
    return {
      showDescription: false,
    };
  },
  props: {
    characterId: Number,
    name: String,
    thumbnail: String,
    description: String,
  },
  methods: {
    descriptionEvent() {
      this.showDescription = !this.showDescription;
    },
  },
};
</script>

<style scoped lang="scss">
.character-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 5px;
  width: 200px;
  height: 100%;
  cursor: pointer;
  transform-style: preserve-3d;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 1);
  border-radius: 5px;

  &__info {
    transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    backface-visibility: hidden;
    border-radius: 5px;
  }

  &__avatar {
    margin: 0 auto;
    height: 200px;
    border-bottom: 5px solid red;
  }

  &__avatar-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
  }

  &__nickname-container {
    display: inline-block;
    position: relative;
    padding: 5px 0;
    color: white;
    font-weight: bold;
    background: black;
    width: 100%;
    text-align: center;
    border-radius: 0 0 5px 5px;
  }

  &__nickname {
    position: relative;
  }

  &__nickname-container::before {
    content: "";
    position: absolute;
    background: red;
    height: 100%;
    transform: scaleY(0);
    transform-origin: top;
    top: 0;
    left: 0;
    transition: transform 0.3s;
    width: 100%;
    border-radius: 0 0 5px 5px;
  }

  &:hover &__nickname-container::before {
    transform: scaleY(1);
  }

  &__description {
    display: flex;
    align-items: center;
    position: absolute;
    height: 100%;
    width: 100%;
    font-size: 14px;
    background: black;
    text-align: center;
    transition: transform 1s;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border-radius: 5px;
  }

  &--show-description &__info {
    transform: rotateY(180deg);
  }

  &--show-description &__description {
    transform: rotateY(0deg);
  }

  &__description-text {
    padding: 5px;
    width: 100%;
  }
}
</style>

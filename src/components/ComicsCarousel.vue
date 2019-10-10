<template>
  <div class="comics-carousel" tabindex="0" @keyup="moveCarouselArrow">
    <button @click="moveCarousel(-1)" ref="arrowLeft">
      <div
        class="comics-carousel__arrow comics-carousel__arrow--left"
        :class="{'comics-carousel__arrow--disabled': atHeadOfList}"
        aria-label="Left button"
      ></div>
    </button>
    <div class="comics-carousel__container">
      <div class="comics-carousel__cards" :style="{ transform: `translateX(${currentOffset}px)`}">
        <comic-card
          v-for="(comic, index) in comics"
          :tabindex="isVisible(index)"
          :key="comic.id"
          :name="comic.title"
          :description="comic.description"
          :thumbnail="`${comic.thumbnail.path}.${comic.thumbnail.extension}`"
          class="comics-carousel__slide"
        ></comic-card>
      </div>
    </div>
    <button @click="moveCarousel(1)" ref="arrowRight">
      <div
        class="comics-carousel__arrow comics-carousel__arrow--right"
        :class="{'comics-carousel__arrow--disabled': atEndOfList}"
        aria-label="Right button"
      ></div>
    </button>
  </div>
</template>

<script>
import ComicCard from '@/components/ComicCard.vue';

export default {
  components: {
    ComicCard,
  },
  data() {
    return {
      currentOffset: 0,
      windowSize: 4,
      lastVisible: 4,
      paginationFactor: 210,
    };
  },
  props: {
    comics: Array,
  },
  methods: {
    moveCarousel(direction) {
      // Find a more elegant way to express the :style.
      // consider using props to make it truly generic
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
        this.lastVisible += 1;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
        this.lastVisible -= 1;
      }
    },
    isVisible(index) {
      return (
        index >= this.lastVisible - this.windowSize
        && index < this.lastVisible
      ) ? 0 : 1;
    },
    moveCarouselArrow(e) {
      if (e.keyCode === 39) {
        this.$refs.arrowRight.focus();
        this.moveCarousel(1);
      } else if (e.keyCode === 37) {
        this.$refs.arrowLeft.focus();
        this.moveCarousel(-1);
      }
    },
  },
  computed: {
    atEndOfList() {
      return (
        this.currentOffset
        <= this.paginationFactor * -1 * (this.comics.length - this.windowSize)
      );
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    },
  },
};
</script>

<style scoped lang="scss">
.comics-carousel {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;

  &__container {
    display: flex;
    justify-content: flex-start;
    max-width: 840px;
    overflow: hidden;
    padding: 15px 0;
  }

  &__cards {
    display: flex;
    transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.2);
    transform: translate(0, 0);
  }

  &__arrow {
    position: relative;
    width: 25px;
    height: 25px;
    border-top: 3px solid red;
    border-left: 3px solid red;
    transition: opacity .5s ease-in-out;
    cursor: pointer;

    &--left {
      transform: rotateZ(-45deg);
    }

    &--right {
      transform: rotateZ(135deg);
    }

    &--disabled {
      opacity: .3;
    }
  }
}
</style>

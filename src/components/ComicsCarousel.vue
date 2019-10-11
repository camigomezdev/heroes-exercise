<template>
  <div class="comics-carousel" @keyup="moveCarouselArrow">
    <button
      @click="moveCarousel(-1)" ref="arrowLeft"
      class="comics-carousel__arrow"
      :class="{'comics-carousel__arrow--disabled': shouldDisableLeftArrow}"
      aria-label="Left button"
      :tabindex="shouldDisableLeftArrow ? -1 : 0"
      :aria-hidden="shouldDisableLeftArrow"
      @focus="toggleFocus('leftArrowFocused')"
      @blur="toggleFocus('leftArrowFocused')"
    >
      <font-awesome-icon :icon="['fas', 'chevron-left']" />
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
    <button
      @click="moveCarousel(1)"
      ref="arrowRight"
      class="comics-carousel__arrow"
      :class="{'comics-carousel__arrow--disabled': shouldDisableRightArrow}"
      aria-label="Right button"
      :tabindex="shouldDisableRightArrow ? -1 : 0"
      :aria-hidden="shouldDisableRightArrow"
      @focus="toggleFocus('rightArrowFocused')"
      @blur="toggleFocus('rightArrowFocused')"
    >
      <font-awesome-icon :icon="['fas', 'chevron-right']" />
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
      rightArrowFocused: false,
			leftArrowFocused: false
    };
  },
  props: {
    comics: Array,
  },
  methods: {
    moveCarousel(direction) {
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
      ) ? 0 : -1;
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
    toggleFocus(arrow) {
			this[arrow] = !this[arrow];
		}
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
    shouldDisableLeftArrow() {
      if (this.leftArrowFocused && this.atHeadOfList) {
        const rightArrow = this.$refs.arrowRight;
        rightArrow.focus();
      }

      return this.atHeadOfList;
    },
    shouldDisableRightArrow() {
      if (this.rightArrowFocused && this.atEndOfList) {
        const leftArrow = this.$refs.arrowLeft;
        leftArrow.focus();
      }

      return this.atEndOfList;
    }
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
    margin: 0 5px;
  }

  &__cards {
    display: flex;
    transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.2);
    transform: translate(0, 0);
  }

  &__arrow {
    position: relative;
    width: 30px;
    transition: opacity 0.5s ease-in-out;
    cursor: pointer;
    font-size: 30px;
    color: #5bf3ae;

    &--disabled {
      opacity: .3;
      pointer-events: none;
    }
  }
}
</style>

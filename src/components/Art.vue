<template>
  <div class="art">
    <div class="container">
      <div class="header">Art/Design Work</div>
    </div>
    <div class="fullwidth">
      <div class="art-section">
        <div
          v-for="art in artwork"
          class="art-wrap"
          :class="{open: art==hoveredItem, closed: art!=hoveredItem, expanded: art==expandedItem}"
          :key="art.id"
          @mouseover="hovered(art)"
          :style="{backgroundImage: 'url(' + art.imageUrl + ')'}"
          @click="expand(art)"
        >
          <div class="expanded-wrap">
            <img v-lazy="art.imageUrl" class="expanded-img">
            <span v-html="art.info"></span>
          </div>
          <span class="dim"></span>
          <span class="plus">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArtwork } from "@/api/prismic";

export default {
  data() {
    return {
      artwork: null,
      hoveredItem: null,
      expandedItem: null,
    };
  },
  methods: {
    hovered(art) {
      this.hoveredItem = art;
    },
    expand(art) {
      if (this.expandedItem == art) {
        this.expandedItem = null;
      } else {
        this.expandedItem = art;
      }
    },
  },
  mounted() {
    getArtwork().then(response => (this.artwork = response));
  },
};
</script>

<style lang='scss' scoped>
.art {
  .art-section {
    border-top: 5px solid $color-text-strong;
    border-bottom: 5px solid $color-text-strong;
    .art-wrap {
      align-content: center;
      height: 200px;
      background-size: cover;
      background-position: center center;
      transition: height 0.5s ease-out;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &.closed {
        height: 75px;
        .dim {
          opacity: 1;
        }
      }
      &.open {
        height: 350px;
        &:hover {
          .plus {
            opacity: 1;
          }
        }
      }
      &.expanded {
        .expanded-wrap {
          visibility: visible;
          opacity: 1;
          @include under-m {
            display: none;
          }
        }
      }
      .art-img {
        width: 100%;
        display: block;
      }
      .expanded-wrap {
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: visibility 0.4s ease-out, opacity 0.4s ease-out;
        position: fixed;
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.8);
        top: 0;
        height: 100vh;
        z-index: 99;
        span {
          background-color: $color-background;
          width: 50%;
          text-align: center;
          box-sizing: border-box;
        }
      }
      .expanded-img {
        width: 50%;
        z-index: 999;
      }
      .plus {
        opacity: 0;
        transition: opacity 0.5s ease-out;
        width: 50px;
        height: 50px;
        border-radius: 100px;
        background-color: rgba(241, 156, 121, 0.55);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2em;
        color: $color-background;
        @include under-m {
          display: none;
        }
      }
      .dim {
        opacity: 0;
        transition: opacity 0.5s ease-out;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.55);
      }
    }
  }
}
</style>

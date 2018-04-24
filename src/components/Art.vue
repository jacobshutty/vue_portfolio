<template>
  <div class="art">
    <div class="container">
      <div class="header">Art/Design Work</div>
    </div>
    <div class="fullwidth">
      <div class="art-section">
        <div v-for="art in artwork" class="art-wrap" :class="{open: art==hoveredItem, closed: art!=hoveredItem, expanded: art==expandedItem}" :key="art.id" @mouseover="hovered(art)" :style="{backgroundImage: 'url(' + art.data.art_image.url + ')'}" @click="expand(art)">
          <div class="expanded-wrap">
            <img :src="art.data.art_image.url" class="expanded-img">
            <serializer :content='art.data.info'></serializer>
          </div>
          <span class="dim"></span>
          <span class="plus">+</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Prismic from 'prismic-javascript';
import Serializer from './global/Serializer';

export default {
  components: {
    Serializer,
  },
  data() {
    return {
      endpoint: 'https://shuttyja-portfolio.cdn.prismic.io/api/v2',
      artwork: null,
      hoveredItem: null,
      expandedItem: null,
    };
  },
  methods: {
    pullData() {
      Prismic.getApi(this.endpoint, {})
        .then(api => {
          return api.query(Prismic.Predicates.at('document.type', 'art'));
        })
        .then(response => {
          this.artwork = response.results;
        });
    },
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
    this.pullData();
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
          display: flex;
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
        display: none;
        position: fixed;
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.55);
        top: 0;
        height: 100vh;
        z-index: 99;
        padding: 20px;
        .serialized {
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

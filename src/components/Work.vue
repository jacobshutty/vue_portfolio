<template>
  <div class="work">
    <div class="container">
      <div class="header">Recent Work</div>
      <div class="work-wrap">
        <div v-for="item in work" :key="item.name" @click="workInfo(item)" class="work-item">
          <h3>{{item.name}}</h3>
          <img :src="item.imageUrl" class="work-image">
        </div>
      </div>
    </div>
    <div class="info-pop work-info-pop" v-if="showInfo">
      <span class="close-pop" @click="clearWork">&times;</span>
      <img :src="selectedInfo.imageUrl">
      <span v-html="selectedInfo.description"></span>
    </div>
  </div>
</template>
<script>
import { getWork } from "@/api/prismic";

export default {
  name: "Work",
  data: function() {
    return {
      work: null,
      showInfo: false,
      selectedInfo: null,
    };
  },
  methods: {
    workInfo(item) {
      this.showInfo = true;
      this.selectedInfo = item;
    },
    clearWork() {
      this.showInfo = false;
    },
  },
  created() {
    getWork().then(response => {
      this.work = response;
    });
  },
};
</script>
<style lang="scss" scoped>
.work {
  margin: 20px 0 40px 0;
  .info-pop {
    &.work-info-pop {
      @include over-m {
        display: flex;
      }
      img {
        width: 100%;
        max-width: 500px;
      }
    }
  }
}
.work-wrap {
  display: flex;
  @include under-ms {
    flex-direction: column;
  }
  .work-item {
    width: 33%;
    margin: 0 20px;
    color: $color-text;
    cursor: pointer;
    @include under-ms {
      width: 100%;
      margin: 10px 0;
    }
    &:first-of-type {
      margin-left: 0;
      @include under-ms {
        border-bottom: 2px solid $sherbert;
      }
    }
    &:last-of-type {
      margin-right: 0;
      @include under-ms {
        border-top: 2px solid $sherbert;
      }
    }
  }
  .work-image {
    width: 100%;
    @include under-ms {
      width: 50%;
    }
    @include under-s {
      width: 100%;
    }
  }
}
</style>

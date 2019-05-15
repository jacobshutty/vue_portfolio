<template>
  <div class="work">
    <div class="container">
      <div class="header">Recent Work</div>
      <div class="work-wrap">
        <a
          v-for="item in work"
          :key="item.name"
          :href="item.link"
          target="_blank"
          class="work-item"
        >
          <h3>{{item.name}}</h3>
          <img :src="item.imageUrl" class="work-image">
          <span v-html="item.description"></span>
        </a>
      </div>
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
    };
  },
  methods: {},
  created() {
    getWork().then(response => {
      this.work = response;
      console.log("work", this.work);
    });
  },
};
</script>
<style lang="scss" scoped>
.work {
  margin: 20px 0 40px 0;
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
    text-decoration: none;
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

<template>
  <div class="skills">
    <div class="fullwidth">
      <div class="container">
        <div class="header">Primary Skills</div>
        <div class="skill-grid">
          <vue-particles color="#f19c79" linesColor="#2e0219" :hoverEffect="false" :clickEffect="false" :linesDistance="200" :particleSize="5"></vue-particles>
          <div v-for="skill in skills" class="skill-wrap" :class="{selected:skill==selectedInfo}" :key="skill.id" @click="skillInfo(skill)">
            <div class="logo">
              <img :src="skill.data.logo.url" :alt="skill.data.logo.alt">
            </div>
            <div class="title">{{skill.data.skill_name[0].text}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="info-pop" v-if="showInfo">
      <span class="close-pop" @click='clearSkill'>&times;</span>
      <img :src="selectedInfo.data.logo.url" :alt="selectedInfo.data.logo.alt">
      <serializer :content='selectedInfo.data.skill_info'></serializer>
    </div>
    <div class="desktop container">
      <div class="info" v-if="showInfo">
        <serializer :content='selectedInfo.data.skill_info'></serializer>
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
      skills: null,
      showInfo: false,
      selectedInfo: null,
    };
  },
  methods: {
    pullData() {
      Prismic.getApi(this.endpoint, {})
        .then(api => {
          return api.query(Prismic.Predicates.at('document.type', 'skill'), {
            orderings: '[my.skill.index]',
          });
        })
        .then(response => {
          this.skills = response.results;
          // this.skillInfo(this.skills[0]);
        });
    },
    skillInfo(skill) {
      this.showInfo = true;
      this.selectedInfo = skill;
    },
    clearSkill() {
      this.showInfo = false;
    },
  },
  computed: {},
  created() {
    this.pullData();
  },
};
</script>

<style lang='scss' scoped>
.fullwidth {
  background-color: $color-background-shade;
  position: relative;
}
.info {
  padding: 20px 0;
  font-size: 1.25em;
  .serialized {
    height: 75px;
  }
}
.desktop {
  @include under-m {
    display: none;
  }
}

.info-pop {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  color: $color-background;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 9999;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @include over-m {
    display: none;
  }
  .close-pop {
    position: absolute;
    top: 0px;
    right: 25px;
    font-size: 5em;
  }
  img {
    width: 50%;
    max-width: 300px;
  }
}
.skills {
  border-top: 5px solid $color-text-strong;
}
.header {
  z-index: 5;
}
.skill-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  grid-template-rows: auto;
  grid-column-gap: 50px;
  padding: 20px 0;
  #particles-js {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    cursor: default;
    z-index: 1;
    @include under-m {
      opacity: 0;
    }
  }
  @include under-m {
    grid-column-gap: 50px;
    justify-content: center;
  }
  .skill-wrap {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    transition: filter 0.5s ease-out;
    text-align: center;
    cursor: pointer;
    z-index: 10;
    @include under-m {
      // -webkit-filter: none;
      // filter: none;
    }
    &:hover {
      -webkit-filter: none;
      filter: none;
    }
    &:after {
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 25px 25px 25px;
      border-color: transparent;
      @include under-m {
        display: none;
      }
    }
    &.selected {
      -webkit-filter: none;
      filter: none;
      &:after {
        content: '';
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 25px 25px 25px;
        border-color: transparent transparent #ffffff transparent;
      }
    }
    .logo {
      padding: 5px 10px;
      img {
        width: 100%;
        max-width: 300px;
      }
    }
    .title {
      width: 100%;
      text-align: center;
      font-size: 1.25em;
      font-family: $font-primary;
      padding: 5px 0;
    }
  }
}
</style>

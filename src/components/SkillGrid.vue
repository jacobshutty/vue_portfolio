<template>
  <div class="skills">
    <div class="fullwidth">
      <div class="container">
        <div class="header">Primary Skills</div>
        <div class="skill-grid">
          <div v-for="skill in skills" class="skill-wrap" :class="{selected:skill==selectedInfo}" :key="skill.id" @mouseover="skillInfo(skill)">
            <div class="logo">
              <img :src="skill.data.logo.url" :alt="skill.data.logo.alt">
            </div>
            <div class="title">{{skill.data.skill_name[0].text}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
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
          return api.query(Prismic.Predicates.at('document.type', 'skill'));
        })
        .then(response => {
          this.skills = response.results;
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
}
.info {
  padding: 20px 0;
  font-size: 1.25em;
}
.skill-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  grid-template-rows: auto;
  grid-column-gap: 100px;
  padding: 20px 0;
  .skill-wrap {
    // border: $border-primary;
    // border-radius: 8px;
    // transition: background-color 0.2s ease-out;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    transition: filter 0.5s ease-out;
    text-align: center;
    cursor: pointer;
    &:after {
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 25px 25px 25px;
      border-color: transparent;
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

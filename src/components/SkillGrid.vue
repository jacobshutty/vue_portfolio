<template>
  <div class="container">
    <div class="skill-grid">
      <div v-for="skill in skills" class="skill-wrap" :key="skill.id" @mouseover="skillInfo(skill)" @mouseout="clearSkill">
        <div class="logo">
          <img :src="skill.data.logo.url" :alt="skill.data.logo.alt">
        </div>
        <div class="title">{{skill.data.skill_name[0].text}}</div>
      </div>
    </div>
    <div class="info" v-show="showInfo">{{selectedInfo.data.skill_info[0].text}}</div>
  </div>
</template>

<script>
import Prismic from 'prismic-javascript';

export default {
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
  mounted() {
    this.pullData();
  },
};
</script>

<style lang='scss' scoped>
.skill-grid {
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-column-gap: 20px;
  .skill-wrap {
    border: $border-primary;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      background-color: $color-background-shade;
      transition: background-color 0.2s ease-out;
    }
    .logo {
      padding: 20px;
      img {
        width: 100%;
        max-width: 300px;
      }
    }
    .title {
      width: 100%;
      text-align: center;
      font-size: 1.75em;
      font-family: $font-primary;
      padding: 10px 0;
    }
  }
}
</style>

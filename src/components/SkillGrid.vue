<template>
  <div class="skills">
    <div
      v-if="shownParticles"
      class="fullwidth"
      :style="{backgroundColor: shownParticles.bgColor, color: shownParticles.textColor}"
    >
      <div class="container">
        <div class="header" :style="{color: shownParticles.textColor}">Primary Skills</div>
        <transition name="slideDownLong">
          <div
            @click="particleColors()"
            class="color-switcher"
            :style="{backgroundColor: shownParticles.textColor, color: shownParticles.bgColor}"
          >
            <i class="fas fa-palette"></i>
          </div>
        </transition>
        <div class="particles-wrap" v-for="particles in colorData" :key="particles.name">
          <div class="skill-grid" v-if="shownParticles.name === particles.name">
            <vue-particles
              :color="particles.dotColor"
              :linesColor="particles.lineColor"
              :hoverEffect="false"
              :clickEffect="false"
              :linesDistance="200"
              :particleSize="5"
            ></vue-particles>
            <div
              v-for="skill in skills"
              class="skill-wrap"
              :class="{selected:skill==selectedInfo}"
              :key="skill.id"
              @click="skillInfo(skill)"
            >
              <div class="logo">
                <img :src="skill.data.logo.url" :alt="skill.data.logo.alt">
              </div>
              <div class="title">{{skill.data.skill_name[0].text}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="info-pop" v-if="showInfo">
      <span class="close-pop" @click="clearSkill">&times;</span>
      <img :src="selectedInfo.data.logo.url" :alt="selectedInfo.data.logo.alt">
      <serializer :content="selectedInfo.data.skill_info"></serializer>
    </div>
    <div class="desktop container">
      <transition name="slideDown">
        <div class="info" v-if="showInfo">
          <serializer :content="selectedInfo.data.skill_info"></serializer>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Prismic from "prismic-javascript";
import Serializer from "./global/Serializer";
import { particleColorTransform } from "@/transforms";

export default {
  components: {
    Serializer,
  },
  data() {
    return {
      endpoint: "https://shuttyja-portfolio.cdn.prismic.io/api/v2",
      skills: null,
      showInfo: false,
      selectedInfo: null,
      showParticles: false,
      shownParticles: null,
      colorData: null,
      particleBg: "#c1c1c1",
      particleLineColor: "#2e0219",
      particleDotColor: "#f19c79",
      skillTextColor: "#2b2c28",
    };
  },
  methods: {
    pullData() {
      Prismic.getApi(this.endpoint, {})
        .then(api => {
          return api.query(Prismic.Predicates.at("document.type", "skill"), {
            orderings: "[my.skill.index]",
          });
        })
        .then(response => {
          this.skills = response.results;
          // this.skillInfo(this.skills[0]);
        });
      Prismic.getApi(this.endpoint, {})
        .then(api => {
          return api.query(Prismic.Predicates.at("document.type", "particle_colors"), {});
        })
        .then(response => {
          this.colorData = particleColorTransform(response);
          this.particleColors();
        });
    },
    skillInfo(skill) {
      if (this.selectedInfo === skill) {
        this.showInfo = false;
        this.selectedInfo = null;
      } else {
        this.showInfo = true;
        this.selectedInfo = skill;
      }
    },
    clearSkill() {
      this.showInfo = false;
    },
    particleColors() {
      let filteredColors = this.colorData;
      if (this.shownParticles) {
        // If there are already particles shown, filter them out so you don't get the same one.
        const previousParticles = this.shownParticles;
        filteredColors = this.colorData.filter(color => color.name !== previousParticles.name);
      }
      const colorIndex = Math.floor(Math.random() * Math.floor(filteredColors.length));
      this.shownParticles = filteredColors[colorIndex];
      this.showParticles = true;
    },
  },
  created() {
    this.pullData();
  },
};
</script>

<style lang='scss' scoped>
.container {
  position: relative;
}
.fullwidth {
  position: relative;
  .header {
    z-index: 5;
  }
  .color-switcher {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 5vw;
    padding: 20px;
    border-radius: 0 0 10px 10px;
    z-index: 99;
  }
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
.skill-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
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
    transition: filter 0.25s ease-out;
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
      content: "";
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
        content: "";
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

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
              :key="skill.name"
              @click="skillInfo(skill)"
            >
              <div class="logo">
                <img :src="skill.logoUrl">
              </div>
              <div class="title">{{skill.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="info-pop" v-if="showInfo">
      <span class="close-pop" @click="clearSkill">&times;</span>
      <img :src="selectedInfo.logoUrl">
      <span v-html="selectedInfo.info"></span>
    </div>
    <div class="desktop container">
      <transition name="slideDown">
        <div class="info" v-if="showInfo">
          <span v-html="selectedInfo.info"></span>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Prismic from "prismic-javascript";
import { getSkills, getParticles } from "@/api/prismic";

export default {
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
  created() {
    getSkills().then(response => {
      this.skills = response;
    });

    getParticles().then(response => {
      this.colorData = response;
      this.particleColors();
    });
  },
  methods: {
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
      this.selectedInfo = null;
    },
    particleColors() {
      if (this.shownParticles) {
        const currentIndex = this.shownParticles.order - 1;
        if (currentIndex + 1 <= this.colorData.length - 1) {
          this.shownParticles = this.colorData[currentIndex + 1];
        } else {
          this.shownParticles = this.colorData[0];
        }
      } else {
        this.shownParticles = this.colorData[0];
      }
      this.showParticles = true;
    },
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
    top: 0;
    cursor: default;
    z-index: 1;
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
    @include under-ms {
      -webkit-filter: none;
      filter: none;
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

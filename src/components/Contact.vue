<template>
  <div class="contact">
    <div class="container">
      <div class="contact-wrap">
        <!-- TODO: Figure out why success and error won't work -->
        <span v-clipboard:copy="email">jacobshutty@gmail.com</span>
        <div class="desktop">
          <div @click='showResume' class="view-resume button" v-if="!resume">View Resume</div>
          <div @click='hideResume' class="hide-resume button" v-else>Hide</div>
          <div class="resume-wrap" v-show="resume">
            <a href="static/JacobShuttyResume.pdf" download class="download">Download &dArr;</a>
            <pdf src='static/JacobShuttyResume.pdf'></pdf>
          </div>
        </div>
        <div class="mobile">
          <a class="view-resume button" href="static/JacobShuttyResume.pdf">View Resume</a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import pdf from 'vue-pdf';

export default {
  components: { pdf },
  data() {
    return {
      email: 'jacobshutty@gmail.com',
      copySuccess: null,
      resume: false,
    };
  },
  methods: {
    copied(status) {
      this.copySuccess = status;
    },
    showResume() {
      this.resume = true;
    },
    hideResume() {
      this.resume = false;
    },
  },
};
</script>

<style lang='scss' scoped>
.contact {
  .contact-wrap {
    padding: 50px 0 50px 0;
    background-color: $color-background;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .resume-wrap,
    .desktop {
      width: 100%;
      text-align: center;
    }
    .mobile {
      a.view-resume {
        text-decoration: none;
      }
    }
    .view-resume,
    .hide-resume {
      margin: 10px;
      display: inline-block;
      width: 120px;
      // &:hover {
      //   &:after {
      //     content: ' \2193';
      //   }
      //   &:before {
      //     content: '\2193 ';
      //   }
      // }
    }
    .hide-resume {
      background-color: red;
    }
    .download {
      display: inline-block;
      color: $color-text-strong;
    }
    span {
      text-decoration: none;
      color: $color-text-heading;
      font-family: $font-secondary;
      font-size: 1.2em;
      cursor: pointer;
      position: relative;
      padding: 5px 10px;
      border-radius: 3px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
        &:before {
          content: 'Click to copy!';
          position: absolute;
          bottom: 110%;
          color: $color-text;
          font-size: 0.8em;
          text-align: center;
          width: 100%;
          padding: 0;
          margin-left: -10px;
        }
      }
    }
  }
}
</style>

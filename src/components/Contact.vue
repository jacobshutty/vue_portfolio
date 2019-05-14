<template>
  <div class="contact" v-if="resumeDoc">
    <div class="container">
      <div class="contact-wrap">
        <span
          class="clipboard-message"
          :class="{error: showError, success: showSuccess}"
          v-if="showClipboardMessage"
        >{{clipboardMessage}}</span>
        <span
          class="email"
          v-clipboard:copy="email"
          v-clipboard:success="copied"
          v-clipboard:error="copyFailed"
        >
          jacobshutty@gmail.com
          <i class="fas fa-copy"></i>
        </span>
        <div class="desktop">
          <div @click="showResume" class="view-resume button" v-if="!resume">View Resume</div>
          <div @click="hideResume" class="hide-resume button" v-else>Hide</div>
          <div class="resume-wrap" v-show="resume">
            <a :href="resumeDoc" download class="download">Download &dArr;</a>
            <pdf :src="resumeDoc"></pdf>
          </div>
        </div>
        <div class="mobile">
          <a class="view-resume button" :href="resumeDoc">View Resume</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pdf from "vue-pdf";
import Prismic from "prismic-javascript";
import { resumeTransform } from "@/transforms";

export default {
  components: { pdf },
  data: function() {
    return {
      email: "jacobshutty@gmail.com",
      clipboardMessage: null,
      showSuccess: false,
      showError: false,
      resume: false,
      endpoint: "https://shuttyja-portfolio.cdn.prismic.io/api/v2",
      resumeDoc: null,
    };
  },
  methods: {
    copied() {
      this.clipboardMessage = "Copied!";
      this.showSuccess = true;
      this.showError = false;
    },
    copyFailed() {
      this.clipboardMessage = "Your browser doesn't support click to copy";
      this.showError = true;
      this.showSuccess = false;
    },
    showResume() {
      this.resume = true;
    },
    hideResume() {
      this.resume = false;
    },
    pullData() {
      Prismic.getApi(this.endpoint, {})
        .then(api => {
          return api.query(Prismic.Predicates.at("document.type", "resume"), {});
        })
        .then(response => {
          this.resumeDoc = resumeTransform(response);
        });
    },
  },
  computed: {
    showClipboardMessage() {
      return this.showSuccess || this.showError;
    },
  },
  created() {
    this.pullData();
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
    .email {
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
      }
    }
    .clipboard-message {
      font-size: 0.9em;
      margin-bottom: 10px;
      &.success {
        color: $color-text-strong;
      }
      &.error {
        color: red;
      }
    }
  }
}
</style>

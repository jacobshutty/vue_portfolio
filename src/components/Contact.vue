<template>
  <div class="contact">
    <div class="container">
      <div class="contact-wrap">
        <!-- TODO: Figure out why success and error won't work -->
        <span v-clipboard:copy="email">jacobshutty[at]gmail.com</span>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  components: {},
  data() {
    return {
      email: 'jacobshutty@gmail.com',
      copySuccess: null,
    };
  },
  methods: {
    copied(status) {
      this.copySuccess = status;
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

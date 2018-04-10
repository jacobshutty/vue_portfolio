<template>
  <div class="home page">
    <navbar></navbar>
    <div class="page-banner">
      <div class="container">
        <div class="banner-header">
          <h1>Portfolio</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis iste est ex, ipsam quasi ea numquam at mollitia dolor?</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './global/Navbar';

export default {
  name: 'Home',
  components: {
    Navbar,
  },
};
</script>

<style lang='scss' scoped>
.page-banner {
  background-color: $color-primary;
}
</style>

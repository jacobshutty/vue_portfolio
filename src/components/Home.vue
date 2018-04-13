<template>
  <div class="home page">
    <navbar></navbar>
    <div class="page-banner">
      <div class="container">
        <div class="banner-header">
          <h1>Portfolio</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
    <skill-grid></skill-grid>
  </div>
</template>

<script>
import Navbar from './global/Navbar';
import SkillGrid from './SkillGrid';

export default {
  name: 'Home',
  components: {
    Navbar,
    SkillGrid,
  },
};
</script>

<style lang='scss' scoped>
.page-banner {
  background-color: $color-primary;
}
</style>

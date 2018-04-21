<template>
  <div class="home page">
    <!-- <navbar></navbar> -->
    <!-- <banner></banner> -->
    <perspective-banner></perspective-banner>
    <skill-grid></skill-grid>
    <art></art>
  </div>
</template>

<script>
import Navbar from './global/Navbar';
import SkillGrid from './SkillGrid';
import PerspectiveBanner from './PerspectiveBanner';
import Banner from './global/Banner';
import Art from './Art';

export default {
  name: 'Home',
  components: {
    Navbar,
    SkillGrid,
    PerspectiveBanner,
    Banner,
    Art,
  },
};
</script>

<style lang='scss' scoped>

</style>

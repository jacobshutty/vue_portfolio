<template>
  <div class="home page">
    <!-- <navbar></navbar> -->
    <!-- <banner></banner> -->
    <perspective-banner></perspective-banner>
    <skill-grid></skill-grid>
    <work></work>
    <art></art>
    <contact></contact>
  </div>
</template>

<script>
import Navbar from "./global/Navbar";
import SkillGrid from "./SkillGrid";
import PerspectiveBanner from "./PerspectiveBanner";
import Banner from "./global/Banner";
import Art from "./Art";
import Contact from "./Contact";
import Work from "./Work";

export default {
  name: "Home",
  components: {
    Navbar,
    SkillGrid,
    PerspectiveBanner,
    Banner,
    Art,
    Contact,
    Work,
  },
};
</script>

<style lang='scss' scoped>
</style>

<template>
  <header>
    <nav id='header-nav'>
      <div class="left">
        Left
      </div>
      <div class="logo">
        Logo
      </div>
      <div class="right">
        Right
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style lang='scss' scoped>
#header-nav {
  display: flex;
  flex-direction: column;
  background-color: $cta-color;
  .left {
    justify-self: flex-start;
  }
  .logo {
  }
  .right {
    justify-self: flex-end;
  }
}
</style>

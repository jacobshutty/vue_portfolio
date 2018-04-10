<template>
  <header>
    <nav id='header-nav'>
      <span class="left">
        Left
      </span>
      <span class="logo">
        Logo
      </span>
      <span class="right">
        Right
      </span>
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
  flex-direction: row;
  background-color: $color-primary;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  box-sizing: border-box;
  height: 60px;
  .left {
    justify-self: flex-start;
  }
  .logo {
    justify-self: center;
  }
  .right {
    justify-self: flex-end;
  }
}
</style>

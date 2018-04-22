<template>
  <!-- TODO: Clear perspective on mouse leave -->
  <div class="rel">
    <!-- <vue-particles color="#dedede"></vue-particles> -->
    <div class="js-perspective">
      <div class="perspective-card-wrap">
        <div class="js-perspective-card perspective-card">
          <div class="perspective-card__content">
            <h1>Jacob Shutty</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    perspectiveHover(el, intensity) {
      var self = this,
        parent = document.querySelector('.rel');

      this.perspective = function(e, el) {
        var elX = el.offsetLeft,
          elY = el.offsetTop,
          elWidth = el.offsetWidth,
          elHeight = el.offsetHeight;

        var mouseX = e.pageX,
          mouseY = e.pageY;

        var rotateY = -(
            (elWidth / 2 - (mouseX - elX)) /
            (elWidth / 2) *
            intensity
          ),
          rotateX =
            (elHeight / 2 - (mouseY - elY)) / (elHeight / 2) * intensity;

        el.style.transform =
          'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
      };

      parent.addEventListener('mousemove', function(e) {
        if (e.target.classList.contains('js-perspective-card')) {
          self.perspective(e, e.target);
        }
      });
    },
  },
  computed: {},
  mounted() {
    this.perspectiveHover('.js-perspective-card', 2);
  },
};
</script>

<style lang='scss' scoped>
.rel {
  position: relative;
  height: 250px;
}
#particles-js {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
}
.js-perspective {
  height: 250px;
  width: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
}
.perspective-card-wrap {
  width: 100%;
  perspective: 2000px;
  perspective-origin: top center;
  display: inline-block;
}
.perspective-card__content {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateZ(40px);
  width: 100%;
  text-align: center;
  font-family: $font-primary;
  cursor: default;
}
.perspective-card {
  width: 150%;
  left: -25%;
  top: -100px;
  height: 500px;
  color: white;
  text-transform: uppercase;
  font-family: 'open sans';
  background-image: url(./../assets/tree.jpg);
  background-size: 110vw;
  background-position: 50% 40%;
  text-align: center;
  background-color: white;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.15);

  /* necessary for effect */
  position: relative;
  transform-style: preserve-3d;
  will-change: transform;
}
</style>

<script>
import HeaderTop from './HeaderTop.vue'
import HeaderBottom from './HeaderBottom.vue'

export default {
  data() {
    return {
      count: 0
    }
  },
  name: 'VueHeaderMain',
  components: {
    HeaderTop,
    HeaderBottom,
  }
}
</script>

<template>
  <div class="VueHeaderMain">
    <HeaderTop />
    <div class="wrapper">
      <HeaderBottom />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 0px 40px;
  margin: 0 auto;
  max-width: 1200px;
}

/*-----------------------------Media---------------------*/

@media (max-width: 1280px) {}

@media (max-width: 1024px) {
  .wrapper {
    padding: 0px 72px;
  }
}

@media (max-width: 768px) {
  .wrapper {
    padding: 0px 16px;
  }
}
</style>

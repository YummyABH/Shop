<script>
import VueHeaderMain from './components/VueHeaderMain.vue'
import VuePrewie from './components/VuePrewie.vue'
import VueVarieties from './components/VueVarieties.vue'
import VueAdvantages from './components/VueAdvantages.vue'
import VueClients from './components/VueClients.vue'
import VueFeedback from './components/VueFeedback.vue'
import VueFooter from './components/VueFooter.vue'

export default {
  name: 'Home',
  components: {
    VueHeaderMain,
    VuePrewie,
    VueVarieties,
    VueAdvantages,
    VueClients,
    VueFeedback,
    VueFooter,
  },
}
</script>

<template>
  <VueHeaderMain />
  <div class="wrapper">
    <VuePrewie
    borderColor="#36383C"
    textColor="#FFF"
    background="#202226"
    title="Новый зверь для всех типов кабелей"
    urlImg="/src/assets/Prewie/machine.jpg" />
    <VueVarieties />
    <VueAdvantages />
    <VueClients />
    <VueFeedback />
  </div>
  <VueFooter />
</template>


<style>
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
}</style>


<template>
  <VueHeaderMain/>
  <VuePrewie/>
  <VueVarieties/>
  <VueAdvantages/>
  <VueClients/>
  <VueFeedback/>
  <VueFooter/>
</template>

<script>
import VueHeaderMain from './components/VueHeaderMain.vue'
import VuePrewie from './components/VuePrewie.vue'
import VueVarieties from './components/VueVarieties.vue'
import VueAdvantages from './components/VueAdvantages.vue'
import VueClients from './components/VueClients.vue'
import VueFeedback from './components/VueFeedback.vue'
import VueFooter from './components/VueFooter.vue'

export default (await import('vue')).defineComponent({
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
})
</script>

<style>

</style>

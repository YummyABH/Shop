<script>
import VueHeaderMain from './components/VueHeaderMain.vue'
import VueFeedback from './components/VueFeedback.vue'
import VueFooter from './components/VueFooter.vue'
import AboutUs from './components/AboutUs.vue'
import Achievements from './components/Achievements.vue'
import VueClients from './components/VueClients.vue'
import OurInterest from './components/OurInterest.vue'

export default {
    data() {
        return {
        }
    },
    name: 'AboutCompany',
    components: {
        VueHeaderMain,
        AboutUs,
        Achievements,
        VueClients,
        OurInterest,
        VueFeedback,
        VueFooter,
    },
}
</script>
    
<template>
    <VueHeaderMain/>
    <div class="wrapper">
        <AboutUs/>
        <Achievements/>
        <VueClients/>
        <OurInterest/>
        <VueFeedback/>
    </div>
    <VueFooter/>
</template>
  
  
<style scoped>
.wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0px 40px;
}
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
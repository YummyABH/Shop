<script>
import VueHeaderMain from './components/VueHeaderMain.vue';
import Connection from './components/Connection.vue'
import LegalInformation from './components/LegalInformation.vue'
import VueFeedback from './components/VueFeedback.vue';
import VueFooter from './components/VueFooter.vue';

export default {
    data() {
        return {
        }
    },
    name: 'Contacts',
    components: {
        VueHeaderMain,
        Connection,
        LegalInformation,
        VueFeedback,
        VueFooter,
    },
}
</script>
    
<template>
    <VueHeaderMain/>
    <div class="wrapper">
        <Connection/>
        <LegalInformation/>
        <VueFeedback/>
    </div>
    <VueFooter/>
</template>
  
  
<style scoped>
.wrapper {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0px 40px;
}

@media (max-width: 1280px) {
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
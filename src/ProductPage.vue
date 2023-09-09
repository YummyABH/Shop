<script>
import VueHeaderMain from './components/VueHeaderMain.vue'
import VuePrewie from './components/VuePrewie.vue'
import VueFeedback from './components/VueFeedback.vue'
import VueFooter from './components/VueFooter.vue'
import ProductInfo from './components/PorductIndo.vue'

export default {
    data() {
        return {
        }
    },
    name: 'ProductPage',
    components: {
        VueHeaderMain,
        VuePrewie,
        ProductInfo,
        VueFeedback,
        VueFooter,
    },
}
</script>
    
<template>
    <VueHeaderMain />
    <div class="wrapper">
        <VuePrewie borderState="none" borderColor="#E9E9E9" textColor="#161616" background="#F4F5F8"
            title="SG-006-1 Станок для разделки кабеля (Автоматический)" urlImg="/Shop/assets/machine.jpg" />
        <ProductInfo />
        <VueFeedback />
    </div>
    <VueFooter />
</template>
  
  
<style scoped>
.wrapper {
    max-width: 1200px;
    padding: 0px 40px;
    margin: 0 auto;
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
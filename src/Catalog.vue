<script>
import VueHeaderMain from './components/VueHeaderMain.vue'
import CatalogAdvantages from './components/CatalogAdvantages.vue'
import AllProducts from './components/AllProducts.vue'

export default (await import('vue')).defineComponent({
    data() {
        return {
            [

            ]
        }
    },
    name: 'Catalog',
    components: {
        VueHeaderMain,
        CatalogAdvantages,
        AllProducts,
    },
})
</script>
    
<template>
    <VueHeaderMain/>
    <CatalogAdvantages/>
    <AllProducts/>
</template>
  
  
<style scoped>
</style>
  
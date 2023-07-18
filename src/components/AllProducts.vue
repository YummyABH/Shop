<script>

export default (await import('vue')).defineComponent({
    data() {
        return {
        }
    },
    props: {
        title: String,
    },
    name: 'AllProducts',
    components: {
    },
})
</script>
    
<template>
    <div class="AllProducts">
        <div class="wrapper">
            <head class="head">
                <h1 title>Вся продукция</h1>
                <div class="product-sum">126 товара</div>
            </head>
        </div>
    </div>
</template>
  
  
<style scoped>

.AllProducts {
    width: 100%;
    margin: 120px 0px;
}

.wrapper {
    max-width: 1200px;
    padding: 0px 40px;
    margin: 0 auto;
}
.head {
}
.product-sum {
}
</style>
  
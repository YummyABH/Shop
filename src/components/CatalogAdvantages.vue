<script>
import CardAdvantage from './CardAdvantage.vue'

export default (await import('vue')).defineComponent({
    name: 'CatalogAdvantages',
    components: {
        CardAdvantage,
    },
})
</script>
    
<template>
    <div class="CatalogAdvantages">
        <div class="wrapper">
            <div class="flex-container">
                <CardAdvantage 
                infoTitle="Всегда на связи"
                infoText="Консультируем при покупке и в дальнейшем при эксплуатации нашего оборудования"
                urlIcon="/src/assets/Advantages/Service.png"
                />

                <CardAdvantage 
                infoTitle="Опыт в сфере"
                infoText="Большой опыт в переработке вторсырья позволяет глубоко изучать проблемы и находить лучшие решения"
                urlIcon="/src/assets/Advantages/Case.png"
                />

                <CardAdvantage 
                infoTitle="Наличие запчастей"
                infoText="Преимуществом производства своими силами является замена любых комплектующих и ремонт при поломке"
                urlIcon="/src/assets/Advantages/Settings.png"
                />
            </div>
        </div>
    </div>
</template>
  
  
<style scoped>
.CatalogAdvantages {
    width: 100%;
    margin: 60px 0px;
}
.wrapper {
    max-width: 1200px;
    padding: 0px 40px;
    margin: 0 auto;
}
.flex-container {
    row-gap: 32px;
    column-gap: 16px;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
}

/*--------------@media запросы*/

/*--------------900px--------*/
@media (max-width: 900px) {
    .CatalogAdvantages {
    width: 100%;
    margin: 60px 0px;
    }

    .wrapper {
        padding: 0px 72px;
    }

    .flex-container {
        gap: 8px;
    }
}

@media (max-width: 660px) {
    .CatalogAdvantages {
    width: 100%;
    margin: 40px 0px;
    }
    .wrapper {
        padding: 0px 18px;
    }

    .flex-container {
        gap: 20px;
    }
}
</style>
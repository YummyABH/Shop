<script>
import CardAdvantage from './CardAdvantage.vue'

export default {
    data() {
        return {
        }
    },
    name: 'VueAdvantages',
    components: {
        CardAdvantage
    }
}
</script>

<template>
    <div class="VueAdvantages">
        <h1 class="title">Ваша рост – наш интерес, ведь тогда нам будет к чему стремиться</h1>

        <!--------------Advantages-->
        <div class="flex-container">

            <!--------------Item-->
            <CardAdvantage infoTitle="Всегда на связи"
                infoText="Консультируем при покупке и в дальнейшем при эксплуатации нашего оборудования"
                urlIcon="/src/assets/Advantages/Service.png" />
            <CardAdvantage infoTitle="Опыт в сфере"
                infoText="Большой опыт в переработке вторсырья позволяет глубоко изучать проблемы и находить лучшие решения"
                urlIcon="/src/assets/Advantages/Case.png" />

            <CardAdvantage infoTitle="Наличие запчастей"
                infoText="Преимуществом производства своими силами является замена любых комплектующих и ремонт при поломке"
                urlIcon="/src/assets/Advantages/Settings.png" />

            <CardAdvantage infoTitle="Доставка по всей России"
                infoText="Отправим товар транспортной компанией или почтовым отправлением (оплата при получении)"
                urlIcon="/src/assets/Advantages/Delivery.png" />

            <CardAdvantage infoTitle="Аренда станков" infoText="Станки можно брать на временное использование с залогом"
                urlIcon="/src/assets/Advantages/Rent.png" />

            <CardAdvantage infoTitle="Гарантия на всё"
                infoText="Предоставляется гарантия сроком до 1 года со дня приобретения товара"
                urlIcon="/src/assets/Advantages/Guarantee.png" />
        </div>
    </div>
</template>

<style scoped>
.VueAdvantages {
    width: 100%;
    margin: 120px 0px;
}

.title {
    max-width: 852px;
    margin-bottom: 60px;
    color: var(--text-dark, #161616);
    font-size: 40px;
    line-height: 48px;
}

.flex-container {
    row-gap: 40px;
    column-gap: 16px;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
}

/*--------------@media запросы*/

/*--------------1024px--------*/
@media (max-width: 1024px) {}

/*--------------900px--------*/
@media (max-width: 900px) {
    .VueAdvantages {
        width: 100%;
        margin: 100px 0px;
    }

    .wrapper {
        padding: 0px 72px;
    }

    .flex-container {
        gap: 8px;
    }
}

/*--------------660px--------*/
@media (max-width: 660px) {
    .VueAdvantages {
        width: 100%;
        margin: 60px 0px;
    }

    .flex-container {
        gap: 20px;
    }
}

/*--------------540px--------*/
@media (max-width: 540px) {
    .title {
        font-size: 24px;
        line-height: 28px;
    }
}
</style>
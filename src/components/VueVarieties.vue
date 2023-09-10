<script>
import CardTool from './CardTool.vue'

export default {
    data() {
        return {
        }
    },
    name: 'VueVarieties',
    components: {
        CardTool,
    }
}
</script>

<template>
    <div class="VueVarieties">
        <div class="title">Сепараторы, конвейеры, шнековые транспортеры и линии для переработки</div>
        <div class="subtitle">Мы на связи всегда и разберемся с любыми вопросами возникшими во время эксплуатации нашего
            оборудования.</div>

        <!--------------Varieties-->
        <div class="flex-container">

            <!--------------Item-->
            <CardTool title="Станки для разделки кабеля" urlImg="/Shop/assets/machine1.png" />
            <CardTool title="Сепараторы" urlImg="/src/assets/Varieties/machine2.png" />

            <CardTool title="Станок для разделки теплообменников" urlImg="/src/assets/Varieties/machine3.png" />

            <CardTool title="Разделка радиаторов" urlImg="/src/assets/Varieties/machine4.png" />

            <CardTool title="Запасные части" urlImg="/src/assets/Varieties/machine5.png" />

            <CardTool title="Другое" urlImg="/src/assets/Varieties/machine6.png" />
            <!--------------Item End-->
        </div>
    </div>
</template>

<style scoped>
.VueVarieties {
    width: 100%;
    margin: 120px 0px;
}

.title {
    display: flex;
    max-width: 852px;
    font-size: 40px;
    line-height: 48px;
    margin: 20px 0px;

    color: var(--text-black, #161616);
}

.subtitle {
    display: flex;
    max-width: 852px;
    color: var(--text-hover, #757575);
    font-size: 20px;
    line-height: 24px;
    margin-top: 20px;
    margin-bottom: 60px;
}

.flex-container {
    gap: 16px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

/*--------------@media запросы*/

/*--------------900px--------*/
@media (max-width: 900px) {
    .VueVarieties {
        margin: 100px 0px;
    }

    .wrapper {
        padding: 0px 72px;
    }

}

/*--------------660px--------*/
@media (max-width: 660px) {
    .VueVarieties {
        margin: 60px 0px;
    }

    .wrapper {
        padding: 0px 18px;
    }

}

/*--------------540px--------*/
@media (max-width: 540px) {
    .title {
        font-size: 24px;
        line-height: 28px;
    }

    .subtitle {
        font-size: 16px;
        line-height: 16px;
    }
}

/*--------------355px--------*/
@media (max-width: 355px) {
    .subtitle {
        font-size: 14px;
        line-height: 16px;
        margin-bottom: 40px;
    }

}
</style>
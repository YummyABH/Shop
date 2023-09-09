<script>

export default {
    data() {
        return {
        }
    },
    name: 'OurInterest',
    components: {

    },
}
</script>
    
<template>
    <div class="OurInterest">
        <div class="title">Ваша рос – наш интерес, ведь тогда нам будет к чему стремиться</div>
        <div class="grid-wrapper">
            <div class="background"></div>
            <div class="container">
                <div class="grid-item _1">
                    <div class="item-title">Мы надежный партнер</div>
                    <div class="text">За все это время работы не найдется клиент который был бы оставлен или проигнорирован,
                        столкнувшись с какой либо проблемой товара который у нас приобрел. Мы на связи всегда и разберемся с
                        любыми вопросами возникшими во время эксплуатации нашего оборудования.</div>
                </div>

                <div class="grid-item _2">
                    <div class="item-title">Меняем рынок</div>
                    <div class="text">В 2015 году было очень мало компаний занимающихся продажей или производством
                        оборудования
                        для переработки кабеля. Например по статистике запросов в Яндекс в то время по словам связанными с
                        этими
                        значениями, такие как “переработка кабеля”, “станки для разделки кабеля” и прочее было ~200 и ~350
                        соответсвенно. Сейчас эти показатели выросли в разы до 550 и 1500. Так же сейчас компаний продающих
                        больше в разы, но производителей так же мало. Мы хотели бы это тоже изменить, развивать производство
                        важнейшая задача в данной период времени для России.</div>
                </div>
            </div>
        </div>
    </div>
</template>
  
  
<style scoped>
.OurInterest {
    max-width: 100%;
    margin: 120px 0px;
}

.title {
    max-width: 800px;
    margin-bottom: 60px;

    color: var(--text-dark);
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px;
}

.grid-wrapper {
    column-gap: 120px;
    display: grid;
    grid-template-columns: minmax(464px, 491px) 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
        "back text"
    ;
}

.background {

    border-radius: 16px;
    grid-area: back;

    background-image: url(../assets/AboutUs/OurInterest/background.png);
    background-position: center;
    background-repeat: no-repeat;
}

.grid-item {
    grid-area: text;
    max-width: 500px;
    margin-top: 32px;

    color: var(--text-dark);
}




.grid-item:last-child {
    margin-bottom: 32px;
}

.item-title {
    margin-bottom: 24px;

    font-feature-settings: 'liga' off;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.24px;
}

.text {
    margin-top: 24px;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}

@media (max-width: 1280px) {
    .title {
        margin-bottom: 40px
    }
    .grid-wrapper {
        column-gap: 16px;
    }

    .OurInterest {
        margin: 100px 0px;
    }
}

@media (max-width: 1024px) {
    .title {
        margin-bottom: 32px
    }
    .grid-wrapper {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-template-areas:
            "text"
        ;
    }

    .background {
        display: none;
    }

    .grid-item {
        margin-top: 0px;
        margin-bottom: 16px;
    }

    .grid-item:last-child {
        margin-top: 16px;
        margin-bottom: 0px;
    }
}

@media (max-width: 768px) {
    .text {
        line-height: 16px;
        font-size: 14px;
    }
    .item-title {
        line-height: 24px;
        font-size: 18px;
    }
    .title {
        line-height: 28px;
        font-size: 24px;
    }
    .OurInterest {
        margin: 60px 0px;
    }

    .grid-item {
        margin-bottom: 12px;
    }

    .grid-item:last-child {
        margin-top: 12px;
    }
}</style>
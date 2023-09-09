<script>

export default {
    data() {
        return {
        }
    },
    name: 'Contacts',
    components: {
    },
}
</script>
    
<template>
    <div class="Connection">
        <div class="title">Контакты</div>
        <div class="grid-wrapper">

            <div class="container">
                <div class="item">
                    <div class="item-title">Адрес</div>
                    <div class="item-text">Тураевское шоссе дом 17, д. Островцы, Раменский район, МО, Россия</div>
                </div>

                <div class="item">
                    <div class="item-title">Рабочее время</div>
                    <div class="day">
                        <div class="day-item">Пн - Пт</div>
                        <div class="day-item">Сб - Вс</div>
                    </div>
                    <div class="time">
                        <div class="time-item">8:00 до 22:00</div>
                        <div class="time-item">8:00 до 20:00</div>
                    </div>
                </div>

                <div class="item">
                    <div class="item-title">Email</div>
                    <div class="item-text">okoprom@gmail.com</div>
                </div>

                <div class="item">
                    <div class="item-title">Телефон</div>
                    <div class="item-text">+7 (800) 707-31-01</div>
                </div>

                <div class="item">
                    <div class="button-title">Мессенджеры</div>
                    <div class="button-wrapper">
                        <div class="button">Whatsapp</div>
                        <div class="button">Telegram</div>
                    </div>
                </div>

                <div class="item">
                    <div class="button-title">Мы в социальных сетях</div>
                    <div class="networks-wrapper">
                        <div class="networks-item _1"></div>
                        <div class="networks-item _2"></div>
                    </div>
                </div>
            </div>

            <div class="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27755.464081058864!2d40.98286615216401!3d43.01125596010737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405f220f44f90b7d%3A0xe01a1045ea63bc8a!2sSokhumi!5e0!3m2!1sen!2sge!4v1693573247695!5m2!1sen!2sge"
                    style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</template>
  
  
<style scoped>
.title {
    margin-bottom: 40px;

    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px;
    color: var(--text-dark);
}

.grid-wrapper {
    display: grid;
    justify-content: space-between;
    grid-template-columns: minmax(0px, 491px) minmax(0px, 592px);
    grid-template-rows: minmax(592px, auto);
    grid-template-areas: "contact map";
}

.Connection {
    margin: 60px 0px 80px 0px;
    max-width: 100%;
}

.networks-wrapper {
    display: flex;
    gap: 8px;
}

.networks-item {
    border-radius: 8px;
    width: 44px;
    height: 44px;
    border: 1px solid var(--dived-hover, #E9E9E9);
    background-position: center;
    background-repeat: no-repeat;


}

._1 {
    background-image: url(../assets/Footer/Instagram.png);
}

._2 {
    background-image: url(../assets/Footer/YouTube.png);
}

.container {
    grid-area: contact;
}

.item {
    margin: 40px 0px;
}

.item:first-child {
    margin-top: 0px;
}

.item-title {
    margin-bottom: 8px;

    color: var(--text-hover);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}

.item-text {
    color: var(--text-dark);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
}

.day {
    margin-right: 30px;
    display: inline-block;
}

.time {
    display: inline-block;
}

.button-title {
    margin-bottom: 12px;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: var(--text-hover);
}

.button-wrapper {
    display: flex;
    gap: 8px;
}

.button {
    padding: 12px 20px;
    border-radius: 8px;

    background-color: var(--back-button);
    color: var(--text-light);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}

.map {
    grid-area: map;
    max-height: 592px;
}

iframe {
    height: 100%;
    width: 100%;
}


@media (max-width: 1280px) {
    .Connection {
        margin: 60px 0px 100px 0px;
    }

    .grid-wrapper {
        justify-content: start;
        grid-template-columns: 100%;
        grid-template-rows: auto minmax(592px, auto);
        grid-template-areas:
            "contact"
            "map"
        ;
    }
}

@media (max-width: 1024px) {}

@media (max-width: 768px) {
    .Connection {
        margin: 40px 0px 60px 0px;
    }
    .grid-wrapper {
        grid-template-rows: auto minmax(182px, auto);
    }
    .title {
        margin-bottom: 20px;

        line-height: 28px;
        font-size: 24px;
    }
    .item {
        margin: 20px 0px;
    }
    .item-title {
        margin-bottom: 8px;

        line-height: 16px;
        font-size: 14px;
    }
    .item-text {
        line-height: 20px;
        font-size: 16px;
    }
    .day {
        line-height: 20px;
        font-size: 16px;
    }
    .time {
        line-height: 20px;
        font-size: 16px;
    }
    .button-title {
        margin-bottom: 8px;

        line-height: 16px;
        font-size: 14px;
    }
}
</style>
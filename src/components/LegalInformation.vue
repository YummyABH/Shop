<script>

export default {
    data() {
        return {
        }
    },
    name: 'LegalInformation',
    components: {
    },
}
</script>
    
<template>
    <div class="LegalInformation">
        <div class="title">Юридическая информация</div>
        <div class="grid-wrapper">

            <div class="production">
                <div class="container-title">Производство</div>

                <div class="item">
                    <div class="item-title">Наименование компании</div>
                    <div class="item-text">Общество с ограниченной ответственностью «Окопром»</div>
                </div>

                <div class="item">
                    <div class="item-title">ОГРН</div>
                    <div class="item-text">1205000045821</div>
                </div>

                <div class="item">
                    <div class="item-title">ИНН</div>
                    <div class="item-text">5032318518</div>
                </div>

                <div class="item">
                    <div class="item-title">Адрес производства</div>
                    <div class="item-text">Россия, Московская область, д. Островцы, Тураевская улица, дом 58</div>
                </div>

                <div class="item">
                    <div class="item-title">Почтовый адрес</div>
                    <div class="item-text">143072, Московская обл., р-н Одинцовский, п. ВНИИССОК, ул. Дружбы, д. 4</div>
                </div>
            </div>

            <div class="sales">
                <div class="container-title">Продажи</div>

                <div class="item">
                    <div class="item-title">Наименование компании</div>
                    <div class="item-text">Общество с ограниченной ответственностью «Сином Групп»</div>
                </div>

                <div class="item">
                    <div class="item-title">ОГРН</div>
                    <div class="item-text">1177746129010</div>
                </div>

                <div class="item">
                    <div class="item-title">ИНН</div>
                    <div class="item-text">7726396387</div>
                </div>

                <div class="item">
                    <div class="item-title">Адрес производства</div>
                    <div class="item-text">Россия, Московская область, д. Островцы, Тураевская улица, дом 58</div>
                </div>

                <div class="item">
                    <div class="item-title">Почтовый адрес</div>
                    <div class="item-text">115191, г. Москва, пер. Духовской, д. 17, пом. 1</div>
                </div>
            </div>
        </div>
    </div>
</template>
  
  
<style scoped>
.title {
    margin-bottom: 40px;

    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.24px;
    font-feature-settings: 'liga' off;
    color: var(--text-dark);
}

.grid-wrapper {
    display: grid;
    justify-content: space-between;
    grid-template-columns: minmax(0px, 491px) minmax(0px, 491px);
    grid-template-rows: auto;
    grid-template-areas: "production sales";
}

.LegalInformation {
    margin: 80px 0px 120px 0px;
    max-width: 100%;
}
.production {
    grid-area: production;
}
.sales {
    grid-area: sales;
}

.item {
    gap: 16px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding-bottom: 20px;

    border-bottom: 1px solid var(--dived-hover);
}

.item-title {
    width: 38%;

    color: var(--text-hover);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}

.item-text {
    width: 58.6%;

    color: var(--text-dark);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}


@media (max-width: 1280px) {
    .LegalInformation {
        margin: 100px 0px;
    }

    .grid-wrapper {
        justify-content: start;
        grid-template-columns: minmax(0px, 625px);
        grid-template-rows: auto auto;
        grid-template-areas:
            "production"
            "sales"
        ;
    }
}

@media (max-width: 1024px) {}

@media (max-width: 768px) {

    .title {
        margin-bottom: 32px;

        line-height: 28px;
        font-size: 24px;
    }

    .item {
        gap: 8px;
        padding-bottom: 20px;
        flex-wrap: wrap;
        margin-top: 12px;
    }

    .item-title {
        width: 100%;

        line-height: 20px;
        font-size: 16px;
    }

    .item-text {
        width: 100%;

        line-height: 20px;
        font-size: 16px;
    }
}
</style>
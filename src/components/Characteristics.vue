<script>
export default {
    data() {
        return {
        }
    },
    props: {
    },
    name: 'Characteristics',
    components: {
    }
}
</script>

<template>
    <div class="characteristics">
        <div class="title">Характеристики</div>
        <div class="list">

            <div class="list-item">
                <div class="item-title">Диапазон входа</div>
                <div class="item-data">1-45 мм</div>
            </div>

            <div class="list-item">
                <div class="item-title">Размеры изделия</div>
                <div class="item-data">63х37х48 см</div>
            </div>

            <div class="list-item">
                <div class="item-title">Вес изделия</div>
                <div class="item-data">77 кг</div>
            </div>

            <div class="list-item">
                <div class="item-title">Среднее производство </div>
                <div class="item-data">Свыше 500 кг</div>
            </div>

            <div class="list-item">
                <div class="item-title">Мощность двигателя </div>
                <div class="item-data">1,5 кВт</div>
            </div>

            <div class="list-item">
                <div class="item-title">Напряжение </div>
                <div class="item-data">220 Вольт</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.characteristics {
    margin: 60px 0px;
    width: 100%;
}

.title {
    margin-bottom: 24px;

    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.24px;
    color: var(--text-dark);
}

.list-item {
    display: flex;

    padding: 20px 0px;
    box-sizing: border-box;
    border-bottom: 1px solid var(--dived-hover);

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: var(--text-dark);
}

.item-title {
    margin-right: 16px;
    width: calc(45% - 16px);
}

.item-data {
    width: 55%;
}

@media (max-width: 768px) {
    .title {
        line-height: 24px;
        font-size: 18px;
    }
    .item-title {
        margin-right: 12px;
        width: auto;
    }
    .list-item {
        justify-content: space-between;
        font-size: 14px;
        line-height: 16px;
    }
    .item-data {
        text-align: end;
        width: auto;
    }
}
</style>
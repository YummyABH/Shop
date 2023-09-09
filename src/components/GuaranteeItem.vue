<script>

export default {
    data() {
        return {
        }
    },
    name: 'GuaranteeItem',
    components: {
    },
}
</script>
    
<template>
    <div class="Delivery">
        <div class="title">Гарантия</div>
        <div class="flex-wrapper">
            <div class="flex-item">
                <div class="flex-title">Условия и срок , при которых осуществляется гарантийное обслуживания товара</div>
                <div class="text">При покупке товара с нашего сайта предоставляется гарантия сроком, как правило, до 1 года
                    (со дня приобретения товара). Основанием для предоставления гарантийного обслуживания служит гарантийный
                    талон или товарная накладная, который покупатель получает при приобретении товара и в которой прописан
                    срок гарантии в определенной строке. На протяжении всего периода эксплуатации наше представительство
                    предоставляет техническую поддержку поставляемого оборудования, так же у нас вы можете приобрести
                    комплектующие и запасные части к оборудованию.</div>
            </div>

            <div class="flex-item">
                <div class="flex-title">Гарантийный ремонт не предоставляется в следующих случаях:</div>
                <div class="text">
                    <div class="text-item">– в товаре есть механические, термические или электрические поломки (сюда
                        относятся и скрытые);</div>
                    <div class="text-item">– когда в товаре имеются какие –либо повреждения по причине неаккуратного
                        обращения пользователя;</div>
                    <div class="text-item">– в изделии есть признаки попадания внутрь веществ, каких-то предметов или
                        жидкостей;</div>
                    <div class="text-item">– техника вышла из строя из-за применения несовместимых комплектующих,
                        неподходящих расходных материалов;</div>
                    <div class="text-item">– на товаре есть повреждения, которые были вызваны стихийным бедствием, пожаром
                        или какими-то бытовыми факторами;</div>
                    <div class="text-item">– товар был поврежден при перевозке, хранении или нарушались правила его
                        эксплуатации;</div>
                    <div class="text-item">– если есть элементы с признаками перегрева;</div>
                    <div class="text-item">– есть признаки того, что сделано вмешательство в строение устройства.</div>
                </div>
            </div>

            <div class="flex-item">
                <div class="flex-title">Обмен товара</div>
                <div class="text">При обнаружении недостатков заводского характера, обмен товара возможен на протяжении
                    четырнадцати дней (без учета дня приобретения товара). Продавец обязан осуществить замену товара в
                    течение семи дней с момента обращения покупателя.</div>
            </div>

            <div class="flex-item">
                <div class="flex-title">Обмен продукции возможен в следующих случаях:</div>
                <div class="text">
                    <div class="text-item">– товар не использовался;</div>
                    <div class="text-item">– товар имеет надлежащий товарный вид;</div>
                    <div class="text-item">– не повреждены его первоначальные качества;</div>
                    <div class="text-item">– на своих местах находятся фабричные ярлыки, а также – все пломбы на – своих местах и не нарушены;</div>
                    <div class="text-item">– покупатель имеет при себе товарный чек или накладную.</div>
                </div>
            </div>
        </div>
    </div>
</template>
  
  
<style scoped>
.Delivery {
    max-width: 592px;
    margin: 60px 0px 120px 0px;
}

.title {
    margin-bottom: 60px;

    color: var(--text-dark);
    font-size: 40px;
    line-height: 48px;
}

.flex-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 60px;
}

.flex-item {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
}

.flex-title {
    color: var(--text-dark);
    font-feature-settings: 'liga' off;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.24px;
}

.text {
    color: var(--text-dark);
    font-size: 16px;
    line-height: 20px;
}

.text-item {
    margin-bottom: 20px;

    color: var(--text-dark);
    font-size: 16px;
    line-height: 20px;
}

.text-item:last-child {
    margin-bottom: 0px;
}

@media (max-width: 1280px) {
    .flex-wrapper {
        row-gap: 40px
    }

    .title {
        margin-bottom: 40px;
    }

    .Delivery {
        margin-bottom: 100px;
    }
}

@media (max-width: 1024px) {
    .Delivery {
        max-width: 461px;
    }
}

@media (max-width: 768px) {
    .flex-wrapper {
        row-gap: 32px
    }

    .Delivery {
        margin-top: 40px;
    }

    .title {
        margin-bottom: 32px;
        line-height: 28px;
        font-size: 24px;
    }

    .flex-item {
        gap: 12px;
    }

    .flex-title {
        font-size: 18px;
        line-height: 24px;
    }

    .text {
        font-size: 14px;
        line-height: 16px;
    }
}</style>
<script>

export default {
    data() {
        return {
        }
    },
    name: 'Delivery',
    components: {
    },
}
</script>
    
<template>
    <div class="Delivery">
        <div class="title">Доставка и оплата</div>
        <div class="flex-wrapper">
            <div class="flex-item">
                <div class="flex-title">Доставка и оплата</div>
                <div class="text">На странице с нашими контактами указан адрес склада. Перед покупкой вы можете
                    испытать каждый станок на складе, взяв с собой образцы кабеля, которые вы бы хотели разделывать.</div>
            </div>

            <div class="flex-item">
                <div class="flex-title">Доставка</div>
                <div class="text">
                    <span class="delivery-subtitle">Доступны следующие способы доставки:</span>
                    <div class="text-item">- Транспортной компанией По всей России (оплата при получении)</div>
                    <div class="text-item">– Почтовыми отправлениями (до 10кг) По всей России (оплата при получении)</div>
                    <div class="text-item">– Самовывоз со склада</div>
                    <div class="text-item">– Курьером по Москве и МО</div>
                </div>
            </div>

            <div class="flex-item">
                <div class="flex-title">Оплата</div>
                <div class="text">
                    <div class="text-item">Оплата возможна следующими способами:</div>
                    <div class="text-item">– Наложенным платежом, т.е. вы оплачиваете при получении (если груз был отправлен
                        Транспортной компанией или Почтой России)</div>
                    <div class="text-item">– Наличными при самовывозе и доставке в пределах Москвы и Области</div>
                    <div class="text-item">– Банковским переводом* (для юр. лиц)</div>
                    <div class="payment-subtitle">* После выставления счета и подтверждения нашими менеджерами его оплаты,
                        вы получаете товар любым вышеперечисленным способом со всеми сопроводительными документами.</div>
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

.delivery-subtitle {
    display: inline-block;
    margin-bottom: 20px;

    color: var(--text-dark);
    font-size: 16px;
    line-height: 20px;
}

.text-item {
    color: var(--text-dark);
    font-size: 16px;
    line-height: 20px;
}

.payment-subtitle {
    display: inline-block;
    margin-top: 20px;

    color: var(--text-dark);
    font-size: 16px;
    line-height: 20px;
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
    .delivery-subtitle {
        margin-bottom: 10px;
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
}
</style>
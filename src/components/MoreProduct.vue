<script>
export default {
    data() {
        return {
        }
    },
    name: 'MoreProduct',
    components: {
    },
}
</script>
    
<template>
    <div class="MoreProduct">

        <div class="title">С этим товаром также смотрят</div>
        <div class="product__wrapper">
            <div class="product__list">
                <div class="product__item">
                    <router-link to="/ProductPage">
                        <div class="product__preview"></div>
                    </router-link>
                    <div class="item__info">
                        <div class="item__properties">

                            <router-link to="/ProductPage">
                                <div class="item__title">S2-3 Автоматический мини</div>
                            </router-link>

                            <div class="properties__data">
                                <div class="data-name">Вес</div>
                                <div class="data-value">13 кг</div>
                            </div>

                            <div class="properties__data">
                                <div class="data-name">Двигатель</div>
                                <div class="data-value">180 Вт</div>
                            </div>

                            <div class="properties__data">
                                <div class="data-name">Диам. обраб.</div>
                                <div class="data-value">от 1,5 до 25мм</div>
                            </div>

                        </div>

                        <div class="item__price">
                            <div class="price-item">34 990 ₽</div>
                            <router-link to="/ProductPage">
                                <div class="price-button">Купить</div>
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="product__item">
                    <router-link to="/ProductPage">
                        <div class="product__preview"></div>
                    </router-link>
                    <div class="item__info">
                        <div class="item__properties">

                            <router-link to="/ProductPage">
                                <div class="item__title">SG-006-1 Станок для разделки кабеля (Автоматический)</div>
                            </router-link>

                            <div class="properties__data">
                                <div class="data-name">Вес</div>
                                <div class="data-value">13 кг</div>
                            </div>

                            <div class="properties__data">
                                <div class="data-name">Двигатель</div>
                                <div class="data-value">180 Вт</div>
                            </div>

                            <div class="properties__data">
                                <div class="data-name">Диам. обраб.</div>
                                <div class="data-value">от 1,5 до 25мм</div>
                            </div>

                        </div>
                        <div class="item__price">
                            <div class="price-item">34 990 ₽</div>
                            <router-link to="/ProductPage">
                                <div class="price-button">Купить</div>
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="product__item">
                    <router-link to="/ProductPage">
                        <div class="product__preview"></div>
                    </router-link>
                    <div class="item__info">
                        <div class="item__properties">
                            <router-link to="/ProductPage">
                                <div class="item__title">SG-006-1 Станок для разделки кабеля (Автоматический)</div>
                            </router-link>

                            <div class="properties__data">
                                <div class="data-name">Вес</div>
                                <div class="data-value">13 кг</div>
                            </div>

                            <div class="properties__data">
                                <div class="data-name">Двигатель</div>
                                <div class="data-value">180 Вт</div>
                            </div>

                            <div class="properties__data">
                                <div class="data-name">Диам. обраб.</div>
                                <div class="data-value">от 1,5 до 25мм</div>
                            </div>

                        </div>
                        <div class="item__price">
                            <div class="price-item">34 990 ₽</div>
                            <router-link to="/ProductPage">
                                <div class="price-button">Купить</div>
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="product__item">
                    <router-link to="/ProductPage">
                        <div class="product__preview"></div>
                    </router-link>
                    <div class="item__info">
                        <div class="item__properties">
                            <router-link to="/ProductPage">
                                <div class="item__title">S2-3 Автоматический мини</div>
                            </router-link>

                            <div class="properties__data">
                                <div class="data-name">Вес</div>
                                <div class="data-value">13 кг</div>
                            </div>

                            <div class="properties__data">
                                <div class="data-name">Двигатель</div>
                                <div class="data-value">180 Вт</div>
                            </div>

                            <div class="properties__data">
                                <div class="data-name">Диам. обраб.</div>
                                <div class="data-value">от 1,5 до 25мм</div>
                            </div>

                        </div>
                        <div class="item__price">
                            <div class="price-item">34 990 ₽</div>
                            <router-link to="/ProductPage">
                                <div class="price-button">Купить</div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
  
  
<style scoped>
.title {
    margin-bottom: 24px;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.24px;
}
.MoreProduct {
    margin: 60px 0px;
}

.product__wrapper {
    align-items: center;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.product__list {
    width: 100%;
    display: grid;
    grid-template: repeat(1, 1fr) / repeat(4, 1fr);
    row-gap: 15px;
    column-gap: 16px;
}

.product__item {
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    background-color: var(--back-hover);
    padding: 8px 8px 0px 8px;
}

.product__preview {
    width: 100%;
    height: 200px;
    border-radius: 12px;

    background: url(../assets/AllProducts/prodPreview.png) no-repeat center;
    background-color: var(--back-light);
}

.item__info {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    margin: 20px;
}

.item__properties {
    margin-bottom: 32px;
}

.item__title {
    margin-bottom: 8px;
    color: var(--text-dark);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}

.properties__data {
    align-items: end;
    padding: 8px 0px;
    border-bottom: 1px solid var(--dived-hover);
    display: flex;
    justify-content: space-between;
    gap: 8px;
}

.data-name {
    max-width: 40%;

    color: var(--text-hover);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
}

.data-value {
    text-align: end;
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
}

.item__price {
    margin-top: 32px;
}

.price-item {
    color: var(--text-dark);

    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.6px;
}

.price-button {
    text-align: center;
    padding: 12px 20px;
    border-radius: 8px;
    margin-top: 20px;

    background-color: var(--back-button);
    color: var(--text-light);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}

/*-----------------------------------MEDIA ЗАПРОСЫ---------*/

@media (max-width: 1280px) {
    .product__list {
        grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    }
}

@media (max-width: 1024px) {}

@media (max-width: 768px) {
    .title {
        font-size: 24px;
        line-height: 28px;
    }

    .product__list {
        grid-template: repeat(4, 1fr) / repeat(1, 1fr);
    }

    .item__info {
        margin: 12px;
    }
}
</style>
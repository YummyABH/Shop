<script>

export default {
    data() {
        return {
        }
    },
    props: {
        title: String,
    },
    name: 'AllProducts',
    components: {
    },
}
</script>
    
<template>
    <div class="AllProducts">

        <header class="header">
            <h1 class="title">Вся продукция</h1>
            <div class="res">126 товара</div>
        </header>

        <div class="filter-button">
            <div class="filter-active">Фильтры</div>
            <div class="filter-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_3674_1165)">
                        <path d="M21 4V6H20L15 13.5V22H9V13.5L4 6H3V4H21ZM6.404 6L11 12.894V20H13V12.894L17.596 6H6.404Z"
                            fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_3674_1165">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>

        <div class="product">

            <aside class="filter">
                <div class="filter__item _icon _active"><span>Вся продукция</span>
                    <svg class="products-icon" width="18" height="18" viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg">
                        <path id="Product" d="M1 1H7V7H1V1ZM1 11H7V17H1V11ZM11 1H17V7H11V1ZM11 11H17V17H11V11Z"
                            stroke="white" stroke-width="2" />
                    </svg>
                </div>
                <div class="filter__item _icon"><span>Скидки</span>
                    <svg class="products-icon" width="18" height="18" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <g id="Sale" clip-path="url(#clip0_3649_2768)">
                            <path id="Sale"
                                d="M17.5 21C16.5717 21 15.6815 20.6313 15.0251 19.9749C14.3687 19.3185 14 18.4283 14 17.5C14 16.5717 14.3687 15.6815 15.0251 15.0251C15.6815 14.3687 16.5717 14 17.5 14C18.4283 14 19.3185 14.3687 19.9749 15.0251C20.6313 15.6815 21 16.5717 21 17.5C21 18.4283 20.6313 19.3185 19.9749 19.9749C19.3185 20.6313 18.4283 21 17.5 21ZM17.5 19C17.8978 19 18.2794 18.842 18.5607 18.5607C18.842 18.2794 19 17.8978 19 17.5C19 17.1022 18.842 16.7206 18.5607 16.4393C18.2794 16.158 17.8978 16 17.5 16C17.1022 16 16.7206 16.158 16.4393 16.4393C16.158 16.7206 16 17.1022 16 17.5C16 17.8978 16.158 18.2794 16.4393 18.5607C16.7206 18.842 17.1022 19 17.5 19ZM6.5 10C6.04037 10 5.58525 9.90947 5.16061 9.73358C4.73597 9.55769 4.35013 9.29988 4.02513 8.97487C3.70012 8.64987 3.44231 8.26403 3.26642 7.83939C3.09053 7.41475 3 6.95963 3 6.5C3 6.04037 3.09053 5.58525 3.26642 5.16061C3.44231 4.73597 3.70012 4.35013 4.02513 4.02513C4.35013 3.70012 4.73597 3.44231 5.16061 3.26642C5.58525 3.09053 6.04037 3 6.5 3C7.42826 3 8.3185 3.36875 8.97487 4.02513C9.63125 4.6815 10 5.57174 10 6.5C10 7.42826 9.63125 8.3185 8.97487 8.97487C8.3185 9.63125 7.42826 10 6.5 10ZM6.5 8C6.89782 8 7.27936 7.84196 7.56066 7.56066C7.84196 7.27936 8 6.89782 8 6.5C8 6.10218 7.84196 5.72064 7.56066 5.43934C7.27936 5.15804 6.89782 5 6.5 5C6.10218 5 5.72064 5.15804 5.43934 5.43934C5.15804 5.72064 5 6.10218 5 6.5C5 6.89782 5.15804 7.27936 5.43934 7.56066C5.72064 7.84196 6.10218 8 6.5 8ZM19.071 3.515L20.485 4.929L4.93 20.485L3.516 19.071L19.07 3.515H19.071Z" />
                        </g>
                    </svg>
                </div>
                <div class="filter__item">Станки для разделки кабеля</div>
                <div class="filter__item">Сепараторы / Дробилки для кабеля</div>
                <div class="filter__item">Запасные части</div>
                <div class="filter__item">Станки для разделки теплообменников</div>
                <div class="filter__item">Разделка радиаторов</div>
                <div class="filter__item">Другое</div>
            </aside>

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
                </div>
                <div class="product__add">Показать ещё</div>
            </div>
        </div>
    </div>
</template>
  
  
<style scoped>
.AllProducts {
    width: 100%;
    margin: 60px 0px 40px 0px;
}

.header {
    margin: 40px 0px;
    align-items: end;
    display: flex;
    gap: 24px;
}

.title {
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px;
}

.res {
    font-size: 16px;
    font-weight: 400;
    line-height: 125%;
    margin-bottom: 5px;
}

.product {
    gap: 40px;
    display: flex;
    justify-content: space-between;
}

.filter {
    width: 276px;
    display: flex;
    flex-direction: column;
    row-gap: 8px
}

.filter__item {
    stroke: var(--text-dark);
    fill: var(--text-dark);

    padding: 12px;
    border-radius: 8px;
    color: var(--text-dark);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}

.filter__item._active {
    stroke: var(--text-light);
    fill: var(--text-light);

    background-color: var(--dived-dafault);
    color: var(--text-light);
}

.filter__item._icon {
    display: flex;
    justify-content: space-between;
}

#Product {
    stroke: inherit;
    fill-opacity: 0%;
}

#Sale {
    fill-opacity: 100%;
    fill: inherit;
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
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
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

.product__add {
    margin-top: 40px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    width: 111px;
    align-items: center;

    border-radius: 8px;
    background-color: var(--back-hover);
    padding: 12px 20px;
    display: inline-block;
}



.filter-button {
    margin: 32px 0px;

    color: var(--text-light);
    display: none;
    width: 98px;
    gap: 4px;
    padding: 10px 14px 10px 20px;
    background-color: var(--back-button);
    border-radius: 8px;
}

.filter-active {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}

.filter-icon {
    display: flex;
    align-items: center;
}

/*-----------------------------------MEDIA ЗАПРОСЫ---------*/

@media (max-width: 1280px) {
    .product__list {
        grid-template: repeat(4, 1fr) / repeat(2, 1fr);
    }

    .product__add {
        text-align: center;
        display: inline-block;
        width: 100%;
        padding-left: 0px;
        padding-right: 0px;
    }
}

@media (max-width: 1024px) {
    .filter-button {
        display: flex;
    }

    .filter {
        display: none;
    }
}

@media (max-width: 768px) {
    .title {
        font-size: 24px;
        line-height: 28px;
    }

    .res {
        font-size: 14px;
        line-height: 16px;
    }

    .product__list {
        grid-template: repeat(6, 1fr) / repeat(1, 1fr);
    }

    .item__info {
        margin: 12px;
    }
}
</style>
  
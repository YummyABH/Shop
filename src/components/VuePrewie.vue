<script>

export default (await import('vue')).defineComponent({
    data() {
        return {
            count: 0
        }
    },
    name: 'VuePrewie',
    components: {
    }
})
</script>

<template>
    <div class="VuePrewie">
        <div class="wrapper">
            <div class="card">
                <div class="card__wrapper">
                    <div class="card__container">
                        <!-- Info -->
                        <div class="info">
                            <h1 class="title">Новый зверь для всех типов кабелей</h1>
                            <div class="info__wrapper">
                                <div class="info__item">
                                    <div class="info__title">Диаметр обработки</div>
                                    <div class="info__data">от 1,5 до 130мм </div>
                                </div>
                                <div class="info__item">
                                    <div class="info__title">Размеры</div>
                                    <div class="info__data">90*68*120 см</div>
                                </div>
                                <div class="info__item">
                                    <div class="info__title">Мощность</div>
                                    <div class="info__data">3 кВт 380 В</div>
                                </div>
                            </div>

                            <div class="info__price">209 000 ₽</div>
                        </div>

                        <!-- View-->
                        <div class="view">
                        </div>

                    </div>

                    <div class="control">
                        <a href="#" class="button-more">Подробнее</a>

                        <div class="control__arrow">
                            <div class="arrow">
                                <div class="arrow-left"></div>
                            </div>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.VuePrewie {
    display: flex;
    width: 100%;
}

.wrapper {
    width: 1200px;
    padding: 0px 40px;
    margin: 0 auto;
}

.card {
    width: 100%;
    height: 560px;
    background: var(--back-button);
    border-radius: 16px;
    padding: 0px;
}

.card__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 56px);
    padding: 16px 16px 40px 40px;
}

.card__container {
    width: 100%;
    display: flex;
    flex: 1 1 auto;
    margin-bottom: 40px;
    justify-content: space-between;
}

.info {
    display: flex;
    flex-direction: column;
    max-width: 552px;
    min-height: 100%;
}

.title {
    margin: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: var(--text-light);
    margin-bottom: 20px;
}

.info__wrapper {
    width: 450px;
}

.info__item {
    padding: 12px 0px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #36383C;
}

.info__title {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: var(--text-active);
}

.info__data {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: var(--text-active);
}

.info__price {
    padding-bottom: 32px;
    border-bottom: 1px solid var(--dived-dafault);
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    justify-content: end;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.01em;
    font-feature-settings: 'liga' off;
    color: var(--text-light);
}

.view {
    display: flex;
    background: var(--text-light);
    border-radius: 12px;
    height: calc(100% - 48px);
    width: 54.1%;
    height: 100%;

    background-repeat: no-repeat;
    background-position: center;
    background-image: url(../assets/Prewie/machine.jpg);
    background-size: 91.6% auto;
}

.control {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.button-more {
    font-size: 16px;
    line-height: 20px;
    padding: 12px 20px;
    background: var(--text-light);
    border-radius: 8px;

    color: var(--text-dark);
}

.control__arrow {
    margin-right: 39px;
    display: flex;
    gap: 8px;
}

.arrow {
    width: 44px;
    height: 44px;
    background: var(--text-light);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.arrow-left {
    width: 6.37px;
    height: 6.37px;
    border-top: 2px solid var(--text-dark);
    border-right: 2px solid var(--text-dark);
    transform: rotate(-135deg);
}

.arrow-right {
    width: 6.37px;
    height: 6.37px;
    border-top: 2px solid var(--text-dark);
    border-right: 2px solid var(--text-dark);
    transform: rotate(45deg);
}

/*--------------@media запросы*/

/*--------------1024px--------*/
@media (max-width: 1024px) {
    .card__container {
        border-bottom: 1px solid var(--dived-dafault);
    }

    .view {
        flex: 1 1 auto;
        width: 34%;
        height: 92%;
    }

    .view__item {
        width: 95%;
    }
    .info__price {
        border-bottom: none;
    }
}

/*--------------900px--------*/
@media (max-width: 900px) {
    .wrapper {
        padding: 0px 72px;
    }

    .card {
        height: 916px;
    }

    .card__wrapper {
        padding: 16px 16px 28px 16px;
        max-height: 872px;
    }

    .card__container {
        justify-content: space-between;
        margin: 0;

        max-height: 800px;
        gap: 36px;
        flex-direction: column-reverse;
        border: none;
    }

    .view {
        flex: none;
        height: 380px;
        width: 100%;
        background-size: auto calc(100% - 48px);
    }

    .info {
        width: 100%;
        min-height: 352px;

    }

    .info__item:first-child {
        padding-top: 0px;
    }

    .info__price {
        flex: 1 1 auto;
        border-bottom: 1px solid var(--dived-dafault);
    }
}

/*--------------660px--------*/
@media (max-width: 660px) {
    .wrapper {
        padding: 0px 18px;
    }
}

/*--------------540px--------*/
@media (max-width: 540px) {
    .view {
        background-size: calc(100% - 24px) auto ;
    }
    .card {
        height: auto;
    }
    .wrapper {
        max-width: calc(100% - 36px);
    }
    .card__container {
        gap: 12px;
    }
    .control {
        margin-top: 12px;
    }
    .info__wrapper {
        max-width: calc(100% - 24px);
    }

    .info__item {
        font-size: 12px;
        line-height: 16px;
    }
    .info__price {
        font-size: 12px;
        line-height: 16px;
    }

    .title {
        font-size: 24px;
        line-height: 28px;
    }
}

/*--------------430px--------*/
@media (max-width: 430px) {
    .view {
        height: 250px;
    }
}

/*--------------355px--------*/
@media (max-width: 355px) {
    .view {
        background-size: auto calc(100% - 15px);
        height: 170px;
    }
    .control__arrow {
        margin-right: 0px;
    }

    .button-more {
        padding: 10px 13px;
        font-size: 13px;
    }

    .info__price {
        padding-bottom: 10px;
    }
}
</style>
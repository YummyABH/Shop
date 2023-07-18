<script>
import Logo from './Logo.vue'

export default (await import('vue')).defineComponent({
    data() {
        return {
            count: 0
        }
    },
    name: 'VueFooter',
    components: {
        Logo,
    }
})
</script>

<template>
    <div class="VueFooter">
        <div class="wrapper">

            <!--------------Footer-->
            <footer class="footer">
                <div class="footer-top">
                    <Logo />
                </div>
                <div class="main">
                    <div class="main-item">
                        <div class="address">
                            <div class="address-title">Тураевское шоссе дом 17, д. Островцы, Раменский район, МО, Россия
                            </div>
                            <div class="address-tel">+7 (800) 707-31-01</div>
                            <div class="address-email">okoprom@gmail.com</div>
                            <div class="contacts">
                                <div class="contacts-item">Whatsapp</div>
                                <div class="contacts-item">Telegram</div>
                            </div>
                            <div class="networks">
                                <div class="networks-wrapper">
                                    <div class="networks-item _1"></div>
                                    <div class="networks-item _2"></div>
                                </div>
                                <div class="networks-title">Подписывайтесь на нас в социальных сетях</div>
                            </div>
                        </div>
                    </div>
                    <div class="main-item">
                        <div class="products">
                            <h3 class="products-title">Наша продукция</h3>
                            <div class="products-item">Станки для разделки кабеля</div>
                            <div class="products-item">Сепараторы</div>
                            <div class="products-item">Станок для разделки теплообменников</div>
                            <div class="products-item">Разделка радиаторов</div>
                            <div class="products-item">Запасные части</div>
                            <div class="products-item">Другое</div>
                        </div>
                        <div class="info">
                            <h3 class="info-title">Информация</h3>
                            <div class="info-item">Доставка и оплата</div>
                            <div class="info-item">Гарантия</div>
                            <div class="info-item">Служба контроля качества</div>
                            <div class="info-item">Наше производство</div>
                            <div class="info-item">О компании</div>
                            <div class="info-item">Контакты</div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="license">Интернет магазин "Окопром" © 2021 Все права защищены</div>
                    <div class="policy">Политика конфиденциальности</div>
                </div>
            </footer>
        </div>
    </div>
</template>

<style scoped>
.VueFooter {
    background: var(--back-hover, #F4F5F8);
    width: 100%;
    margin-bottom: 0px;
}

.wrapper {
    max-width: 1200px;
    padding: 0px 40px;
    margin: 0 auto;
}

.footer {
    padding: 24px 40px;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
}

.footer-top {
    height: 77px;
    border-bottom: 1px solid var(--dived-hover, #E9E9E9);
}

.main {
    margin: 40px 0px;
    display: flex;
    justify-content: space-between;
}

.main-item {
    gap: 16px;
    display: flex;
    flex-wrap: wrap;
}

.address {
    display: flex;
    flex-direction: column;
    width: 389px;
    height: 342px;
}

.address-title {
    color: var(--text-dark, #161616);
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.24px;
    margin-bottom: 24px;
}

.address-tel {
    color: var(--text-dark, #161616);
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.24px;
    margin-bottom: 8px;
}

.address-email {
    color: var(--text-dark, #161616);
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.24px;
    margin-bottom: 24px;
}

.contacts {
    display: flex;
    gap: 9px;
}

.contacts-item {
    padding: 12px 20px;
    color: var(--text-light, #FFF);
    font-size: 16px;
    line-height: 20px;
    border-radius: 8px;
    background: var(--back-button, #202226);

}

.networks {
    display: flex;
    flex: 1 1 auto;
    align-items: end;
    gap: 24px;
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

.networks-title {
    width: 193px;
}

.products {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.products-title {
    margin: 0px;
    margin-bottom: 32px;
    color: var(--text-dark, #161616);
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.6px;
}

.products-item {
    color: var(--text-dark, #161616);
    font-size: 16px;
    font-family: Golos;
    line-height: 20px;
}

.info {
    display: flex;
    flex-direction: column;
    gap: 12px;
    color: var(--text-dark, #161616);
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.6px;
}

.info-title {
    margin: 0px;
    margin-bottom: 32px;
}

.info-item {
    color: var(--text-dark, #161616);
    font-size: 16px;
    font-family: Golos;
    line-height: 20px;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    
    padding-top: 24px;
    border-top: 1px solid var(--dived-hover, #E9E9E9);
}
/*--------------@media запросы*/

/*--------------1262px--------*/
@media (max-width: 1278px) {}

/*--------------1024px--------*/
@media (max-width: 1024px) {}

/*--------------900px--------*/
@media (max-width: 900px) {

    .wrapper {
        padding: 72px;
    }
    .main {
        flex-wrap: wrap;
        gap: 62px;
    }
    .footer-bottom {
        flex-wrap: wrap;
        gap: 12px;
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
    .address-title {
        font-size: 18px;
line-height: 24px;
    }
    .address-email {
        font-size: 18px;
line-height: 24px;
    }

    .address-tel {
        font-size: 18px;
line-height: 24px;
    }

    .footer-top {
        height: 60px;
    }
    .address {
        height: 312px;
    }
}

/*--------------355px--------*/
@media (max-width: 355px) {}
</style>
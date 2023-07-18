<script>
import ClientLogo from './ClientLogo.vue'

export default (await import('vue')).defineComponent({
    data() {
        return {
        }
    },
    name: 'VueClients',
    components: {
        ClientLogo,
    }
})
</script>

<template>
    <div class="VueClients">
        <div class="wrapper">
            <div class="container">
                <div class="info">
                    <h1 class="info-title">Почему именно мы?</h1>
                    <div class="info-text">
                        <span class="info-text-top">
                            За долгое время работы в этой области у нас более одной тысячи клиентов в базе в
                            том числе и представленные выше. В основном это компании по переработке вторсырья.
                        </span>
                        <span class="info-text-bottom">
                            Мы уже прошли тот
                            путь который вам предстоит пройти после приобретения нашей продукции и лучше подскажем: что вам
                            лучше подойдет, чего надо избегать и как более эффективно использовать то что есть.
                        </span>
                    </div>
                </div>

                <div class="flex-container">
                    <ClientLogo urlLogo="/src/assets/Clients/logo.png"/>
                    <ClientLogo urlLogo="/src/assets/Clients/Group1.png"/>
                    <ClientLogo urlLogo="/src/assets/Clients/firm.png"/>
                    <ClientLogo urlLogo="/src/assets/Clients/Group2.png"/>
                    <ClientLogo urlLogo="/src/assets/Clients/Group3.png"/>
                    <ClientLogo urlLogo="/src/assets/Clients/fr.png"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.VueClients {
    width: 100%;
    margin: 120px 0px;
}

.wrapper {
    max-width: 1200px;
    padding: 0px 40px;
    margin: 0 auto;
}

.container {
    width: 100%;
    display: flex;
    gap: 16px;
    justify-content: space-between;
}

.info {
    border-radius: 16px;
    background: var(--back-hover, #F4F5F8);
    padding: 40px;
    width: calc(49.4% - 80px);
}

.info-title {
    margin: 0;
    margin-bottom: 102px;
    color: var(--text-dark, #161616);
    font-size: 40px;
    line-height: 48px;
}

.info-text {
    margin-top: 102px;
    color: var(--text-hover, #757575);
    font-size: 16px;
    line-height: 20px;
}

.info-text-top {
    display: block;
    margin-bottom: 20px;
}

.info-text-bottom {
    display: block;
    margin-top: 20px;
}

.flex-container {
    gap: 16px;
    min-width: 49.4%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

/*--------------@media запросы*/

/*--------------1024px--------*/
@media (max-width: 1024px) {

    .info {
        width: calc(100% - 80px);
    }

    .info-text {
        max-width: 544px;
        margin-top: 40px;
    }

    .info-title {
        max-width: 544px;
        margin-bottom: 40px;
    }

    .container {
        flex-direction: column;
    }
}

/*--------------900px--------*/
@media (max-width: 900px) {
    .VueClients {
        width: 100%;
        margin: 100px 0px;
    }
    .wrapper {
        padding: 0px 72px;
    }
}

/*--------------660px--------*/
@media (max-width: 660px) {
    .VueClients {
        width: 100%;
        margin: 60px 0px;
    }
    .wrapper {
        padding: 0px 18px;
    }
}

/*--------------540px--------*/
@media (max-width: 540px) {
    .container {
        gap: 8px;
    }

    .info {
        width: calc(100% - 24px);
        padding: 12px;
    }

    .info-text-top {
        margin-bottom: 10px;
    }

    .info-text-bottom {
        margin-top: 10px;
    }

    .info-title {
        margin-bottom: 12px;
        font-size: 24px;
        line-height: 28px;
    }

    .info-text {
        margin-top: 12px;
        font-size: 14px;
        line-height: 16px;
    }

    .flex-container {
        gap: 8px;
    }
}
</style>
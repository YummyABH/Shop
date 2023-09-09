<script>

export default {
    data() {
        return {
            count: 0
        }
    },
    name: 'VueFeedback',
    components: {
    }
}
</script>

<template>
    <div class="VueFeedback">
        <!--------------Feedback-->
        <div class="flex-container">
            <div class="flex-item _info">
                <h1 class="title">Будем рады ответить на все интересующие вопросы</h1>
                <div class="subtitle">Оставьте заявку и мы вам вскоре позвоним и проконсультируем по всем интересующим
                    вопросам</div>
            </div>
            <div class="flex-item">
                <form class="form" action="#" method="post">
                    <div class="data">
                        <input class="form-data _text" type="text" name="username" placeholder="Ваше имя">
                        <input class="form-data _tel" type="tel" name="tel" placeholder="+ 7 (___) __ __">
                        <input class="form-data _email" type="email" name="email" placeholder="E-mail (необязательно)">
                    </div>
                    <input class="form-submit" type="submit" value="Отправить">
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.VueFeedback {
    width: 100%;
    margin: 120px 0px;
}

.flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    padding: 60px 40px;
    border-radius: 20px;
    background: var(--back-button, #202226);
    gap: 16px;
}

.flex-item {
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-width: 46%;
}

._info {
    width: 451px;
}

.title {
    margin: 0px;
    color: var(--text-light, #FFF);
    font-size: 40px;
    line-height: 48px;
}

.subtitle {
    color: var(---text-active, #9F9F9F);
    font-size: 16px;
    line-height: 20px;
}

.data {
    margin-bottom: 44px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-data {
    height: 52px;
    align-items: center;
    color: var(---text-active, #9F9F9F);
    font-size: 16px;
    line-height: 20px;
    margin: 0px;
    padding: 0px;

    border: none;
    box-sizing: border-box;
    background: var(--back-button, #202226);
    outline: none;
    border-bottom: 2px solid var(--text-light, #fff);

}

.form-submit {
    align-items: end;
    text-align: start;
    padding: 12px 20px;
    background: var(--text-light, #FFF);
    border: none;
    border-radius: 8px;
}

/*--------------@media запросы*/

/*--------------1024px--------*/
@media (max-width: 1024px) {
    .flex-item {
        width: 100%;
    }
}

/*--------------900px--------*/
@media (max-width: 900px) {
    .VueFeedback {
        width: 100%;
        margin: 100px 0px;
    }

    .flex-container {
        padding: 36px;
        gap: 40px;
    }


}

/*--------------660px--------*/
@media (max-width: 660px) {
    .VueFeedback {
        width: 100%;
        margin: 60px 0px;
    }
}

/*--------------540px--------*/
@media (max-width: 540px) {
    .title {
        font-size: 24px;
        line-height: 28px;
    }

    .subtitle {
        font-size: 14px;
        line-height: 16px;
    }

    .form-data {
        font-size: 14px;
        line-height: 16px;
    }

    .form-submit {
        font-size: 14px;
        line-height: 16px;
    }


}

/*--------------355px--------*/
@media (max-width: 355px) {
    .flex-container {
        border-radius: 12px;
        padding: 12px;
        gap: 32px;
    }

    ._info {
        gap: 12px;
    }

    .data {
        gap: 8px;
        margin-bottom: 32px;
    }
}</style>
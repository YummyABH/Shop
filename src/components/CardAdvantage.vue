<script>
export default {
    data() {
        return {
        }
    },
    props: {
        infoTitle: String,
        infoText: String,
        urlIcon: String,
    },
    name: 'CardAdvantage',
    components: {
    }
}
</script>

<template>
    <div class="CardAdvantage">
        <!--------------Icon-->
        <div class="icon" :style="{
            backgroundImage: 'url(' + urlIcon + ')',
        }">
        </div>
        <!--------------Info-->
        <div class="info">
            <div class="info__title">{{ infoTitle }}</div>
            <div class="info__text">{{ infoText }}</div>
        </div>
    </div>
</template>

<style scoped>
.CardAdvantage {
    gap: 16px;
    display: flex;
    justify-content: space-between;
    max-width: 389px;
}

.icon {
    box-sizing: border-box;
    min-width: 60px;
    max-width: 60px;
    max-height: 60px;
    min-height: 60px;
    border-radius: 8px;
    border: 1px solid var(--dived-hover, #E9E9E9);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 40% 40%;
    
}

.info {
    max-width: 80.46%;
}

.info__title {
    margin-bottom: 8px;
    color: var(--text-dark, #161616);
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.6px;
}

.info__text {
    margin-top: 8px;
    color: var(--text-hover, #757575);
    font-size: 16px;
    line-height: 20px;
}

/*--------------@media запросы*/

/*--------------1262px--------*/
@media (max-width: 1278px) {
    .CardAdvantage {
        margin-bottom: 0px;
    }
}

/*--------------900px--------*/
@media (max-width: 900px) {
    .icon {
        background-size: auto;
    }
}

/*--------------660px--------*/
@media (max-width: 660px) {
    .CardAdvantage {
        gap: 12px;
        width: 100%;
    }
}

/*--------------540px--------*/
@media (max-width: 540px) {
    .icon {
        height: 44px;
        width: 44px;
    }

    .info__title {
        font-size: 24px;
        line-height: 28px;
    }

    .info__text {
        font-size: 14px;
        line-height: 16px;
    }
}
</style>
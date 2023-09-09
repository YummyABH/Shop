<script>

export default {
    data() {
        return {
        }
    },
    name: 'AboutCompany',
    components: {
    },
}
</script>
    
<template>
    <div class="AboutUs">
        <div class="title">О нас</div>
        <div class="text">Наша история начинается с 2015 года когда мы в первые занялись переработкой небольших объемов
            кабелей, которые у нас были накоплены со временем. В то время еще не былы так распространены станки для
            переработки кабеля и различные сепараторы. Мы начали с торговли такими аппаратами, параллельно организовав прием
            кабелей и различного вторсырья. Накопив большой опыт и знание проблем наших клиентов, большая часть которых так
            же занимались переработкой, и добавив ко всему этому наш личный опыт в этой сфере мы решили предложить некоторые
            свои решения этому рынку. В данный момент мы занимаемся производством оборудования для сепарации, автомобильных
            весов и периферии для линий.</div>
    </div>
</template>
  
  
<style scoped>
.AboutUs {
    max-width: 600px;

    color: var(--text-dark);
    margin-top: 60px;
    margin-bottom: 120px;
}

.title {
    margin-bottom: 40px;

    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px;
}

.text {
    margin-top: 40px;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}

@media (max-width: 1280px) {
    .AboutUs {
        margin-bottom: 100px;
    }
}

@media (max-width: 1024px) {
    .title {
        margin-bottom: 32px;
    }

    .text {
        margin-top: 32px;
    }

    .AboutUs {
        margin-top: 50px;
        max-width: 500px;
    }
}

@media (max-width: 768px) {
    .title {
        margin-bottom: 20px;

        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px;
    }

    .text {
        margin-top: 20px;

        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
    }

    .AboutUs {
        margin-top: 40px;
        margin-bottom: 60px;
        max-width: 100%;
    }
}
</style>
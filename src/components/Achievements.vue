<script>

export default {
    data() {
        return {
        }
    },
    name: 'Achievements',
    components: {
    },
}
</script>
    
<template>
    <div class="Achievements">
        <div class="grid-wrapper">
            <div class="grid-item">
                <div class="subtitle">Клиентов</div>
                <div class="title">1200+</div>
                <div class="text">За время работы в этой области у нас более одной тысячи клиентов в базе в том числе
                    и представленные ниже</div>
            </div>

            <div class="grid-item">
                <div class="subtitle">Лет в области</div>
                <div class="title">6</div>
                <div class="text">Что дает контакты и прямое общение с предпринимателями, выявление прямых потребностей.
                </div>
            </div>

            <div class="grid-item">
                <div class="subtitle">Пробуем новое</div>
                <div class="title">24/7</div>
                <div class="text">Всегда ищем новые решения, которые будут полезны нашим клиентам</div>
            </div>
        </div>
    </div>
</template>
  
  
<style scoped>
.Achievements {
    padding-top: 40px;
    margin: 120px 0px;

    box-sizing: border-box;
    border-top: 1px solid var(--dived-hover);
}

.grid-wrapper {
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(3, 1fr)
}

.subtitle {
    margin-bottom: 20px;

    color: var(--text-hover);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}

.title {
    margin-bottom: 12px;

    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px;
}

.text {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}

@media (max-width: 1280px) {
    .Achievements {
        margin: 100px 0px;
    }
    .grid-wrapper {
        gap: 40px;
    }
}

@media (max-width: 1024px) {
    .grid-wrapper {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .Achievements {
        padding-top: 24px;
        margin: 60px 0px;
    }
    .grid-wrapper { 
        gap: 24px;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }
    .subtitle {
        margin-bottom: 12px;

        font-size: 14px;
        line-height: 16px;
    }

    .title {
        margin-bottom: 4px;

        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px;
    }

    .text {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
    }
}
</style>
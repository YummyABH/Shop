<script>
export default {
    data() {
        return {
        }
    },
    props: {
        title: String,
        urlImg: String,
    },
    name: 'CardTool',
    components: {
    },
}
</script>

<template>
    <div class="CardTool">
        <div class="item-title">{{ title }}</div>
        <slot></slot>
    </div>
</template>

<style scoped>
.CardTool {
    width: 32%;
    padding: 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 16px;
    background: var(--back-hover, #F4F5F8);
}

.item-title {
    width: 100%;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.24px;
    color: var(--text-dark, #161616);
}

.item-img {
    margin-top: 12px;
    width: 100%;
    height: 240px;
    background-position: center;
    background-color: #ffff;
    background-size: 100% auto;
    background-repeat: no-repeat;
    border-radius: 12px;
}

@media (max-width: 900px) {
    .CardTool {
        width: calc(50% - 8px);
    }
}

@media (max-width: 660px) {
    .CardTool {
        width: 100%;
    }

    .item-img {
        background-size: auto calc(100% - 10px);
    }
}

@media (max-width: 355px) {
    .flex-item {
        padding: 12px;
    }

    .item-title {
        font-size: 14px;
        line-height: 16px;
    }

    .item-img {
        background-size: auto auto;
    }
}
</style>
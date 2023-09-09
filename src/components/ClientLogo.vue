<script>
export default {
    data() {
        return {
        }
    },
    props: {
        urlLogo: String,
    },
    name: 'ClientLogo',
    components: {
    }
}
</script>

<template>
    <div class="ClientLogo" :style="{
            backgroundImage: 'url(' + urlLogo + ')',
        }"></div>
</template>

<style scoped>
.ClientLogo {
    min-width: calc(33.3% - 11px);
    height: 187px;
    border-radius: 14.886px;
    background: var(--back-hover, #F4F5F8);
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto auto;
}

@media (max-width: 660px) {
    .ClientLogo {
        width: calc(50% - 11px);
    }
}

@media (max-width: 540px) {
    .ClientLogo {
        width: calc(50% - 4px);
    }
}

@media (max-width: 430px) {
    .ClientLogo {
        background-size: auto 50%;
        height: 82px;
        width: calc(33.3% - 6px);
    }
}
</style>
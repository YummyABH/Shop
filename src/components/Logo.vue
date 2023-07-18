<script>

export default (await import('vue')).defineComponent({
    data() {
        return {
            count: 0
        }
    },
    name: 'Logo',
    components: {
    }
})
</script>

<template>
    <router-link to="/">
        <img class="Logo" src="../assets/header/Logo.png" />
    </router-link>
</template>

<style scoped>
.header__icon {
    width: 119px;
    height: 28px;
}


/*-----------------------------Media---------------------*/

@media (max-width: 1024px) {}

@media (max-width: 900px) {}

@media (max-width: 660px) {}
</style>

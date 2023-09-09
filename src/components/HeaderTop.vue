<script>
import Logo from './Logo.vue'

export default {
    data() {
        return {
            count: 0
        }
    },
    name: 'HeaderTop',
    components: {
        Logo,
    }
}
</script>

<template>
    <div class="HeaderTop">
        <div class="wrapper">
            <div class="header__top-wrapper">
                <Logo />
                <div class="header__top-list">
                    <div class="header__list-link">
                        <a href="#" class="header__link-item">okoprom@gmail.com</a>
                        <a href="#" class="header__link-item">+7 (800) 707-31-01</a>
                    </div>
                    <div class="header__list-functions">
                        <router-link to="/Payment" class="header__functions-item">Доставка и оплата</router-link>
                        <router-link to="/Guarantee" class="header__functions-item">Гарантия</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.HeaderTop {
    display: flex;
    justify-content: space-between;
    height: 52px;
    width: 100%;
    background: var(--back-hover);
}

.wrapper {
    width: 1200px;
    padding: 0px 40px;
    margin: 0 auto;
}

.header__top-wrapper {
    align-items: center;
    height: 100%;
    display: flex;
    justify-content: space-between;

}

.header__top-list {
    display: flex;
    gap: 80px;
}

.header__list-link {
    align-items: center;
    display: flex;
    gap: 32px;
}

.header__link-item {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: var(--text-hover);
}

.header__list-functions {
    align-items: center;
    display: flex;
    gap: 32px;
}

.header__functions-item {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: var(--text-hover);
}

/*-----------------------------Media---------------------*/

@media (max-width: 1280px) {}

@media (max-width: 1024px) {
    .HeaderTop {
        padding: 20px 0px;
    }
    .wrapper {
        padding: 0px 72px;
    }

    .header__top-list {
        gap: 70px;
    }

    .header__list-functions {
        gap: 12px;
        flex-direction: column;
        justify-content: center;
    }

    .header__list-link {
        justify-content: center;
        flex-direction: column;
        gap: 12px;
    }
}

@media (max-width: 768px) {
    .HeaderTop {
        padding: 12px 0px;
    }
    .wrapper {
        padding: 0px 18px;
    }

    .header__link-item {
        font-size: 12px;
    }

    .header__list-functions {
        display: none;
    }
}
</style>

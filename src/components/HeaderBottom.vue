<script>

export default {
    data() {
        return {
        }
    },
    name: 'HeaderBottom',
    components: {
    },
}
</script>
    
<template>
    <div class="HeaderBottom">
        <div class="grid-wrapper">

            <div class="links">
                <router-link to="/catalog" class="links-item">Каталог</router-link>
                <a href="#" class="links-item">Наше производство</a>
                <router-link to="/AboutCompany" class="links-item">О компании</router-link>
                <router-link to="/Contacts" class="links-item">Контакты</router-link>
            </div>

            <div class="icon">
                <a href="#" class="header__icon-link">
                    <img src="../assets/header/Search.png" alt="" class="header__icon-item" />
                </a>
                <a href="#" class="header__icon-link">
                    <img src="../assets/header/Cart.png" alt="" class="header__icon-item" />
                </a>
            </div>

            <div class="burger">
                <div class="burger-cross"></div>
            </div>

            <a href="#" class="request">Запросить консультацию</a>
        </div>
    </div>
</template>
  
  
<style scoped>
.HeaderBottom {
    max-width: 100%;
    margin: 28px 0px 32px 0px;
}

.grid-wrapper {
    display: grid;
    column-gap: 8px;
    grid-template-columns: 1fr auto auto;
    grid-template-areas:
        "links icon btn"
    ;
}

.links {
    grid-area: links;
    flex: 1 1 auto;
    display: flex;
    gap: 8px;
}

.links-item {
    padding: 12px 20px;

    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: var(--text-dark);
    border-radius: 5px;
    background: var(--back-hover);

}

.icon {
    grid-area: icon;
    display: flex;
    gap: 8px;
}

.header__icon-link {
    height: 20px;
    width: 20px;
    padding: 10px;

    border-radius: 8px;
    background: var(--back-hover);
}

.header__icon-item {
    width: 22px;
    height: 22px;
    display: inline-block;
    text-align: center;
}

.request {
    max-width: 200px;
    grid-area: btn;
    display: inline-block;
    padding: 12px 20px;

    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    background: var(--back-button);
    border-radius: 8px;
    color: var(--text-light);
}


/*-----------------------------Media---------------------*/


@media (max-width: 1280px) {
    .icon {
        justify-content: end;
    }

    .grid-wrapper {
        row-gap: 8px;
        grid-template-columns: auto 1fr;
        grid-template-areas:
            "links icon"
            "btn btn"
        ;
    }
}

@media (max-width: 1024px) {
    .icon {
        justify-content: start;
    }

    .grid-wrapper {
        row-gap: 8px;
        grid-template-columns: auto 1fr;
        grid-template-areas:
            "links links"
            "icon btn"
        ;
    }

    .links {
        width: 100%;
        justify-content: space-between;
    }

    .links-item {
        font-size: 16px;
    }
}

@media (max-width: 768px) {
    .grid-wrapper {
        gap: 0px;
        grid-template-columns: 1fr auto;
        grid-template-areas:
            "icon burger"
        ;
    }

    .links {
        display: none;
    }

    .request {
        display: none;
    }

    .burger {
        grid-area: burger;
        position: relative;
        border-radius: 8px;
        background: var(--back-hover);
    }

    .burger-cross {
        margin: 19px 11px;
        width: 18px;
        height: 2px;
        background: var(--text-dark);
    }

    .burger-cross::before {
        position: absolute;
        background: var(--text-dark);
        width: 18px;
        height: 2px;
        content: "";
        top: 14px;
        left: calc(50% - 9px);
    }

    .burger-cross::after {
        position: absolute;
        background: var(--text-dark);
        width: 18px;
        height: 2px;
        content: "";
        bottom: 14px;
        left: calc(50% - 9px);
    }
}
</style>
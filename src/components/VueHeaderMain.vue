<script>
import Logo from './Logo.vue'

export default (await import('vue')).defineComponent({
  data() {
    return {
      count: 0
    }
  },
  name: 'VueHeaderMain',
  components: {
    Logo,
  }
})
</script>

<template>
  <div class="VueHeaderMain">
    <header class="header">
      <div class="header__top">
        <div class="wrapper">
          <div class="header__top-wrapper">
              <Logo/>
              <div class="header__top-list">
                <div class="header__list-link">
                  <a href="#" class="header__link-item">okoprom@gmail.com</a>
                  <a href="#" class="header__link-item">+7 (800) 707-31-01</a>
                </div>
                <div class="header__list-functions">
                  <a href="#" class="header__functions-item">Доставка и оплата</a>
                  <a href="#" class="header__functions-item">Гарантия</a>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div class="header__bottom">
        <div class="wrapper">
          <div class="header__bottom-list">

              <div class="header__pages-wrapper">
                <router-link to="/catalog" class="header__pages-item">Каталог</router-link>
                <a href="#" class="header__pages-item">Наше производство</a>
                <a href="#" class="header__pages-item">О компании</a>
                <a href="#" class="header__pages-item">Контакты</a>
              </div>
              <div class="header__icon-wrapper">
                <a href="#" class="header__icon-link">
                  <img src="../assets/header/Search.png" alt="" class="header__icon-item"/>
                </a>
                <a href="#" class="header__icon-link">
                  <img src="../assets/header/Cart.png" alt="" class="header__icon-item"/>
                </a>
              </div>

              <div class="header__burger">
                <div class="header__burger-cross"></div>
              </div>
            <a href="#" class="header__bottom-request">Запросить консультацию</a>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
}
.header__top {
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

.header__icon {
  width: 119px;
  height: 28px;
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
.header__bottom {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 28px 0px 32px 0px;
}
.header__bottom-list {
  gap: 8px;
  align-items: center;
  display: flex;
}
.header__list-pages {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.header__pages-wrapper {
  flex: 1 1 auto;
  display: flex;
  gap: 8px;
}
.header__pages-item {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: var(--text-dark);
  border-radius: 5px;
  padding: 12px 20px;
  background: var(--back-hover);

}

.header__icon-wrapper {
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
.header__bottom-request {
  flex: none;
  order: 0;
  flex-grow: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: inline-block;
  padding: 12px 20px;
  background: var(--back-button);
  border-radius: 8px;
  color: var(--text-light);
}



/*-----------------------------Media---------------------*/

@media (max-width: 1024px) {
  .header__pages-wrapper {
    width: 70%;
    margin-bottom: 8px;
  }
  .header__icon-wrapper {
    margin-bottom: 8px;
  }
  .header__bottom-list {
    gap: 0px;
    flex-wrap: wrap;
  }
  .header__list-pages {
    margin-bottom: 8px;
  }
}

@media (max-width: 900px) {
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
  .header__list-pages {
    flex-wrap: wrap;
    gap: 0px;
  }
  .header__pages-wrapper {
    width: 100%;
    margin-bottom: 8px;
    justify-content: space-between;
  }
  .header__pages-item {
    font-size: 13px;
  }
  .header__icon-wrapper {
    margin-bottom: 0px;
    margin-right: 8px;
  }
}

@media (min-width: 661px) {
  .header__burger {
    display: none;
  }
}
@media (max-width: 660px) {
  .wrapper {
    padding: 0px 18px;
  }
  .header__link-item {
    font-size: 12px;
  }
  .header__list-functions {
    display: none;
  }
  .header__pages-wrapper {
    display: none;
  }
  .header__bottom-request {
    display: none;
  }
  .header__bottom {
    padding: 16px 0px;
  }
  .header__burger {
    position: relative;
    border-radius: 8px;
    background: var(--back-hover);
  }
  .header__bottom-list {
    justify-content: space-between;
  }
  .header__burger-cross {
    margin: 19px 11px;
    width: 18px;
    height: 2px;
    background: var(--text-dark);
  }
  .header__burger-cross::before {
    position: absolute;
    background: var(--text-dark);
    width: 18px;
    height: 2px;
    content: "";
    top: 14px;
    left: calc(50% - 9px);
  }
  .header__burger-cross::after {
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

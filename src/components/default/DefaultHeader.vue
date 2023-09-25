<script setup lang="ts">
import CommonSearch from '../common/CommonSearch.vue'
</script>

<template>
  <header class="container__header">
    <div class="row">
      <div class="header__wrapper">
        <div class="header__content">
          <img src="@/assets/img/logo.png" alt="" class="header__logo" />
          <router-link to="/" class="header--link"> Usuário </router-link>
        </div>
        <CommonSearch />
      </div>
    </div>
  </header>
</template>

<style scoped>
.container__header {
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 15px 0;
  position: relative;
  margin-bottom: 45px;
}
.header__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}
.header__content {
  display: flex;
  align-items: center;
  gap: 30px;
}
.header--link {
  font-size: 18px;
  font-weight: 600;
  color: #000;
}
.header--link:hover::before,
.router-link-exact-active::before {
  content: '';
  width: 100%;
  height: 3px;
  background-color: #e4ca85;
  position: absolute;
  bottom: 0;
  max-width: 65px;
}

@media (max-width: 1023px) {
  .header__wrapper {
    flex-wrap: wrap;
    justify-content: center;
  }

  .header--link:hover::before,
  .router-link-exact-active::before {
    display: none;
  }
}
</style>

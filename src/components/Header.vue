<template>
  <a-layout-header class="header">
    <a-breadcrumb>
      <slot></slot>
    </a-breadcrumb>
    <div class="header__right">
      <a-icon type="user" />
      <span>Личный кабинет</span>
    </div>
  </a-layout-header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  background: #fff;
  padding: 0;
  display: flex;
  justify-content: space-between;
  padding: 79px 25px;

  &__right {
      
  }
}
</style>
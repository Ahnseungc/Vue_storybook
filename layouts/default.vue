<template>
  <div>
    <h1>{{ $route.name }}</h1>
    <Nuxt />
    <nuxt-link to="/">홈페이지</nuxt-link>
    <nuxt-link to="main">메인페이지</nuxt-link>
    <nuxt-link to="/login">로그인페이지</nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

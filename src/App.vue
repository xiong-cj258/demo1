<template>
  <div id="app">
    <router-view />
    <NavBottom></NavBottom>
  </div>
</template>

<script>
import NavBottom from './components/NavBottom.vue'
export default {
  name: 'App',
  components: { NavBottom }
}
</script>

<style>
@import './assets/css/index.css';
</style>

<template>
  <div id="app">
    <!-- <Home /> -->
    <dashboard />
  </div>
</template>

<script>
import Home from './components/Home';
import Dashboard from './components/Dashboard';

export default {
  name: 'app',
  components: {
    Home,
    Dashboard
  }
}
</script>

<style lang='scss' src='./components/Shared/Styles.scss'>
</style>

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

<style>
body {
  box-sizing: border-box;
}

#app {
  font-family: "Open Sans", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: snow;
  background: #3C3B3F;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #605C3C, #3C3B3F);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #605C3C, #3C3B3F); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>

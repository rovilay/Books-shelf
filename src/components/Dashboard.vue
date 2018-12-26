<template>
    <Layout :show-top-header="showTopHeader">
        <h1 slot="mainContent">Dashboard</h1>
    </Layout>
</template>

<script>
import Layout from './Shared/Layout/index.vue';

export default {
  name: 'Dashboard',
  data() {
      return { showTopHeader: false }
  },
  components: { Layout }
}
</script>

<style lang="scss">
</style>

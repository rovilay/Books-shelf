<template>
    <Layout show-top-header>
        <h1 slot="mainContent">Pirates of the Caribbean!!</h1>
    </Layout>
</template>

<script>
import Layout from './Shared/Layout/index.vue';

export default {
  name: 'Home',
  data() {
      return { showTopHeader: true }
  },
  components: { Layout }
}
</script>

<style lang="scss">

</style>


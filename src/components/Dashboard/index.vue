<template>
    <Layout>
        <div slot="mainContent" class="content-main">
            <router-view></router-view>
        </div>
    </Layout>
</template>

<script>
import Layout from '../Shared/Layout/index.vue';

export default {
  name: 'Dash_board',
  components: { Layout }
}
</script>

<style lang="scss">
</style>

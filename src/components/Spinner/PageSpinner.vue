<template>
    <div class="bs-spinner-page">
        <div class="preloader-wrapper active">
            <div class="spinner-layer bs-color">
            <div class="circle-clipper left">
                <div class="circle"></div>
            </div><div class="gap-patch">
                <div class="circle"></div>
            </div><div class="circle-clipper right">
                <div class="circle"></div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Spinner"
}
</script>

<style lang='scss' src="./spinner.scss" scoped>
</style>

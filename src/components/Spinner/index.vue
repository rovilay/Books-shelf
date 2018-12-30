<template>
    <span class="bs-spinner">
        <div class="preloader-wrapper active bs-btn-spinner-small">
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
    </span>
</template>

<script>
export default {
    name: "Spinner"
}
</script>

<style lang='scss' src="./spinner.scss" scoped>
</style>


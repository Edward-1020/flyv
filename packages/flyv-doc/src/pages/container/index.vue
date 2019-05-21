<template>
    <div class="flyv-doc-container">
            <flyv-doc-nav :config="config.nav">
            <flyv-doc-content>
                <slot />
            </flyv-doc-content>
            <flyv-doc-simulator :config="config.simulator"/>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'flyv-doc-container',
    props: {
        config: {
            type: Object,
            require: true
        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>
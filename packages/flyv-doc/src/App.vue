<template>
    <div class="flyv-doc">
        <flyv-doc-header />
        <flyv-doc-nav :config="config.nav" />
        <flyv-doc-container>
            <slot />
        </flyv-doc-container>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'flyv-doc',
    props: {
        config: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>
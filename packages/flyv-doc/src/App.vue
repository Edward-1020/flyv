<template>
    <div class="flyv-doc" v-if="config">
        <flyv-doc-header />
        <flyv-doc-container :config="config">
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
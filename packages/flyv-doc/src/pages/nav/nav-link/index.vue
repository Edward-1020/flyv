<template>
    <router-link :to="config.path" v-html="config.name"/>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'flyv-doc-nav-link',
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
<template>
    <div class="flyv-simulator-header">
        <span class="header-back"></span>
        <span class="header-title">{{headerTitle}}</span>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'flyv-simulator-header',
    props: {
        headerTitle: {
            type: String,
            default: ''
        }
    }
}
</script>
<template>
    <div class="flyv-doc-simulator">
        <iframe :src="iframePath" frameborder="0"></iframe>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'flyv-doc-simulator',
    props: {
        iframePath: {
            type: String,
            default: ''
        }
    }
}
</script>
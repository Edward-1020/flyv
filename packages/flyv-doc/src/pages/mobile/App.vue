<template>
    <div class="flyv-simulator">
        <flyv-simulator-header :headerTitle="headerTitle"/>
        <slot/>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'flyv-simulator',
    data () {
        return {
            headerTitle: 'demo'
        }
    }
}
</script>
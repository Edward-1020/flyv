<template>
    <flyv-doc :config="config">
        <router-view />
    </flyv-doc>
</template>

<script type="text/ecmascript-6">
import config from '../config/flyv-doc/index';

export default {
    data () {
        return {
            config: config
        }
    }
}
</script>
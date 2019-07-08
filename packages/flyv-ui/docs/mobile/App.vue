<template>
    <flyv-simulator>
        <router-view />
    </flyv-simulator>
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
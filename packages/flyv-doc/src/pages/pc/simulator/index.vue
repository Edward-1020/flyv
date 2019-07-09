<template>
    <div class="flyv-doc-simulator">
        <iframe id="flyv-doc-simulator" frameborder="0"></iframe>
    </div>
</template>

<script type="text/ecmascript-6">
import { syncPath } from '../../../util/iframe';

export default {
    name: 'flyv-doc-simulator',
    mounted () {
        syncPath();
    }
}
</script>
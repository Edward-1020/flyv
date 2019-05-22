<template>
    <a
        @click="handleLinkClick"
        :class="[active === config.path ? 'flyv-doc-nav-link_active' : '', 'flyv-doc-nav-link']" 
        :href="config.path">{{config.name}}</a>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'flyv-doc-nav-link',
    props: {
        active: {
            type: String,
        },
        config: {
            type: Object,
            required: true
        }
    },
    methods: {
        handleLinkClick () {
            this.$parent.active = this.config.path;
        }
    }
}
</script>
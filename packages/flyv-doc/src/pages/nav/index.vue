<template>
    <div class="flyv-doc-nav">
        <div
            v-for="(item, index) in config"
            :key="index"
            class="flyv-doc-nav__item">
            <a class="flyv-doc-nav__title">{{item.name}}</a>
            <div
                v-for="(groupItem, index) in item.groups"
                :key="index">
                <a class="flyv-doc-nav__group-title">{{groupItem.name}}</a>
                <flyv-doc-nav-link
                    v-for="(navItem, index) in groupItem.list"
                    :key="index"
                    :config="navItem"/>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import NavLink from './nav-link/index';

export default {
    name: 'flyv-doc-nav',
    props: {
        config: Array
    },
    components: {
        [NavLink.name]: NavLink
    }
}
</script>
const hljs = require('highlight.js');
const markdownIt = require('markdown-it');

const highlight = (str: string, lang: string): string=> lang && hljs.getLanguage(lang) ? hljs.highlight(lang, str, true).value : '';

const parser = new markdownIt({
    html: true,
    highlight
});

const getVueTemplate = (content: string): string=> `
<template>
    <section v-html="content"/>
</template>

<script type="text/ecmascript-6">
export default {
    data () {
        return {
            content: ''
        }
    },
    created () {
        this.content = ${content};
    }
}
</script>
`;

module.exports = function (source: string) {
    return getVueTemplate(parser.render(source));
}
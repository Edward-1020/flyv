const hljs = require('highlight.js');
const markdownIt = require('markdown-it');

const highlight = (str, lang) => lang && hljs.getLanguage(lang) ? hljs.highlight(lang, str, true).value : '';

const parser = new markdownIt({
    html: true,
    highlight
});

const getVueTemplate = (content) => `
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
        this.content = unescape(\`${escape(content)}\`);
    }
}
</script>
`;

module.exports = function (source) {
    return getVueTemplate(parser.render(source));
}
module.exports = function () {
    const presets = [
        '@babel/preset-env'
    ];
    const plugins = [
        '@babel/plugin-syntax-dynamic-import'
    ];
  
    return {
        presets,
        plugins
    };
};

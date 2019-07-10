module.exports = function () {
    const presets = [
        [
            '@babel/preset-env',
            {
                modules: false
            }
        ],
        '@babel/preset-typescript'
    ];
    const plugins = [
        '@babel/plugin-syntax-dynamic-import'
    ];
  
    return {
        presets,
        plugins
    };
};

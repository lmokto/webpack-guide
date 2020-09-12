module.exports = function (api) {
    api.cache(true);
  
    const presets = [
        [
            '@babel/preset-env', {
              useBuiltIns: 'usage',
              corejs: '3.0.0',
            }
        ]        
    ];
    const plugins = [
        [require('@babel/plugin-proposal-class-properties'), { loose: true }],
        require('@babel/plugin-proposal-object-rest-spread')        
    ];
  
    return {
      presets,
      plugins
    };

  }
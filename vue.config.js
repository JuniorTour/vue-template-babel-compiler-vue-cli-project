module.exports = {
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => {
                options.compilerOptions.babelOptions = {
                    // filename: 'newFilename',
                    // newProp: true,
                    assumptions: {
                        iterableIsArray: true,
                        arrayLikeIsIterable: false,
                    },
                }
                options.compiler = require('vue-template-babel-compiler')
                return options
            })
    }
}
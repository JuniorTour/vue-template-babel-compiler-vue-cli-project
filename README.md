# vue-template-babel-compiler-vue-cli-project

## DEMO
![DEMO](https://user-images.githubusercontent.com/14243906/127761300-076db45a-cdce-4fda-bd02-1f4fa96de6d8.png)

## Project setup
```
yarn install
yarn serve
```

## Config for [vue-template-babel-compiler](https://github.com/JuniorTour/vue-template-babel-compiler)
``` js
// vue.config.js
module.exports = {
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => {
                options.compiler = require('vue-template-babel-compiler')
                return options
            })
    }
}
```

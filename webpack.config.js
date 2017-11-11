var path = require('path');

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist') // _dirname 文件所在的文件目录 resolve类似cd命令的解析
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js' // 注意此处为坑
        }
    },
    module: {
        rules: [
            {test: /\.vue$/, use: 'vue-loader'},
            {test: /\.css/, use: 'style-loader!css-loader'}, // 从由到左的顺序
            {test: /\.(png|jpeg|gif)/, use: 'url-loader'}
        ]
    }
};
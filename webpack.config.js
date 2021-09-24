const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        open: true
    },
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                use: 'babel-loader', 
                exclude: /node_modules/, 
                resolve: {
                    extensions: [".js", ".jsx"]
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html',
            title: 'Integrations with React',
            inject: 'body'
        })
    ]
}
var webpack = require('webpack');
var path = require('path');
var commonsPlugin =
    new webpack.optimize.CommonsChunkPlugin('common.js');
var minifyPlugin = 
    new webpack.optimize.MinChunkSizePlugin({
    compress: {
        warnings: false
    }
});

module.exports = {
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:3000',
        'webpack/hot/only-dev-server',
        './index.js'
    ],
    output: {
        //path: 'resource/',
        path: path.join(__dirname, '/dist/'),
        filename: 'index.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':"'development'"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            // { test: /\.js$/, loader: 'react-hot!jsx-loader?harmony', exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    },
    /*
    externals: [
        {
          'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
          }
        },
        {
          'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
          }
        }
    ]*/
}
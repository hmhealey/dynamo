const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path');

module.exports = {
    devServer: {
        historyApiFallback: true
    },
    entry: './src/index.tsx',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CopyWebpackPlugin([
        	{from: 'src/index.html', to: 'index.html'}
        ])
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules'
        ]
    }
};

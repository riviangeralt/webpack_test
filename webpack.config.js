const path = require('path');

module.exports = {
    entry: './src/index.js',
    resolve: {
        alias: {
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@atoms': path.resolve(__dirname, 'src/components/atoms'),
            '@molecules': path.resolve(__dirname, 'src/components/molecules'),
            '@organisms': path.resolve(__dirname, 'src/components/organisms'),
            '@layout': path.resolve(__dirname, 'src/components/layout'),
            '@utilities': path.resolve(__dirname, 'src/utils'),
            '@api-client': path.resolve(__dirname, 'src/api-client'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@contexts': path.resolve(__dirname, 'src/components/contexts'),
            '@config': path.resolve(__dirname, 'src/config'),
        },
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'images',
                    },
                },
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
                resolve: {
                    extensions: ['.js', '.jsx', '.json'],
                },
            },
        ],
    },
};

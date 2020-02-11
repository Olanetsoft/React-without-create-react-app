const path = require('path');
module.exports = {
    entry: './src/App.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    // Here we are telling babel-loader to look for only .js files to convert to ES5 code but exclude the .js files from node_modules directory
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    mode: 'development',//This is added to inform webpack, that it should run in development mode (default is production mode) 
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};

const srcPath = path.join(__dirname, '../src');
const publicPath = '/';

module.exports = {
    entry: ['./src/index'],
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            enforce: 'pre',
            include: srcPath,
            loader: 'eslint-loader',
        },
        {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          }
        ]
    }
};
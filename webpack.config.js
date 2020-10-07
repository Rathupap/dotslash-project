const path = require("path");

module.exports = {

    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./public")
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use:{
                loader: "babel-loader",
                options: {
                    presets: ["@babel/env", "@babel/react"]
                }
            }
        },{
            test: require.resolve("jquery"),
            use:[{
                loader: "expose-loader",
                options: {
                    exposes: ['$', 'jQuery'],
                }
            }]
        },{
            test: /\.(png|jpg)$/,
            use: "url-loader"
        },{
            test: /\.s?css$/,
            use: ["style-loader", "css-loader",{
                loader: "postcss-loader",
                options: {
                    postcssOptions: {
                        plugins: function(){
                            return [
                                require("autoprefixer")
                            ]
                        }
                    }
                }
            } ,"sass-loader"]
        }]
    },
    mode: "development",
    devtool: "eval-cheap-module-source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "./public")
    }

}
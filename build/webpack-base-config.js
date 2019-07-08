const path = require('path')
const HTMLWebpackPlugin = require("html-webpack-plugin")
const SpritesmithPlugin = require("webpack-spritesmith")

module.exports = {
    entry: {
        'app': './src/index.js'
    },

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name]-[hash:5].js',
        chunkFilename: '[name]-[contenthash:5].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                include: path.resolve(__dirname, '../src'),
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders:2
                        }
                    },
                    'postcss-loader',
                    "less-loader"
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                          limit: 2000,
                          name: "[name]_[hash].[ext]",
                          outputPath: 'assets/imgs/'
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    }   
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    
    optimization:{
        runtimeChunk: true,
        splitChunks: {
            name: true,
            minSize: 0,
            // chunks: 'all'
            cacheGroups: {
                lodash: {
                    test: /lodash/,
                    chunks: "all"
                }
            }
        }
    },

    resolve: {
        modules: ["node_modules", "spritesmith-generated"]
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "../index.html")
        }),
        new SpritesmithPlugin({
            src: {
                cwd: path.resolve(__dirname, '../src/assets/image/sp/'),
                glob: '**/*.png'
            },
            target: {
                image: path.resolve(__dirname, '../src/css/spritesmith-generated/sprite.png'),
                css: path.resolve(__dirname, '../src/css/spritesmith-generated/sprite.less')
                // css: [[path.resolve(__dirname, '../src/css/spritesmith-generated/sprite.less'),{format: 'function_based_template'}]]
            },
            // customTemplates: {
            //     'function_based_template': templateFunction,
            // },
            apiOptions: {
                // 需要使用雪碧图的css文件相对路径，不是生成的sprite.less的相对路径，demo中是base.less文件中使用
                cssImageRef: "./spritesmith-generated/sprite.png"
            },
            // 需要存在@1x和@2x
            retina: "@2x",
            // 解决放大图片，图标边缘出现白线问题
            spritesmithOptions: {
                padding: 4
            }
        })
    ]
}

// 自定义css模版，可通过得知图片宽高做居中等处理，目前简易配置足够
// const templateFunction = function (data) {
//     var shared = '.ico { background-image: url(I) }'
//         .replace('I', data.sprites[0].image);

//     var perSprite = data.sprites.map(function (sprite) {
//         return '.ico-N { width: Wpx; height: Hpx; background-position: Xpx Ypx; }'
//             .replace('N', sprite.name)
//             .replace('W', sprite.width)
//             .replace('H', sprite.height)
//             .replace('X', sprite.offset_x)
//             .replace('Y', sprite.offset_y);
//     }).join('\n');

//     return shared + '\n' + perSprite;
// };
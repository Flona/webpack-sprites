module.exports = {
    ident: 'postcss',
    plugins: [
        require("autoprefixer")(),
        require("cssnano")(),
        // require("postcss-sprites")({
        //     // 初始雪碧图的位置，未压缩前的图片
        //     spritePath: "dist/assets/imgs/sp/",
        //     retina: true,
        //     filterBy: function(image){
        //         const flag = /\/image\/sp\//.test(image.url)
        //         return flag ? Promise.resolve() : Promise.reject()
        //     },
        //     groupBy: [
        //         function(image){
        //             const flag = /\/sp1\//.test(image.url)
        //             return flag ? Promise.resolve("sprite1") : Promise.reject()
        //         },
        //         function(image){
        //             const flag = /\/sp2\//.test(image.url)
        //             return flag ? Promise.resolve("sprite2") : Promise.reject()
        //         }
        //     ]
        // })
    ]
}
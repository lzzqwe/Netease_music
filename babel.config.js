module.exports = {
    presets: [
        ['@vue/app', {
            useBuiltIns: 'entry', //添加的内容
        }]
    ],
    sourceType: 'unambiguous',
    plugins: [
        ['import', {
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true
        }, 'vant'], "transform-es2015-modules-commonjs"
    ]
}
module.exports = {
    // 基本路径
    baseUrl: '/',
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    // webpack-dev-server 相关配置
    devServer: {
        open: true,
        host: process.env.VUE_APP_HOST,
        port: process.env.VUE_APP_PORT,
    }
}
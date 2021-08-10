// webpack 설정 파일
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    // 파일을 읽어 들이는 진입점 (webpack은 기본적으로 html파일이 아닌 js를 진입점으로 사용)
    entry: './js/main.js',
    // 빌드 결과물을(번들) 반환하는 설정 
    output: {
        // 빌드 경로 (경로 및 파일명을 따로 설정하지 않으면 기본 설정으로 지정됨 (path 기본값 dist, filename 기본값은 entry 파일명))
        path: path.resolve(__dirname, 'dist'),
        // 빌드 완료 후 파일명
        filename: 'main.js',
        // 빌드 디렉토리 초기화
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },
    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인을 설정
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'static' }
            ]
        })
    ],
    // devserver 설정
    devServer: {
        host: 'localhost',
        port: 80
    }
};
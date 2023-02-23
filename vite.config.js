const { resolve } = require('path')
export default {
    plugins: [],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                french: resolve(__dirname, 'french.html')
            }
        }
    }
}
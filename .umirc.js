export default {
    proxy:{
        "/api/local": {
            target: "http://101.132.72.36:5100/",
            changeOrigin: true
        },
        '/api/upload':{
            'target':'http://101.132.72.36:5100',
            'changeOrigin':true,
        },
        '/api':{
            'target':'https://open.duyiedu.com',
            'changeOrigin': true,
        },
    },
    theme: {
        "primary-color": "#008c8c"
    },
}
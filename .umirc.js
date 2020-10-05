export default {
    proxy:{
        '/api':{
            'target':'https://open.duyiedu.com',
            'changeOrigin': true,
        }
    },
    theme: {
        "primary-color": "#008c8c"
    },
}
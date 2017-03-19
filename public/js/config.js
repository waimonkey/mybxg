require.config({
    baseUrl : '/public/assets',
    paths : {
        jquery : 'jquery/jquery.min',
        cookie : 'jquery-cookie/jquery.cookie',
        echarts : 'echarts/echarts.min',
        template : 'artTemplate/template',
        bootstrap : 'bootstrap/js/bootstrap',
        nprogress : 'nprogress/nprogress',
        util : '../js/util',
        overlay : '../js/overlayer'
    },
    shim : {
        bootstrap : {
            // 把bootstrap转成标准模块（依赖于标准的jQuery模块）
            deps : ['jquery']
        }
    }
});
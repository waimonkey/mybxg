/*
工具
*/
define(['jquery'], function($) {
    return {
        //侧边栏点击状态
        setMenu:function(pathname){
             $('.navs a[href="'+pathname+'"]').addClass('active');
        },
        qs:function(pname){
            //获取url
            var pathname = location.search;
            //去除第一个字符?
            pathname = pathname.slice(1);
            //声明一个对象 存放url的键值
            var obj = {};
            //判断 是否有路径
            if (pathname) {
                //截取字符串
                var arr = pathname.split('&');
                //循环遍历数组 
                for(var i = 0; i < arr.length; i++){
                    //截取等号
                    var kv = arr[i].split('=');
                    //把键值对放入对象obj中
                    obj[kv[0]] = kv[1];
                }
            } 
            return obj[pname];
        }
    }
})

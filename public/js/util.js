/*
工具
*/
define(['jquery'], function($) {
    return {
        //侧边栏点击状态
        setMenu:function(pathname){
             $('.navs a[href="'+pathname+'"]').addClass('active').end().parents('li').siblings('a').removeClass('active');
        }
    }
})

define(['jquery', 'echarts', 'cookie'], function($,echarts) {


    //控制左侧导航菜单的显示和隐藏
    $('.navs ul').prev('a').on('click', function() {
        $(this).next().slideToggle();
    });


    //没有登录时候的跳转到登录页面
    var pathname = location.pathname;
    var flag = $.cookie('PHPSESSID');
    if (!flag && pathname.indexOf('login') == -1) {
        //没有登录
        location.href = '/login';
    }


    //实现登录功能
    //获取表单 监听提交事件
    $('#loginForm').submit(function() {
        //获取表单全部内容
        var formData = $(this).serialize();
        //使用ajax方式提交数据
        $.ajax({
            type: 'post',
            url: '/api/login',
            data: formData,
            dataType: 'json',
            success: function(data) {
                console.log(data);
                if (data.code == 200) {
                    console.log(data.result);
                    var logInfo = JSON.stringify(data.result);
                    // 实现cookie数据的跨页面共享
                    $.cookie('logInfo', logInfo, {
                        path: '/'
                    });
                    location.href = '/index/index';
                }
            },
            error: function(data) {
                console.log(data.responseText);
            }
        });
        //阻止默认行为
        return false;
    });

    
    //渲染功能
    //设置头像和用户名
    //变为json格式
    var obj = JSON.parse($.cookie('logInfo'));
    $('.aside .profile img').attr('src', obj.tc_avatar);
    $('.aside .profile h4').html(obj.tc_name);

})

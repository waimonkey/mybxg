
    //控制左侧导航菜单的显示和隐藏
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

    //没有登录时候的跳转到登录页面
    var flag = $.cookie('PHPSESSID');
    if(!flag){
        //没有登录
        location.href = '/login';
    }
/*
讲师
*/
define(['jquery', 'template','util', 'bootstrap','overlay'], function($, template,util) {

    //设置侧边栏的active样式
    util.setMenu(location.pathname);

//显示加载列表
$.ajax({
        type: 'get',
        url: '/api/teacher',
        dataType: 'json',
        success: function(data) {
            // console.log(data);
            var html = template('teacherTpl', {
                list: data.result
            });
            $("#teacherList").html(html);


            //查看列表信息功能
            //获取查看按钮 注册点击事件
            $('.teacherBtns').find('a:eq(0)').click(function() {
                //获取列表内容
                //获取自定义属性data-tcid 
                var tc_id = $(this).parents('td').attr('data-tcid');
                $.ajax({
                    type: 'get',
                    url: '/api/teacher/view',
                    data: {
                        tc_id: tc_id
                    },
                    dataType: 'json',
                    success: function(data) {
                        if (data.code == 200) {
                            //处理籍贯的|
                            data.result.tc_hometown = data.result.tc_hometown.replace(/\|/g, " ");
                            var html = template('teacherInfoModal', data.result);
                            $('#teacherInfo').html(html);
                            $('#teacherModal').modal();
                        }
                    }
                });
            });


            //启用和注销讲师
            //获取按钮 注册点击事件
            $('.teacherBtns').find('a:eq(2)').click(function() {
                //获取自定义属性data-tcid 
                var tc_id = $(this).parents('td').attr('data-tcid');
                //获取状态
                var tc_status = $(this).parents('td').attr('data-tcstatus');
                //获取td
                var td =  $(this).parents('td');
                //缓存this
                var that = $(this);
                $.ajax({
                    type:'post',
                    url:'/api/teacher/handle',
                    data:{
                        tc_id:tc_id,
                        tc_status:tc_status
                    },
                    dataType:'json',
                    success:function(data){
                        console.log(data);
                        //进行判断
                        if(tc_status == 1){
                            that.text('启 用');
                        }else{
                            that.text('注 销');
                        }

                         // 修改浏览器端状态
                        td.attr('data-tcstatus',data.result.tc_status);
                    }
                });
          });
        }
    });


});

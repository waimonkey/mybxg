/*
讲师
*/
define(['jquery', 'template','bootstrap'], function($, template) {

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
           $('.teacherBtns').find('a:eq(0)').click(function(){
                //获取列表内容
                //获取自定义属性data-tcid 
                var tc_id = $(this).parents('td').attr('data-tcid');
                $.ajax({
                    type:'get',
                    url:'/api/teacher/view',
                    data:{
                        tc_id:tc_id
                    },
                    dataType:'json',
                    success:function(data){
                        if(data.code == 200){
                            //处理籍贯的|
                            data.result.tc_hometown = data.result.tc_hometown.replace(/\|/g," ");
                            var  html = template('teacherInfoModal',data.result);
                            $('#teacherInfo').html(html);
                            $('#teacherModal').modal();
                        }
                    }
                });
           });
        }
    });


});

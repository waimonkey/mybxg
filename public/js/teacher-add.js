/*
添加和编辑讲师功能
*/
define(['jquery', 'util', 'template', 'datepicker', 'language', 'validate', 'form'], function($, util, template) {

    //设置导航栏选中
    util.setMenu('/teacher/list');
    //获取tc_id
    var tc_id = util.qs('tc_id');
    //讲师的添加与编辑功能
    if (tc_id) {
        //如果有tc_id说明是讲师的编辑
        $.ajax({
            type: 'get',
            url: '/api/teacher/edit',
            data: {
                tc_id: tc_id
            },
            dataType: 'json',
            success: function(data) {
                // console.log(data);
                data.result.tcInfo = '编辑讲师';
                var html = template('teacherEdit', data.result);
                $('#teacherInfo').html(html);
                checkForm('/api/teacher/update');

            }

        })
    } else {
        //没有tc_id就是讲师的添加
        var html = template('teacherEdit', {
            tcInfo: '添加讲师',
            tc_gender: 1
        });
        $('#teacherInfo').html(html);
        checkForm('/api/teacher/add');

    }

    //表单验证
    function checkForm(url) {
        $('#teacherForm').validate({
            sendForm: false,
            valid: function() {
                //提交表单
                $(this).ajaxSubmit({
                    type: 'post',
                    url: url,
                    dataType: 'json',
                    success: function(data) {
                        if (data.code == 200) {
                            location.href = '/teacher/list';
                        }
                    }
                   
                   
                })
            },
             description: {
                        tcName: {
                            required: '用户名不能为空'
                        },
                        tcPass: {
                            required: '密码不能为空',
                            pattern: '只能是六位数字'
                        },
                        joinDate: {
                            required: '入职日期不能为空'
                        }
                    },
                    eachInvalidField : function(){
                $(this).closest('.form-group').removeClass('has-success').addClass('has-error');
            },
            eachValidField : function(){
                $(this).closest('.form-group').removeClass('has-error').addClass('has-success');
            },
        })
    }

})

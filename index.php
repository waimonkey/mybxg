<?php 
    //该文件负责路径的分发
    //定义路径
    $path = 'index';
    //定义文件名称
    $filename = 'index';
    //判断路径是否存在
    if(array_key_exists('PATH_INFO',$_SERVER)){
        //include作用载入静态页面
       
        //explode 截取字符串 返回值是一个数组
        //substr(被截取的变量,开始的位置())

        //获取url中的路径
         $url = $_SERVER['PATH_INFO'];
         //去掉路径中的第一个字符
         $str = substr($url,1);
         //将字符串按照'/'进行分割
          $arr = explode('/',$str);
         //进行判断 地址栏层级
         if (count($arr) == 2){
            $path = $arr[0];
            $filename = $arr[1];
         }else{
            $filename = 'login';
         }
        }else{
            //不是的话 表示登录也
             $filename = 'login';
         }
         //载入一个页面
         include('./view/'.$path.'/'.$filename.'.html');

    
?>
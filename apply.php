<?php
header("Content-type:text/html;charset=utf-8");

$serverName = "localhost";
$userName = "root";
$password = "";
$dbName = "dianzhihun_pingpang";
echo"！";
    // 创建连接
    $conn = new mysqli($serverName, $userName, $password, $dbName);
    $conn->set_charset('utf8');

    // 检测连接
    if ($conn->connect_error) die("连接失败: " . $conn->connect_error);

    $sql="INSERT INTO userData(userclass, username, usersex, userphone, userqq) VALUES ('{$_POST['userclass']}','{$_POST['username']}','{$_POST['usersex']}','{$_POST['userphone']}','{$_POST['userqq']}')";
    $conn->query($sql);

    //断开连接
    $conn->close();
?>

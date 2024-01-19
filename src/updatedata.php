<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Methods:GET POST");
header("Access-Control-Allow-Headers:X-Requested-With");

$connect=mysqli_connect("localhost","root","","react")or die("connection failed");

if (!empty($_POST['updateid']))
	{
		$id=$_POST['updateid'];
		$name=$_POST['updatename'];
		$email=$_POST['updateemail'];
		$query="update student set name='$name',email='$email' where id=$id ";
		if(mysqli_query($connect,$query))
		{
			echo" Record Updated";
		}
		else
		{
			echo "Record Not Updated";
		}
	}

if(!empty($_POST['userid']))
	{
		$id=$_POST['userid'];
		$query="select * from student where id=$id";
		$result=mysqli_query($connect,$query);
		while($row=mysqli_fetch_assoc($result))
		{
			$data[]=$row;
		}	 
		echo json_encode($data);
	}
    
?>
<?php
header("Access-Control-Allow-origin:*");
header("Access-Control-Methods:GET POST");
header("Access-Control-Allow-Headers:X-Requested-with");
	$connect=mysqli_connect("localhost","root","","react")or die("connection failed");

	if(!empty($_POST['name']))
	{
		$a=$_POST['name'];
		$b=$_POST['qualification'];
		$c=$_POST['hobbies'];
		$d=$_POST['country'];
	

		$query="insert into schooldata (name,qualification,hobbies,country) values('$a','$b','$c','$d')";
			if(mysqli_query($connect,$query))
			{
				$a=array("d"=> "Your DATA is added succesfully");
				echo json_encode($a);
			}
			else
			{
				$a=array("d"=> "Your DATA is not added succesfully");
				echo json_encode($a);
			}
	}
?>
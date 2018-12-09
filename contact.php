<?php
if( $_POST["fName"] || $_POST["lName"] || $_POST["email"] || $_POST["mTitle"] || $_POST["mBody"]) {
	echo "<h1>Form Results: </h1>";
	echo "First Name: ". $_POST['fName']. "<br />";
	echo "Last Name: ". $_POST['lName']. "<br />";
	echo "Email: ". $_POST["email"]. "<br />";
	echo "Message Title: ". $_POST['mTitle']. "<br />";
	echo "Message Body: ". $_POST['mBody'];
}
?>
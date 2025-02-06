<?php
$servername = "mydb.ics.purdue.edu";
$username = "jshabel";
$password = 'og6&XL97nwXdQ';
$dbname = "jshabel";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}
else {
echo "EXECUTED CONNECTION";
}
?>

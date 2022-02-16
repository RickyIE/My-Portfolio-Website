<?php

DEFINE('DB_USER', 'meetalex_website_main');
DEFINE('DB_PASSWORD', 'qbEh}wwU:R<KPS@\C5UDozwP2');
DEFINE('DB_HOST', '50.87.177.72');
DEFINE('DB_NAME', 'meetalex_MainDatabase');

$db_connection = @mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME) OR
(die ("Could not connect to MySQL! "));
mysqli_set_charset($db_connection, 'utf8');

?>

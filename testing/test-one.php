<?php

require '../scripts/ConnectToMainDatabase.php';

$query = 'SELECT * FROM projectDownloads;';

$result = mysqli_query($db_connection, $query);

$dataArray = array();


if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while ($row = mysqli_fetch_assoc($result)) {
        $dataArray[] = (array(
             'downloadID' => $row['downloadID'],
            'downloadDate' =>$row['downloadDate'],
            'downloadUser' => $row['downloadUser'],
            'downloadProject' =>$row['downloadProject']
        ));
    }

} else {
    echo "0 results";
}

function updateDatabase(){

    $query = "INSERT INTO projectDownloads (downloadUser, downloadProject)
VALUES ('USER','PROJECT');";

    $result = @mysqli_query($db_connection, $query);

}

?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

<h1 style="color:green;">
    GeeksforGeeks
</h1>

<h4>
    How to call PHP function
    on the click of a Button ?
</h4>

<?php
if(array_key_exists('button1', $_POST)) {
    updateDatabase();
}
else if(array_key_exists('button2', $_POST)) {
    button2();
}

function button2() {
    echo "This is Button2 that is selected";
}
?>

<button name="button1" value="button1">Button</button>



</body>
</html>
<?php


$image = $_FILES['image']['name'];
$type = $_FILES['image']['type'];
$size = $_FILES['image']['size'];
$temp = $_FILES['image']['tmp_name'];

$path = $_SERVER['DOCUMENT_ROOT'] . "/TestUpload/";

$type = str_replace("image/", ".", $type);

$image = str_replace(' ', '-', $image);
$image = substr(uniqid(), 1) . $type;
$path = $path . $image;

if ($image) {
    if ($type == ".jpg" || ".jpeg" || ".png") {
        if (!file_exists($path)) {
            move_uploaded_file($temp, $path);
            echo json_encode("image name is already. change name image");
        } else {
            echo json_encode("image name is already. change name image");
        }
    } else {
        echo json_encode("type is not support");
    }
} else {
    echo json_encode("name is empty");
}

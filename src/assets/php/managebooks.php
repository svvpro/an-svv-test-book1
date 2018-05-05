<?php
header("Content-Type: application/json; charset=UTF-8");
header("Cache-Control: no-cache, no-store, must-revalidate");
header("Pragma: no-cache");
header("Expires: 0");

$output = ["status" => 0];

$connect = new mysqli("localhost", "root", "", "books");

if (!($connect->connect_errno)) {

    $_POST = json_decode(file_get_contents("php://input"), true);
    $id = $connect->real_escape_string($_POST["id"]);

    if (isset($_POST["method"]) && ($_POST["method"] == "delete")) {
        $result = $connect->query("DELETE FROM book WHERE id =" . $id);
    } else {
        $title = $connect->real_escape_string($_POST["title"]);
        $description = $connect->real_escape_string($_POST["description"]);
        if ($id == 0) {
            $result = $connect->query("INSERT INTO book (title, description) VALUES('" . $title . "', '" . $description . "')");
        } else {
            $result = $connect->query("UPDATE book SET title='" . $title . "', description='" . $description . "' WHERE id=" . $id);
        }
    }

    $output["status"] = ($result) ? 1 : 0;
}

echo json_encode($output, JSON_UNESCAPED_UNICODE);
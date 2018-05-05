<?php
header("Content-Type: application/json; charset=UTF-8");
header("Cache-Control: no-cache, no-store, must-revalidate");
header("Pragma: no-cache");
header("Expires: 0");

$output = [];

$connect = new mysqli("localhost", "root", "", "books");

if (!($connect->connect_errno)) {
    if (isset($_GET["id"])) {
        $id = $connect->real_escape_string($_GET["id"]);
        $result = $connect->query("SELECT * FROM book WHERE id=" . $id);
        if ($row = $result->fetch_assoc()) {
            $output = ["id" => $row["id"], "title" => $row["title"], "description" => $row["description"]];
        }
    } else {
        $result = $connect->query("SELECT * FROM book");
        while ($row = $result->fetch_assoc()) {
            $output[] = ["id" => $row["id"], "title" => $row["title"], "description" => $row["description"]];
        }
    }
    $connect->close();
}

echo json_encode($output, JSON_UNESCAPED_UNICODE);
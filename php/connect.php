<?php 

    $conn = mysqli_connect("localhost","root","","adabumdes");


    // CEK KONEKSI
    if(!$conn) {
        echo "KONEKSI GAGAL" . mysqli_error($conn);
    }

?>
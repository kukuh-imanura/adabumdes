<?php

// KONEKSI 
include("../php/connect.php");

// AMBIL DATA
$search = $_GET['search'];

if (isset($search)) {

    // SEARCH
    // QUERY
    $query = mysqli_query($conn, "SELECT  * FROM peminjam WHERE nikPeminjam LIKE '%$search%' OR nama LIKE '%$search%'");

    // SIMPAN QUERY DALAM ARRAY
    $row = mysqli_fetch_all($query, MYSQLI_ASSOC);
    ?>

    <table class="table mt-5 table-responsive" id="tabel">
        <thead>
            <tr class="fw-bold">
                <td>NIK</td>
                <td>Nama</td>
                <td>Pekerjaan</td>
                <td>Status</td>
                <td>Alamat</td>
                <td>No Rekening</td>
                <td>No Hutang</td>
                <td>Nik Penjamin</td>
                <td>Edit</td>
                <td>Hapus</td>
            </tr>
        </thead>

        <tbody>

            <?php
            // TAMPILKAN HASIL PENCARIAN
            foreach($row as $data) {
                ?>

                <tr>
                    <td>
                        <?php echo $data['nikPeminjam'] ?>
                    </td>
                    <td>
                        <?php echo $data['nama'] ?>
                    </td>
                    <td>
                        <?php echo $data['pekerjaan'] ?>
                    </td>
                    <td>
                        <?php echo $data['status'] ?>
                    </td>
                    <td>
                        <?php echo $data['alamat'] ?>
                    </td>
                    <td>
                        <?php echo $data['noRekening'] ?>
                    </td>
                    <td class="text-center">
                        <?php echo $data['noHutang'] ?>
                    </td>
                    <td>
                        <?php echo $data['nikPenjamin'] ?>
                    </td>
                    <td class="text-center">
                        <a href="peminnjam_u.php" class="bi bi-pencil-fill text-primary"></a>
                    </td>
                    <td class="text-center">
                        <a href="peminjam_d.php" class="bi bi-trash-fill text-danger"></a>
                    </td>
                </tr>

                <!-- PENUTUP LOOP SEARCH -->
                <?php
            }
            ?>

        </tbody>
    </table>

    <?php
} else {

}
?>

<div class="row">
    <div class="col-12">

        <?php
        // READ
        // KONEKSI
        include("../php/connect.php");

        // QUERY
        $query = mysqli_query($conn, "SELECT * FROM peminjam");
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
                    <td colspan="2">Action</td>
                </tr>
            </thead>

            <tbody>
                <?php
                // PERULANAGN, MENGAMBIL DATA DALAM BENTUK ARRAY
                while ($data = mysqli_fetch_assoc($query)) {
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

                    <!-- PENUTUP LOOP READ -->
                    <?php
                }
                ?>

            </tbody>
        </table>
    </div>
</div>
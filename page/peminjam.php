<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>

    <!-- My CSS -->
    <link rel="stylesheet" href="../css/style.css">

    <!-- For Jumbotron -->
    <link rel="stylesheet" href="../bootstrap/bootstrap.css">

    <!-- CSS Offline File -->
    <link rel="stylesheet" href="../bootstrap/bootstrap-5.3.0/css/bootstrap.min.css">

    <!-- CSS Online File -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

    <!-- For Icons Offline -->
    <link rel="stylesheet" href="../bootstrap/font/bootstrap-icons.css">

    <!-- For Icons Online -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
</head>

<body>

    <div id="header">
        <!-- Homepage Img -->
        <img id="header-img" src="../img/bg.jpg" alt="">

        <!-- Menu -->
        <nav id="menu" class="navbar navbar-expand-sm sticky-top">
            <div class="container-fluid">

                <!-- Toggle Collapse -->
                <button id="tombol" type="button" class="navbar-toggler" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse">
                    <i class="bi bi-list text-white"></i>
                </button>

                <!-- Collapse Data -->
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <!-- Menu Item -->
                    <ul class="navbar-nav nav-justified">
                        <li class="nav-item">
                            <a href="home.html" class="nav-link">
                                <i id="icon" class="bi bi-house-fill"></i>
                                <p>Home</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="peminjam.php" class="nav-link">
                                <i id="icon" class="bi bi-people-fill"></i>
                                <p>Peminjam</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <i id="icon" class="bi bi-bank2"></i>
                                <p>Peminjaman</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <i id="icon" class="bi bi-cash-stack"></i>
                                <p>Pengembalian</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <i id="icon" class="bi bi-file-earmark-fill"></i>
                                <p>Laporan</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>

    <div id="content">
        <div class="container">
            <h1 class="text-center mt-5">PEMINJAM</h1>
            <hr><br>

            <div class="row mt-5">
                <!-- CREATE DATA PEMINJAM -->
                <div class="col-12 col-md-6">
                    <button class="btn btn-primary ml-5 mt-2 justify-content-center" id="tombol">
                        <i class="bi bi-person-plus-fill"></i>
                        Tambah Data
                    </button>
                </div>

                <!-- SEARCH -->
                <div class="col-12 col-md-6">
                    <form class="form-inline float-right mr-5 mt-2" action="peminjam.php" method="get">
                        <input class="col form-control" type="text" placeholder="Masukkan NIK/Nama" name="search">
                        <button type="submit" class="btn btn-primary" id="tombol">
                            <i class="bi bi-search"></i>
                        </button>
                    </form>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <table class="table table-responsive mt-5" id="tabel">
                        <?php

                        include("../php/connect.php");

                        if (isset($_GET['search'])) {

                            $search = $_GET['search'];

                            $query = mysqli_query($conn, "SELECT * FROM peminjam WHERE nikPeminjam LIKE '%$search%' OR nama LIKE '%$search%'");

                            $row = mysqli_fetch_all($query, MYSQLI_ASSOC);

                            if (empty($row)) {

                                echo '<script>alert("Data ' . $search . ' yang anda cari tidak ditemukan");</script>';

                            }

                            ?>

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

                            <?php

                            foreach ($row as $data) {
                                ?>

                                <tbody>
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
                                </tbody>

                                <?php
                            }

                        } else {

                            // READ PEMINJAM
                            include("peminjam_read.php");

                        }

                        ?>
                    </table>
                </div>
            </div>

        </div>
    </div>

    <div id="footer" class="py-3 mt-5">
        <div class="container">
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a href="home.html" class="nav-link text-muted">Home</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link text-muted">FAQs</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link text-muted">About</a>
                </li>
            </ul>
            <hr>
            <p class="text-center">
                <a href="https://kukuh-imanura.github.io" class="text-muted">© 2023</a>
            </p>
        </div>
    </div>

</body>

<script src="bootstrap/bootstrap-5.3.0/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
    crossorigin="anonymous"></script>

</html>
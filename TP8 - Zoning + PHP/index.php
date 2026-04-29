<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>TP8 - Zoning + PHP</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header class="header">
    <div class="logo">
        <a href="../index.html">
            <img src="assets/php.png" alt="Logo">
        </a>
    </div>

    <nav class="menu">
        <a href="index.php?page=tp1">TP1</a>
        <a href="index.php?page=tp2">TP2</a>
        <a href="index.php?page=tp3">TP3</a>
        <a href="index.php?page=tp4">TP4</a>
        <a href="index.php?page=tp5">TP5</a>
        <a href="index.php?page=tp6">TP6</a>
        <a href="index.php?page=tp7">TP7</a>
    </nav>
</header>

<main class="main">
    <aside class="sidebar">
        Zone de sous-menu
    </aside>

    <section class="content">
        <?php if (isset($_GET["page"])) {
            switch ($_GET["page"]) {
                case "tp2":
                    include "pages/tp2.php";
                    break;
                case "tp4":
                    include "pages/tp4.php";
                    break;
                case "tp5":
                    include "pages/tp5.php";
                    break;
                case "tp6":
                    include "pages/tp6.php";
                    break;
                case "tp7":
                    include "pages/tp7.php";
                    break;
                default:
                    echo "<h2>Page non trouvée</h2>";
            }
        } else {
            include "pages/accueil.php";
        } ?>
    </section>
</main>

<footer class="footer">
    Pied de page
</footer>

</body>
</html>

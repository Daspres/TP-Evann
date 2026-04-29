<?php
session_start();
require 'db.php';

// Vérifier si connecté
if (!isset($_SESSION['user_id'])) {
    die("Vous devez être connecté");
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $date_debut = $_POST['date_debut'];
    $date_fin = $_POST['date_fin'];
    $contact = htmlspecialchars($_POST['contact']);
    $tel_contact = htmlspecialchars($_POST['tel_contact']);
    $user_id = $_SESSION['user_id'];

    // Vérification dates
    if ($date_fin < $date_debut) {
        die("Dates invalides");
    }

    $sql = "INSERT INTO demandes (user_id, date_debut, date_fin, contact, tel_contact)
            VALUES (?, ?, ?, ?, ?)";

    $stmt = $pdo->prepare($sql);
    $stmt->execute([$user_id, $date_debut, $date_fin, $contact, $tel_contact]);

    echo "Demande envoyée !";
}
?>
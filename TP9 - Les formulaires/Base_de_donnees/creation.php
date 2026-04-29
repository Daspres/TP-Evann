<?php
require 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nom = htmlspecialchars($_POST['nom']);
    $prenom = htmlspecialchars($_POST['prenom']);
    $adresse = htmlspecialchars($_POST['adresse']);
    $telephone = htmlspecialchars($_POST['telephone']);
    $email = htmlspecialchars($_POST['email']);
    $password = $_POST['password'];
    $confirm = $_POST['confirm_password'];

    // Vérification mot de passe
    if ($password !== $confirm) {
        die("Les mots de passe ne correspondent pas");
    }

    // Hash du mot de passe
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Vérifier si email existe déjà
    $check = $pdo->prepare("SELECT id FROM users WHERE email = ?");
    $check->execute([$email]);

    if ($check->rowCount() > 0) {
        die("Email déjà utilisé");
    }

    // Insertion
    $sql = "INSERT INTO users (nom, prenom, adresse, telephone, email, password)
            VALUES (?, ?, ?, ?, ?, ?)";

    $stmt = $pdo->prepare($sql);
    $stmt->execute([$nom, $prenom, $adresse, $telephone, $email, $hashedPassword]);

    echo "Compte créé.";
}
?>
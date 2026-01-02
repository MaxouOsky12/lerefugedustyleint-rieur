<?php
// On récupère l'email
$email = $_POST['user_email'] ?? '';

if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
    
    $nom_du_fichier = "contacts.csv";
    
    // On prépare la ligne : Email ; Date
    $ligne = [ $email, date("d/m/Y H:i") ];

    // On ouvre le fichier en mode "a" (append = ajout à la fin)
    $fp = fopen($nom_du_fichier, 'a');

    // On écrit au format CSV
    fputcsv($fp, $ligne, ";");

    // On ferme le fichier
    fclose($fp);
}

// Redirection vers la partie produits du site
header("Location: index.html#selection");
exit();
?>

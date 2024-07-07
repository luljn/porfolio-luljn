<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        // Adresse email du destinataire
        $emailRecipient = "mbohlulajonathan4@gmail.com";

        // Générer le lien mailto
        $mailtoLink = "mailto:$emailRecipient";

        // Rediriger vers le lien mailto
        header("Location: $mailtoLink");
        exit;
    }

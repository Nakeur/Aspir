<?php
$request = $_SERVER['REQUEST_URI'];



switch ($request) {
    case '/' :
        ob_start();
        require dirname(__DIR__) . '\views\accueil.php';
        $pageContent = ob_get_clean();
        require dirname(__DIR__) .'\src\layout.php';
        break;
    case '/libereaux' :
        ob_start();
        require dirname(__DIR__) . '\views\carte-des-libereaux.php';
        $pageContent = ob_get_clean();
        require dirname(__DIR__) .'\src\layout.php';
        break;
    case '/liste_libereaux_aploi';
        header('Content-Type: application/pdf');
        readfile("public\Annuaire des Psychomotriciens Liberaux 974 - par Apl-oi MARS2022.pdf");
        break;
    case '/projet';
        ob_start();
        require dirname(__DIR__) . '\views\projet.php';
        $pageContent = ob_get_clean();
        require dirname(__DIR__) .'\src\layout.php';
        break;


    case '/about' :
        require __DIR__ . '/views/about.php';
        break;
}
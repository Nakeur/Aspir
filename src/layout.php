<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet"  href='style.css'>
    <link rel="stylesheet" href='map.css'>
    <link rel="stylesheet" href='projet.css'>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400&display=swap" rel="stylesheet">
    <!-- Seo code-->

    <title><?= $pageTitle ?></title>
</head>
<body>
    <div class="header">
        
        <div class="logo_header"><img src="img/logo.png" alt="logo_aspir"></div>
        <div class="header_title"><h1>Association des psychomotriciens de l'île de la Réunion</h1></div>
        <div class="contact">
            <img src="img/email.png" class="mail">
            <p>974aspir@gmail.com</p><br>
            <img src="img/facebook-logo.png" onclick="window.open('https://www.facebook.com/AspirReunion')" class="link_fb">
            <p>@AspirReunion</p><br>
            <img src="img/user-picture.png" onclick="window.open('https://forms.gle/n5EkJa9Nwn3LC8Lj9')" class="submitBtn"><p></p>
            <a href="https://forms.gle/n5EkJa9Nwn3LC8Lj9">Adhérer</a>
        </div>

    </div>

    <div class="page_nav">

        <nav class="navigation_bar">
            <ul class="navbar">
                <li><a href="/">Accueil</a></li>
                <li><a href="/projet">Projet</a></li>
                <li><a href="">Service</a></li>
                <li><a href="/libereaux">Trouver un professionel</a></li>
            </ul>
        </nav>   
    </div>

<?= $pageContent ?>

    <footer>
        <div class="contactUs">
            <p>Contactez nous</p>
            <p><img src="img/email.png" class="mail"> 974aspir@gmail.com</p>
            <p><img src="img/facebook-logo.png" onclick="window.open('https://www.facebook.com/AspirReunion')" class="link_fb"> @AspirRéunion </p>
            <p></p>
        </div>
        <div class="legalMention">
            <p><a href="mentionlegal.html">Mentions légales</a></p>
        </div>
    </footer>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="libs/leaflet/leaflet.css">
    <link rel="stylesheet" href="libs/leaflet/leaflet.draw.css">
    <link rel="stylesheet" href="libs/leaflet/Leaflet.StyleEditor.css">    
</head>
<body> 
    <div class='menuMap'>
        <div class='CapMenu'><span class='CapName'><a href="/ucheba.html">Dashboard</a></span></div>
        <div class='contentMenu'><span id="geoContent"></span>
            <hr>линия
            <span id="geoContentLine"></span>
            <hr>многоугольник
            <hr>маркер
            
        </div>
        <div class='btnMenu'><input type="submit"></div>
        
    </div>
    <div id="map" class="mappanel"></div>
    <script type="text/javascript" src="libs/leaflet/leaflet.js"></script>    
    <script type="text/javascript" src="libs/leaflet/leaflet.draw.js"></script>    
    <script type="text/javascript" src="libs/leaflet/Leaflet.StyleEditor.js"></script>    
    <script type="text/javascript" src="libs/jquery/jquery-3.1.0.min.js"></script>    
    <script type="text/javascript" src="geo.js"></script>    
    <script type="text/javascript" src="script.js"></script>    
</body>
</html>
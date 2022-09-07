<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Карта звездного неба по дате для печати</title>
  <link rel="stylesheet" href="star.css">
	<link href="dist/css/datepicker.min.css" rel="stylesheet" type="text/css">
	<link rel="stylesheet" href="switch/toggle-switch.css?1592418080">
  <link href="https://cdn.jsdelivr.net/npm/suggestions-jquery@19.4.2/dist/css/suggestions.min.css" rel="stylesheet" />
</head>
<body>
  <div class='workContainer'>
    <div class="infoContainer"><h1>звездная карта  <a href="/starmap/starmapOnline.php">онлайн</a></h1></div>
    
    <div class='optionsContainer'>
      <div class='geoOption options'>
        <input type="text" placeholder='укажите место события'> 
      </div>

      <div  type='text' class="datepicker-here options" data-timepicker="true"></div>

      <div class='compasOption options'>
        <input id='setting1' name='compasBut' type="radio" onchange="showcompass();">
        <label for="setting1">Компас</label>
        <input id='setting2' name='compasBut' type="radio" onchange="removecompassarc();" checked>
        <label for="setting2">Без компаса</label>
      </div>

      <div class='conselledOption options'>
        <input id='setting3' name='conselledBut' type="radio" onchange="showCaptionConselled();">
        <label for="setting3">Созвездия</label>
        <input id='setting4' name='conselledBut' type="radio" onchange="hideCaptionConselled();" checked>
        <label for="setting4">Без созвездий</label>         
      </div>

      <div class='conselledCaptionOption options' style="display: none;">
        <input id='setting7' class='conselledCaptionBut' name='conselledCaptionBut' type="radio">
        <label for="setting7">Подписать созвездия</label>
        <input id='setting8' class='conselledCaptionBut' name='conselledCaptionBut' type="radio" checked>
        <label for="setting8">Не подписывать</label>
      </div>

      <div class='planetOption options'>
        <input id='setting5' name='planetsBut' type="radio">
        <label for="setting5">Подписать планеты и яркие звезды</label>
        <input id='setting6' name='planetsBut' type="radio" checked>
        <label for="setting6">Не подписывать</label>
      </div>

      <div class='frameWoodenOption options'>
        <input id='setting9' name='frameWoodenBut' type="radio" onchange="showframe();" checked>
        <label for="setting9">Нарисовать рамку по периметру</label>
        <input id='setting10' name='frameWoodenBut' type="radio" onchange="showframe();">
        <label for="setting10">Не рисовать</label>
      </div>

      <div class='textOption options'>
        <p>Основной текст</p>
        <textarea class='text-input' name="text-input" id="text-input" maxlength="75"  cols="30" rows="3" oninput="get_title()">Текст подписи</textarea>
        <p>Уточните место события (не обязательно)</p>
        <textarea class='location-input' name="location-input" id="location-input" maxlength="75"  cols="30" rows="3" oninput="get_location()">test</textarea>
      </div>
    </div>  

    <div class="vsego">
      <div class="mapContainer">
        <img id='rama' src='black-frame-portrait.png' class='rama'> 
        <div class="frame" id="layer_main">
          <div id="arc" style="display:none;"><img class='compasSize' src="kompasb.png" alt=""></div>
          <div id="starmap" style="width:515px;height:515px;"></div>
          <p class="text title" id="title">Текст подписи</p>
          <p class="text location" id="location"><span id="location-string">Москва</span>, <span id="coord_lat"></span> <span id="coord_lng"></span></p>
          <p class="text date" id="date_l"></p>
          <div id="frame"></div>
          <div class="starMapRound"></div>
        </div>
      </div>
    </div>


    
  </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/suggestions-jquery@19.4.2/dist/js/jquery.suggestions.min.js"></script>
  <script src='libs/stuquery.js'></script>
  <script src='libs/virtualsky.js' type="text/javascript"></script>
  <script src="dist/js/datepicker.min.js"></script>
  <script src='sky.js' type="text/javascript"></script>
</body>
</html>

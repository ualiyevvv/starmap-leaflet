

/*
<meta content='width=1260' name='viewport'>
    <link rel="icon" type="image/png" href="https://in-space.ru/favicon_2.png?v=5" />
    <title>Карта звездного неба по дате для печати от Ин-Спейс</title> 
    <meta name="description" itemprop="description" content="Карта звездного неба по дате для печати. Лучший уникальный подарок себе и близким." />
    <meta name="keywords" itemprop="keywords" content="карта звездного неба в определенный день,карта звездного неба бесплатно,карта звезд в подарок,карта неба для печати,карта звездного неба купить" />   
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="stuquery.min.js"></script>
	<script src="virtualsky.js?=1595363486" type="text/javascript"></script>
	<link href="dist/css/datepicker.min.css" rel="stylesheet" type="text/css">
	<link rel="stylesheet" href="switch/toggle-switch.css?1595363486">
    <script src="dist/js/datepicker.js"></script>
    <link rel="stylesheet" href="sky.css?v=1595363486" />
    <script src="preset.js?1595363486"></script>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700&display=swap&subset=cyrillic,cyrillic-ext,latin-ext" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/suggestions-jquery@19.4.2/dist/css/suggestions.min.css" rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/suggestions-jquery@19.4.2/dist/js/jquery.suggestions.min.js"></script>

*/




Date.prototype.format = function(format = 'yyyy-mm-dd') {
    const replaces = {
        yyyy: this.getFullYear(),
        mm: ('0'+(this.getMonth() + 1)).slice(-2),
        dd: ('0'+this.getDate()).slice(-2),
        hh: ('0'+this.getHours()).slice(-2),
        MM: ('0'+this.getMinutes()).slice(-2),
        ss: ('0'+this.getSeconds()).slice(-2)
    };
    let result = format;
    for(const replace in replaces){
        result = result.replace(replace,replaces[replace]);
    }
    return result;
};
var arr=[
   'января',
   'февраля',
   'марта',
   'апреля',
   'мая',
   'июня',
   'июля',
   'августа',
   'сентября',
   'октября',
   'ноября',
   'декабря',
];

var lang = 'ru';
var bgcolor = '#ffffff';
var starbgcolor = '#000000';
var star = '#f2e7db';
var planetarium;
var lat = 55.7522200;
var lng = 37.6155600;
var time;
var gmtoffset;
var skytime = new Date();
var url = 'https://api.timezonedb.com/v2.1/get-time-zone?key=X32BD8EFYZWV&format=json&by=position&lat=' + lat + '&lng=' + lng;
    $.getJSON(url, function(data) {
        if (data['status'] == 'OK') {
        console.log(data);
        time = new Date(data['formatted']);
        skytime = new Date((data['timestamp'] - data['gmtOffset']) * 1000);
        dd = data['formatted'].replace('-','/');
        dd = dd.replace('-','/');
        clock = new Date(dd);
        gmtoffset = data['gmtOffset'];
        caltime = new Date(data['formatted']);
        planetarium = S.virtualsky({
        id: 'starmapper',
        latitude: lat,
        longitude: lng,
        constellations: false,
        constellationlabels: false,
        constellationwidth: 0.8,
        cardinalpoints: false,
        fontsize: '8px',
        showplanets: true,
        showplanetlabels: false,
        fontfamily: 'Phenomena-Regular',
        showdate: true,
        showposition: false,
        gridlines_eq: false,
        ecliptic: false,
        lang: 'ru',
        projection: 'polar',
        keyboard: false,
        clock: skytime,
    });
    myDatepicker = $('.datepicker-here').datepicker().data('datepicker');
    myDatepicker.selectDate(clock);
    if (lang == 'ru') {
    document.getElementById('date_l').innerHTML = skytime.format('dd ') + arr[skytime.format('mm') - 1] + skytime.format(' yyyy года');
    }
    if (lang == 'en') {
    document.getElementById('date_l').innerHTML = skytime.format('dd ') + arr[skytime.format('mm') - 1] + skytime.format(' yyyy');
    }
    la = lat.toString().replace('.','');
    la = la.toString().replace('-','');
    ln = lng.toString().replace('.','');
    ln = ln.toString().replace('-','');
    if (lat > 0) {
        if (lat >= 10) {
            document.getElementById('coord_lat').innerHTML = la.toString().substr(0, 2) + '&#176;'+ la.toString().substr(2, 2) + "'" + la.toString().substr(4, 2) + "''N";
        } else {
            document.getElementById('coord_lat').innerHTML = la.toString().substr(0, 1) + '&#176;'+ la.toString().substr(1, 2) + "'" + la.toString().substr(3, 2) + "''N";
        }
    } else {
        if (lat < 10) {
            document.getElementById('coord_lat').innerHTML = la.toString().substr(0, 2) + '&#176;'+ la.toString().substr(2, 2) + "'" + la.toString().substr(4, 2) + "''S";
        } else {
            document.getElementById('coord_lat').innerHTML = la.toString().substr(0, 1) + '&#176;'+ la.toString().substr(1, 2) + "'" + la.toString().substr(3, 2) + "''S";    
        }
    }
    if (lng > 0) {
        if (lng >= 10) {
            document.getElementById('coord_lng').innerHTML = ln.toString().substr(0, 2) + '&#176;'+ ln.toString().substr(2, 2) + "'" + ln.toString().substr(4, 2) + "''E";
        } else {
            document.getElementById('coord_lng').innerHTML = ln.toString().substr(0, 1) + '&#176;'+ ln.toString().substr(1, 2) + "'" + ln.toString().substr(3, 2) + "''E";
        }
    } else {
         if (lng < 10) {
            document.getElementById('coord_lng').innerHTML = ln.toString().substr(0, 2) + '&#176;'+ ln.toString().substr(2, 2) + "'" + ln.toString().substr(4, 2) + "''W"; 
         } else {
            document.getElementById('coord_lng').innerHTML = ln.toString().substr(0, 1) + '&#176;'+ ln.toString().substr(1, 2) + "'" + ln.toString().substr(3, 2) + "''W";  
         }
    }
        } 
    });
    
    
    
    
    
$("#address").suggestions({
	token: "e092968e381a9a37a88c379c7b74469344dd3549",
	type: "ADDRESS",
	hint: false,
	bounds: "city-settlement",
	minChars: 3,
	count: 3,
	constraints: {
		label: "",
		locations: {
			country: "*"
		}
	},
	onSelect: function (suggestion) {
	    console.log (suggestion.data);
		if (suggestion.data.city === null) {$type = suggestion.data.settlement_type_full} else {$type = suggestion.data.city_type_full};
	   		var lat = suggestion.data.geo_lat;
    		var lng = suggestion.data.geo_lon;
    		var url = 'https://api.timezonedb.com/v2.1/get-time-zone?key=X32BD8EFYZWV&format=json&by=position&lat=' + lat + '&lng=' + lng;
            $.getJSON(url, function(data) {
                if (data['status'] == 'OK') {
                    document.getElementById('go_step_2').style.display = 'inline';
                    time = new Date(data['formatted']);
                    dd = data['formatted'].replace('-','/');
                    dd = dd.replace('-','/');
                    clock = new Date(dd);
                    skytime.setTime((data['timestamp'] - data['gmtOffset']) * 1000);
                    planetarium.setLongitude(lng);
                    planetarium.setLatitude(lat);
                    planetarium.updateClock(skytime);
                    planetarium.draw
                    myDatepicker = $('.datepicker-here').datepicker().data('datepicker');
                    myDatepicker.selectDate(clock);
                    if (suggestion.data.city === null) {
                    document.getElementById('location-input').value = suggestion.data.settlement;
                    document.getElementById('location').innerHTML = suggestion.data.settlement;
                    } else {
                    document.getElementById('location-input').value = suggestion.data.city;
                    document.getElementById('location').innerHTML = suggestion.data.city;
                    }
                    la = lat.toString().replace('.','');
                    la = la.toString().replace('-','');
                    ln = lng.toString().replace('.','');
                    ln = ln.toString().replace('-','');
                    console.log(lat);
                    console.log(lng);
                    if (lat > 0) {
                        if (lat >= 10 && lat < 100) {
                            h = la.toString().substr(0, 2);
                            m = la.toString().substr(2, 2) * 60; m = m.toString().substr(0,2);
                            s = la.toString().substr(4, 2) * 3600; s = s.toString().substr(0,2);
                            document.getElementById('coord_lat').innerHTML = h + '&#176;'+ m + "'" + s + "''N";
                        } 
                        
                        if (lat < 10) {
                            h = la.toString().substr(0, 1);
                            m = la.toString().substr(1, 2) * 60; m = m.toString().substr(0,2);
                            s = la.toString().substr(3, 2) * 3600; s = s.toString().substr(0,2);
                            document.getElementById('coord_lat').innerHTML = h + '&#176;'+ m + "'" + s + "''N";
                        }
                        
                        if (lat >= 100) {
                            h = la.toString().substr(0, 3);
                            m = la.toString().substr(3, 2) * 60; m = m.toString().substr(0,2);
                            s = la.toString().substr(5, 2) * 3600; s = s.toString().substr(0,2);
                            document.getElementById('coord_lat').innerHTML = h + '&#176;'+ m + "'" + s + "''N";
                        }
                        
                    } else {
                         if (lat <= -10 && lat > -100) {
                            h = la.toString().substr(0, 2);
                            m = la.toString().substr(2, 2) * 60; m = m.toString().substr(0,2);
                            s = la.toString().substr(4, 2) * 3600; s = s.toString().substr(0,2);
                            document.getElementById('coord_lat').innerHTML = h + '&#176;'+ m + "'" + s + "''S";
                        } 
                        if (lat > -10) {
                            h = la.toString().substr(0, 1);
                            m = la.toString().substr(1, 2) * 60; m = m.toString().substr(0,2);
                            s = la.toString().substr(3, 2) * 3600; s = s.toString().substr(0,2);
                            document.getElementById('coord_lat').innerHTML = h + '&#176;'+ m + "'" + s + "''S";
                        }
                        
                        if (lat <= -100) {
                            h = la.toString().substr(0, 3);
                            m = la.toString().substr(3, 2) * 60; m = m.toString().substr(0,2);
                            s = la.toString().substr(5, 2) * 3600; s = s.toString().substr(0,2);
                            document.getElementById('coord_lat').innerHTML = h + '&#176;'+ m + "'" + s + "''S";
                        } 
                        
                    }
                    if (lng > 0) {
                        if (lng >= 10 && lng < 100) {
                            h = ln.toString().substr(0, 2);
                            m = ln.toString().substr(2, 2) * 60; m = m.toString().substr(0,2);
                            s = ln.toString().substr(4, 2) * 3600; s = s.toString().substr(0,2);
                            document.getElementById('coord_lng').innerHTML = h + '&#176;'+ m + "'" + s + "''E";
                        } 
                        if (lng < 10) {
                            h = ln.toString().substr(0, 1);
                            m = ln.toString().substr(1, 2) * 60; m = m.toString().substr(0,2);
                            s = ln.toString().substr(3, 2) * 3600; s = s.toString().substr(0,2);
                            document.getElementById('coord_lng').innerHTML = h + '&#176;'+ m + "'" + s + "''E";
                        }
                        
                        if (lng >= 100) {
                            h = ln.toString().substr(0, 3);
                            m = ln.toString().substr(3, 2) * 60; m = m.toString().substr(0,2);
                            s = ln.toString().substr(5, 2) * 3600; s = s.toString().substr(0,2);
                            document.getElementById('coord_lng').innerHTML = h + '&#176;'+ m + "'" + s + "''E";
                        } 
                    } else {
                        
                        if (lng <= -10 && lng > -100) {
                            h = ln.toString().substr(0, 2);
                            m = ln.toString().substr(2, 2) * 60; m = m.toString().substr(0,2);
                            s = ln.toString().substr(4, 2) * 3600; s = s.toString().substr(0,2);
                            document.getElementById('coord_lng').innerHTML = h + '&#176;'+ m + "'" + s + "''W"; 
                        } 
                        
                        if (lng > -10) {
                            h = ln.toString().substr(0, 1);
                            m = ln.toString().substr(1, 2) * 60; m = m.toString().substr(0,2);
                            s = ln.toString().substr(3, 2) * 3600; s = s.toString().substr(0,2);
                            document.getElementById('coord_lng').innerHTML = h + '&#176;'+ m + "'" + s + "''W"; 
                        }
                        
                         if (lng <= -100) {
                            h = ln.toString().substr(0, 3);
                            m = ln.toString().substr(3, 2) * 60; m = m.toString().substr(0,2);
                            s = ln.toString().substr(5, 2) * 3600; s = s.toString().substr(0,2);
                            document.getElementById('coord_lng').innerHTML = h + '&#176;'+ m + "'" + s + "''W"; 
                        }
                    }
                    
                    
                }
            });
	}
});
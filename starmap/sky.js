var planetarium;
var planetariumOnline;

S(document).ready(function() {

	planetariumOnline= S.virtualsky({
        id: 'starmapper',
        constellations: true,
        lang: 'ru',
        projection: 'stereo',
        objects: "libs/objects.json",
        power:false,
        showgalaxy: true,
        live: true
	});

});

S(document).ready(function() {

	planetarium = S.virtualsky({
        id: 'starmap',
        constellations: true,
        lang: 'ru',
        projection: 'polar',
        keyboard : true,
        power:false,
        gradient:false,
        //transparent:true,
        showgalaxy:true,
        });
        planetarium.col.stars = 'green';

});
$('.datepicker-here').datepicker(/*{
        onSelect: function(formattedDate, date, inst){
            if(date) {
                date1 = clock;
                console.log(date1)
                date2 = new Date(date);
                console.log(date2);
                timeDiff = date2.getTime() - date1.getTime();
                clock = date2;
                diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
                planetarium.setClock(+(timeDiff/1000)).calendarUpdate()
                time.setSeconds(time.getSeconds() + (timeDiff/1000));
                if (lang == 'ru') {
                document.getElementById('date_l').innerHTML = date.format('dd ') + arr[date.format('mm') - 1] + date.format(' yyyy года');
                }
                if (lang == 'en') {
                document.getElementById('date_l').innerHTML = arr[date.format('mm ') - 1] + date.format(' dd') + ', ' + date.format(' yyyy');
                }
                if (lang == 'fr') {
                document.getElementById('date_l').innerHTML = date.format('dd ') + arr[date.format('mm') - 1] + date.format(' yyyy');
                }
                if (lang == 'de') {
                document.getElementById('date_l').innerHTML = date.format('dd. ') + arr[date.format('mm') - 1] + date.format(' yyyy');
                }
                planetarium.drawPlanets;
            }
        },
    }*/)

    function get_title() {
        let val = document.getElementById('text-input').value;
        document.getElementById('title').innerHTML = val;
    }
    function get_location() {
        let val = document.getElementById('location-input').value;
        document.getElementById('location-string').innerHTML = val;
    }


    function showCaptionConselled() {
        let val1 = document.getElementById('setting3');
        if(val1.checked){
                $('.conselledCaptionOption').css('display' , 'block');
        }
    }
    function hideCaptionConselled() {
        let val2 = document.getElementById('setting4');
        if(val2.checked){
                $('.conselledCaptionOption').css('display' , 'none');
        }
    }


    var compass_arc ='compass';
    var color_layer_bg ='#f4e7dd';

    function showcompass() {
        let el = document.getElementById("setting1");
        if(el.checked){
                $('#arc').css('display' , 'block');
        }
        /*
        document.getElementById('arc').style.opacity = 0;
        compass_arc = 'compass';
        */
    }
    
    function showarc() {
           
        /*document.getElementById('arc').style.borderColor = color_arc;
        document.getElementById('arc').style.borderColor = color_layer_bg;
        document.getElementById('arc').style.borderWidth = 14;
        document.getElementById('arc').style.margin = '50px 43px';
        document.getElementById('arc').style.opacity = 1;*/
        compass_arc = 'arc';
    }
    
    function removecompassarc() {
        let el = document.getElementById("setting2");
        if(el.checked){
                $('#arc').css('display' , 'none');
        }
        /*
        document.getElementById('arc').style.borderColor = color_layer_bg;
        document.getElementById('arc').style.borderWidth = 20;
        document.getElementById('arc').style.margin = "44px 37px";
        document.getElementById('arc').style.opacity = 1;*/
        compass_arc = 'false';
    }

    function showframe() {
        let el = document.getElementById("setting9");
        if(el.checked){
                $('#frame').css('display' , 'block');
        }else{
                $('#frame').css('display' , 'none');
        }     
    }
/*
    function showframe() {
        switch(show_frame) {
         case '1':
             show_frame = '0';
             frame = 'false';
             document.getElementById('frame').style.borderColor = "#ffffff00";
             break;
         case '0':
             show_frame = '1';
             frame = 'true';
             document.getElementById('frame').style.borderColor = color_frame;
             break;
         default:
        }
     }*/
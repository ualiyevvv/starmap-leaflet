// перевод рисовалки на русский язык
const drawToolbar = {
    actions: {
        title: "Отменить рисование",
        text: "Отмена",
    },
    finish: {
        title: "Завершить рисование",
        text: "Завершить",
    },
    undo: {
        title: "Удалить последнюю нарисованную точку",
        text: "Удалить последнюю точку",
    },
    buttons: {
        polyline: "Нарисовать полилинию",
        polygon: "Нарисовать полигон",
        rectangle: "Нарисовать прямоугольник",
        circle: "Нарисовать круг",
        marker: "Поставить метку",
        circlemarker: "Поставить круговую метку",
    },
};

const drawHandlers = {
    circle: {
        tooltip: {
            start: "Кликните и перетащите для того, чтобы нарисовать круг.",
        },
        radius: "Радиус",
    },
    circlemarker: {
        tooltip: {
            start: "Кликните на карту для установки точки.",
        },
    },
    marker: {
        tooltip: {
            start: "Кликните на карту для установки точки.",
        },
    },
    polygon: {
        tooltip: {
            start: "Кликните, чтобы начать рисовать контур.",
            cont: "Кликните, чтобы завершить рисовать контур.",
            end: "Кликните на первую точку, чтобы завершить рисование контура.",
        },
    },
    polyline: {
        error: "<strong>Ошибка:</strong> линия не может самопересекаться!",
        tooltip: {
            start: "Кликните, чтобы начать рисовать линию.",
            cont: "Кликните, чтобы завершить рисование линии.",
            end: "Кликните на последнюю точку, чтобы завершить рисование линии.",
        },
    },
    rectangle: {
        tooltip: {
            start: "Кликните и перетащите, чтобы нарисовать прямоугольник.",
        },
    },
    simpleshape: {
        tooltip: {
            end: "Отпустите кнопку мыши для завершения рисования.",
        },
    },
};

const editToolbar = {
    actions: {
        save: {
            title: "Сохранить изменения.",
            text: "Сохранить",
        },
        cancel: {
            title: "Отменить редактирование, откатить все изменения.",
            text: "Отмена",
        },
        clearAll: {
            title: "Очистить все редактируемые слои.",
            text: "Очистить всё",
        },
    },
    buttons: {
        edit: "Редактировать.",
        editDisabled: "Нет слоёв для редактирования.",
        remove: "Удалить.",
        removeDisabled: "Нет слоёв для удаления.",
    },
};

const editHandlers = {
    edit: {
        tooltip: {
            text: "Перетащите вершины или точки для редактирования фигуры.",
            subtext: 'Нажмите "Отмена", чтобы откатить изменения.',
        },
    },
    remove: {
        tooltip: {
            text: "Кликните на фигуру для удаления",
        },
    },
};

L.drawLocal = {
    draw: {
        toolbar: drawToolbar,
        handlers: drawHandlers,
    },
    edit: {
        toolbar: editToolbar,
        handlers: editHandlers,
    },
};
//----перевод закончился----

var center = [51.222269, 51.401335];
var mbUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
// var mbUrl = "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png";
var streets = L.tileLayer(mbUrl, {
    id: 'mapbox.streets'
});

var mapboxUrl = 'https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieGNoamp2ZyIsImEiOiJjazd1YmwyOHowMXQwM29tb2dzaHF4c3o3In0.0TsgUa5BnaPGlx5mcGPVFg';

var MBaccessToken = 'pk.eyJ1IjoieGNoamp2ZyIsImEiOiJjazd1YmwyOHowMXQwM29tb2dzaHF4c3o3In0.0TsgUa5BnaPGlx5mcGPVFg';

//---------смена спутника----------

$('.street').click(function () {
    if (map.hasLayer(streets)) {
        map.removeLayer(streets);
        map.addLayer(streets);
    } else {
        map.addLayer(streets);
    }
});

$('.satellite').click(function () {
    if (map.hasLayer(satellite)) {
        map.removeLayer(satellite),
            map.addLayer(satellite)
    } else {
        map.addLayer(satellite);
    }
});

//----------------------------------

var satellite = L.tileLayer(mapboxUrl, {
    maxZoom: 18,
    id: 'mapbox.satellite',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: MBaccessToken
});

var map = L.map('map', {
    center: center,
    zoom: 11,
    layers: [streets],
    worldCopyJump: true,
});

L.marker(center).addTo(map);

//инициализируем слой на котором содержатся нарисованные обьекты, чтобы появилась возможность редактировать и удалять объекты	
var editableLayers = new L.FeatureGroup();
map.addLayer(editableLayers);

//настройки рисовалки
var drawPluginOptions = {
    position: 'topright',

    draw: {
        polyline: {
            metric: true
        },
        polygon: {

            showArea: true,
            shapeOptions: {
                color: '#97009c',
            },
            allowIntersection: false, // Restricts shapes to simple polygons
            drawError: {
                color: '#e1e100', // Color the shape will turn when intersects
                message: '<strong>Вы не можете рисовать так' // Message that will show when intersect
            },

        },

    },
    edit: {
        featureGroup: editableLayers, //REQUIRED!!
        remove: true,
    }
};
//-----настройки рисовалки закончились-----
var stylePluginOptions = {
    position: 'topright',
    //colorRamp: ['#1abc9c', '#2ecc71', '#3498db'],
    //markers: ['circle-stroked', 'circle', 'square-stroked', 'square']
    openOnLeafletDraw : true,
    useGrouping : false,
};

// инициализируем котроллер рисовалки
var drawControl = new L.Control.Draw(drawPluginOptions);
map.addControl(drawControl);

//Initialize the StyleEditor
var styleControl = L.control.styleEditor(stylePluginOptions)
map.addControl(styleControl);

// события рисовалки: "после создания"
map.on('draw:created', function (e) {
    var type = e.layerType,
        layer = e.layer;

    if (type === 'marker') {
        layer.bindPopup('Всплывающая информация');
    }

    editableLayers.addLayer(layer);

    var geojson = editableLayers.toGeoJSON();
    console.log(geojson);
    textOut = JSON.stringify(geojson);
    document.getElementById("geoContent").innerHTML = textOut;

});


//события рисовалки "после редактирования"
map.on('draw:edited', function (e) {
    var layers = e.layers;
    var countOfEditedLayers = 0;
    layers.eachLayer(function (layer) {
        countOfEditedLayers++;
    });
    console.log("Edited " + countOfEditedLayers + " layers");
    var geojson = editableLayers.toGeoJSON();
    console.log(geojson);
});

L.control.scale().addTo(map);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);



$(".btnMenu").click(function(){
    testttt = editableLayers.getLayers();
    document.getElementById("geoContentLine").innerHTML = testttt;
   // layer.setStyle({fillColor :'blue'}) 
    
});




map.on('styleeditor:changed', function(element){
    var stylejson = element.toGeoJSON();
    texsstOut = JSON.stringify(stylejson);
    document.getElementById("geoContentLine").innerHTML = texsstOut;
});
L.geoJSON(neosvesh, {
    // onEachFeature: myFunction  // Применяет функцию к каждому обьекту
     // style: myStyle  добавление стилей обьекту
 }).addTo(map);
 var selectedFeature = null;

$(".leaflet-draw-edit-edit").click(function onEachFeature (feature, layer) {
    editableLayers.addLayer(layer);
     layer.on('click', function(e){
          if(selectedFeature)
               selectedFeature.editing.disable();
          selectedFeature = e.target;
          e.target.editing.enable();
     });
});
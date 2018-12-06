     function initMap() {
        // Styles a map in night mode.
        var map = new google.maps.Map(document.getElementById('map'), {
          center:  {lat: 53.5573, lng: 9.97165},
          zoom: 18,
          
		  
		  styles: [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": ""
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#e0e0e0"
            },
            {
                "visibility": "on"
            }
        ]
    }
]

	   });
     
 	// Создаем маркер на карте
   var marker = new google.maps.Marker({

    // Определяем позицию маркера
    position: {lat: 53.5573, lng: 9.97165},

     

     // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
 
              
                // Укажем свою иконку для маркера
                icon: 'images/1fff.png'
 	});
     // Создаем наполнение для информационного окна
    var contentString = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading"><font  color="#606060">Dr. med. JOACHIM GOTTBERG</font></h4>'+
          '<div id="bodyContent">'+
          '<p><font color="#606060">HAUSARZTPRAXIS</font></p>' +
          ' <h6><font color="#606060">Adresse:Feldstraße 44, 20357 Hamburg</font></h6>' +
			
          '</div>'+
          '</div>';

    // Создаем информационное окно
    var infowindow = new google.maps.InfoWindow({
       content: contentString,

	   maxWidth: 400
       
	});

    // Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

	 }
     function initMap() {
        // Styles a map in night mode.
        var map = new google.maps.Map(document.getElementById('map'), {
          center:  {lat: 53.5573, lng: 9.97165},
          zoom: 15,
          
		  
		  styles: [
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#7b9a9c"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#a8bbbd"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#a7bbbd"
            }
        ]
    },
    {
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "weight": 0.3
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e0e0e0"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#8aa5a7"
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
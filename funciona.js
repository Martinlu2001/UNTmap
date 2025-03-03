function iniciarmap(){
    
    var map;
    var bounds=new google.maps.LatLngBounds();
    var mapOptions={
        mapTypeId: 'roadmap'
    };
    map=new google.maps.Map(document.getElementById('map'), mapOptions);
    map.setTilt(50);
    var markers=[['Informatica', -8.112820,-79.037969 ],
    ['Escuela de posgrado',-8.1143702,  -79.0379011]
    ];
    var infoWindowContent=[[],
    ];
    var infoWindow = new google.maps.InfoWindow(),marker,i;
    for (i=0;i<markers.length;i++){
        var position = new google.maps.LatLng(markers[i][1],markers[i][2]);
        bounds.extend(position);
        marker=new google.maps.Marker({
            position:position,
            map: map,
            title:markers[i][0]
        });
        google.maps.event.addListener(marker,'click', (function(marker,i){
            return function(){
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map,marker);

            }
        })(marker,i));
        map.fitBounds(bounds);
    }
    var boundsListener = google.maps.event.addListener((map),'bounds_changed',function(event){
        this.setZoom(18);
        google.maps.event.removeListener(boundsListener);
    });

    
}
window.iniciarmap=iniciarmap;
/*'<div class="info_content">' +
    '<h2>Escuela de informatica</h2>' +
    '<h3>3er piso de la escuela de fisica</h3>' +
    '<p>sadu el cuack</p>' + 
'</div>'*/


//la primera version de los marcadores

/*var coord={lat:-8.1140791, lng: -79.0383537};
    var coord1={lat:-8.112820, lng: -79.037969};
    var map = new google.maps.Map(document.getElementById('map'), {zoom:18, center:coord});
    var marker =new google.maps.Marker({position: coord,
    map:map
    })
    var maker1=new google.maps.Marker({position: coord1,
        map:map, label:'INFORMATICA', title:'Escuela de informatica'
    })
    var infoWindowContent = ['hola mundo'];
    var infoWindow = new google.maps.infoWindow(),marker;
    var position = new google.maps.LatLng(marker)
    bounds.extend(position);
    //hola = new google.maps,Marker
    google.maps.event.addListener(marker,'click', (function(marker){
        return function(){
            infoWindow.setContent(infoWindowContent);
            infoWindow.open(map,marker);
        }
    })(marker));*/

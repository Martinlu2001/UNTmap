let map;
let markers=[];
//crea los marcadores y muestra la informacion
// <div class="phone">
        //     <i class="fa-solid fa-phone" style="color: #131416;"></i>
        //     <h3> ${phone} </h3>
        // </div>
const createMarker=(coord,name,address,image,image1,image2)=>{
    let html= `
    <div class="window"> 
        <h2> ${name} </h2>
        <div class="address"> 
            <i class="fa-solid fa-location-dot" style="color: #1f2123;"></i>
            <h3> ${address} </h3>
        </div>
        
        <div class="image">
            <img src="${image}">
            <img src="${image1}">
            <img src="${image2}">
        </div>
    </div>
    `
    //`<h3> ${name} </h3> `
    const icono = {
        
        url:'alfiler.png',
        scaledSize: new google.maps.Size(45, 45), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };
    const marker=new google.maps.Marker({
        position:coord,
        map:map,
        icon:icono
    })
    google.maps.event.addListener(marker,"click",()=>{
        infoWindow.setContent(html);
        infoWindow.open(map,marker);
    })
    markers.push(marker)
}

//obtiene la informacion de la data
const createLocationMarkers=()=>{
    puntos.forEach(punto=>{
        let coord=new google.maps.LatLng(punto.lat,punto.lng);
        let name=punto.name;
        let address=punto.address;
        //let phone=punto.phone;
        let image=punto.image[0];
        let image1=punto.image[1];
        let image2=punto.image[2];
        createMarker(coord,name,address,image,image1,image2);
    })
}

//muestra las escuelas de acuerdo a la data cuando se despliega el submenu
const displayPuntosList=()=>{
     let puntoHTML="";
     let puntoHTML1="";
     let jajaja="";
    // puntos.forEach(puntito=>{
    //     jajaja +=`<li class="a">${puntito.name}</li>`;
    // })
    // document.getElementById("all-list").innerHTML=jajaja;
    //puntos-length
    for (let i = 0; i <= 10; i++) {
        const punto = puntos[i];
        puntoHTML1 += `<h4 class="hola">${punto.name}</h4>`;
    }
    document.getElementById("sublist1").innerHTML=puntoHTML1;
    for (let i = 11; i <= 46; i++) {
        const punto = puntos[i];
        puntoHTML += `<h4 class="hola">${punto.name}</h4>`;
    }
    document.getElementById("sublist").innerHTML=puntoHTML;
    
}
//al dar click sucede el evento
//se muestra la informacion y el dibujo de poligono
let BucaramangaPolygon;
const setListener=()=>{
    document.querySelectorAll(".hola").forEach((puntoName,index)=>{
        puntoName.addEventListener("click",()=>{
            google.maps.event.trigger(markers[index],"click");
            if (BucaramangaPolygon) {//si existe un poligono
                BucaramangaPolygon.setMap(null);
            }
            let vectorcoordenadas=[];
            let i=0;
            switch(index){
                case 0:
                        i=0;
                    break;
                case 1:
                    i=1;
                
                    break;
                case 2:
                    i=2;
                   
                    break;
                case 3:
                    i=3;
                    break;
                case 4:
                    i=4;
                    break;
                case 5:
                    i=5;
                    break;
                case 6:
                    i=6;
                    break;
                case 7:
                    i=7;
                    break;

                case 8:
                    i=8;
                    break;

                case 9:
                    i=9;
                    break;

                case 10:
                    i=10;
                    break;
                case 11:
                    i=11;
                    break;
                case 12:
                    i=12;
                    break;
                case 13:
                    i=13;
                    break;
                case 14:
                    i=14;
                    break;
                case 15:
                    i=15;
                    break;
                case 16:
                    i=16;
                    break;
                case 17:
                    i=17;
                    break;
                case 18:
                    i=18;
                    break;
                case 19:
                    i=19;
                    break;
                case 20:
                    i=20;
                    break;
                case 21:
                    i=21;
                    break;
                case 22:
                    i=22;
                    break;
                case 23:
                    i=23;
                    break;
                case 24:
                    i=24;
                    break;
                case 25:
                    i=25;
                    break;
                case 26:
                    i=26;
                    break;
                case 27:
                    i=27;
                    break;
                case 28:
                    i=28;
                    break;
                case 29:
                    i=29;
                    break;
                case 30:
                    i=30;
                    break;
                case 31:
                    i=31;
                    break;
                case 32:
                    i=32;
                    break;
                case 33:
                    i=33;
                    break;
                case 34:
                    i=34;
                    break;
                case 35:
                    i=35;
                    break;
                case 36:
                    i=36;
                    break;
                case 37:
                    i=37;
                    break;
                case 38:
                    i=38;
                    break;
                case 39:
                    i=39;
                    break;
                case 40:
                    i=40;
                    break;
                case 41:
                    i=41;
                    break;
                case 42:
                    i=42;
                    break;
                case 43:
                    i=43;
                    break;
                case 44:
                    i=44;
                    break;
                case 45:
                    i=45;
                    break;
                case 46:
                    i=46;
                    break;
                case 47:
                    i=47;
                    break;
                case 48:
                    i=48;
                    break;
                case 49:
                    i=49;
                    break;
                case 50:
                    i=50;
                    break;
                case 51:
                    i=51;
                    break;

            }
            let area=puntos[i];

                area.cuadro.forEach(coordenada=>{
                    vectorcoordenadas.push({ lat: coordenada.lat, lng: coordenada.lng });
                })
                BucaramangaPolygon = new google.maps.Polygon({
                    paths: vectorcoordenadas,
                    strokeColor: '#FF0000',
                    strokeOpacity: 0.8,
                    strokeWeight: 3,
                    fillColor: '#FF0000',
                    fillOpacity: 0.35
                });
                BucaramangaPolygon.setMap(map);
                
        })
    })
}

//inicializa el mapa
function iniciarmap(){
    let ciudad = {lat:-8.1143702,lng:-79.0379011}
    map=new google.maps.Map(document.getElementById("map"),{
        center: ciudad,
        zoom:18
    })
    // var obj={
    //             map:map
    //         }
    //         var obj1={
    //             origin:new google.maps.LatLng(-8.1143702,-79.0379011),
    //             destination:new google.maps.LatLng(-8.112820, -79.037969),
    //             travelMode: google.maps.TravelMode.WALKING
    //         }
    //         var directionsService = new google.maps.DirectionsService();
    //         var directionsRenderer = new google.maps.DirectionsRenderer(obj);

    //         directionsService.route(obj1,funcionr);
    //         function funcionr(resultados, status){
    //             if (status == google.maps.DirectionsStatus.OK) {
    //                         directionsRenderer.setDirections(resultados);
    //                         console.log('si')
    //             }
    //                 else{
    //                         alert('error')
    //                 }
    //         }



    //pintar el area
    // var cuadro=[
    //     {lat:-8.112536,lng: -79.038207},
    //     {lat:-8.112673, lng:-79.038333},
    //     {lat:-8.113055,lng: -79.037878},
    //     {lat:-8.112917,lng: -79.037751},
    //     {lat:-8.112536,lng: -79.038207}
    // ];
    // var BucaramangaPolygon = new google.maps.Polygon({
    //     paths: cuadro,
    //     strokeColor: '#FF0000',
    //     strokeOpacity: 0.8,
    //     strokeWeight: 3,
    //     fillColor: '#FF0000',
    //     fillOpacity: 0.35
    // });
    // BucaramangaPolygon.setMap(map);

    /*geolocalization*/
    // navigator.geolocation.getCurrentPosition(fn_ok,fn_mal);
    // function fn_mal(){
    //     alert('no hay');
    // }
    // function fn_ok(rta){
    //     var lat=rta.coords.latitude;
    //     var lon=rta.coords.longitude;
    //     var gLatLon=new google.maps.LatLng(lat,lon);
    //     const iconoaqui = {
        
    //         url:'estasaqui.png',
    //         scaledSize: new google.maps.Size(50, 50), // scaled size
    //         origin: new google.maps.Point(0,0), // origin
    //         anchor: new google.maps.Point(0, 0) // anchor
    //     };

    //     var marker=new google.maps.Marker({
    //         position:gLatLon,
    //         map:map,
    //         icon:iconoaqui,
    //         title:'usted esta aca',
    //         label:'USTED ESTA AQUI'
    //     })
    //     let dice=`<h2>USTED ESTA AQUI</h2>`
    //     google.maps.event.addListener(marker,"click",()=>{
    //         infoWindow.setContent(dice);
    //         infoWindow.open(map,marker);
    //     })
        
    // }
    
    
    createLocationMarkers();
    infoWindow=new google.maps.InfoWindow();
    displayPuntosList();
    setListener();
}
//obteer la localizacion del usuario
var lat_location;
var lon_location;

function get_my_location(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(fn_ok,fn_mal);
            function fn_mal(){
                alert('no hay');
             }
             function fn_ok(rta){
                 lat_location=rta.coords.latitude;
                 lon_location=rta.coords.longitude;

                var gLatLon=new google.maps.LatLng(lat_location,lon_location);
                const iconoaqui = {
                    url:'estasaqui.png',
                    scaledSize: new google.maps.Size(50, 50), // scaled size
                    origin: new google.maps.Point(0,0), // origin
                    anchor: new google.maps.Point(0, 0) // anchor
                };

                var marker=new google.maps.Marker({
                    position:gLatLon,
                    map:map,
                    icon:iconoaqui,
                    animation:google.maps.Animation.DROP,
                    title:'usted esta aca',
                    label:'USTED ESTA AQUI'
                })
                let dice=`<h2>USTED ESTA AQUI</h2>`
                google.maps.event.addListener(marker,"click",()=>{
                    infoWindow.setContent(dice);
                    infoWindow.open(map,marker);
                })
             }
    }
    // var start= new google.maps.LatLng(-8.112060579569524,-79.03778493848075);
    // var end =new google.maps.LatLng(-8.11472369865675,-79.03686397776752);
    // var request={
    //     origin:start,
    //     destination:end,
    //     travelMode:google.maps.TravelMode.WALKING
    // };
    // directionsService.route(request,function(response,status){
    //     if(status==google.maps.DirectionsStatus.OK){
    //         directionsDisplay.setDirection(response);
    //         directionsDisplay.setMap(map);
    //         directionsDisplay.setOptions({supressMarkers:false});
    //     }
    //     else{
    //         alert("error")
    //     }
    // });
   
}
var directionsRenderer=null;
function draw_route_map(lat_final,long_final){
    let ciudad = {lat:-8.1143702,lng:-79.0379011};
    if (directionsRenderer) {
        directionsRenderer.setMap(null);
      }
    var obj={
        map:map,
        
        zoom:18,
        polylineOptions: {
            strokeColor: '#ff0000' // Cambia el color de la ruta a rojo
          }
    }
    var obj1={
        origin:new google.maps.LatLng(lat_location,lon_location),
        destination:new google.maps.LatLng(lat_final,long_final),
        travelMode: google.maps.TravelMode.WALKING
    }

    var directionsService = new google.maps.DirectionsService();
     directionsRenderer = new google.maps.DirectionsRenderer(obj);

    directionsService.route(obj1,funcionr);
    function funcionr(resultados, status){
        if (status == google.maps.DirectionsStatus.OK) {
                    directionsRenderer.setDirections(resultados);
                    directionsDisplay.setOptions({suppressMarkers:false});
                    console.log('si')
         }
            else{
                     alert('Active Obtener localizacion')
            }
    }
}
//posible ruta
        // var obj={
        //     map:map
        // }
        // var obj1={
        //     origin:new google.maps.LatLng(-8.1143702,-79.0379011),
        //     destination:new google.maps.LatLng(-8.112820, -79.037969),
        //     travelMode: google.maps.TravelMode.WALKING
        // }
        // var directionsService = new google.maps.DirectionsService();
        // var directionsRenderer = new google.maps.DirectionsRenderer(obj);

        // directionsService.route(obj1,funcionr);
        // function funcionr(resultados, status){
        //     if (status == google.maps.DirectionsStatus.OK) {
        //                 directionsRenderer.setDirections(resultados);
        //                 console.log('si')
        //      }
        //         else{
        //                  alert('error')
        //         }
        // }


// var start= new google.maps.LatLng(-8.112060579569524,-79.03778493848075);
    // var end =new google.maps.LatLng(-8.11472369865675,-79.03686397776752);
    // var request={
    //     origin:start,
    //     destination:end,
    //     travelMode:google.maps.TravelMode.WALKING
    // };
    // directionsService.route(request,function(response,status){
    //     if(status==google.maps.DirectionsStatus.OK){
    //         directionsDisplay.setDirection(response);
    //         directionsDisplay.setMap(map);
    //         directionsDisplay.setOptions({supressMarkers:false});
    //     }
    // });











 //ventana de info
    /*const marker=new google.maps.Marker({
        position:ciudad,
        map:map
    })*/






//route drawing
    // const drawRoute = () => {
    //     const directionsService = new google.maps.DirectionsService();
    //     const directionsRenderer = new google.maps.DirectionsRenderer();
    //     directionsRenderer.setMap(map);
    //     const start = new google.maps.LatLng(-8.1143702,-79.0379011);
    //     const end = new google.maps.LatLng(-8.112820, -79.037969);
    //     const request = {
    //       origin: start,
    //       destination: end,
    //       travelMode: google.maps.DirectionsTravelMode.WALKING
    //     };
    //     directionsService.route(request, (result, status) => {
    //       if (status == google.maps.DirectionsStatus.OK) {
    //         directionsRenderer.setDirections(result);
    //         console.log('si')
    //       }
    //       else{
    //         console.log('NO')
    //       }
    //     });
    //   }
      
      
        // const directionsService = new google.maps.DirectionsService();
        // const directionsDisplay = new google.maps.DirectionsRenderer();

        // const drawRoute = (gLatLon, end) => {
        // directionsDisplay.setMap(map);
        // directionsService.route(
        //     {
        //         origin: gLatLon,
        //         destination: ciudad,
        //         travelMode: google.maps.TravelMode.WALKING
        //     },
        //     (response, status) => {
        //     if (status === google.maps.DirectionsStatus.OK) {
        //         directionsDisplay.setDirections(response);
        //     } else {
        //         window.alert('Directions request failed due to ' + status);
        //     }
        //     }
        // );
        // }

        // google.maps.event.addListener(map, 'click', () => {
        //     const end = new google.maps.LatLng(-8.112820, -79.037969);
        //     drawRoute(gLatLon, end);
        // });
        
        // var directionService=new google.maps.DirectionsService;
        // var directionDisplay=new google.maps.DirectionsRenderer;
        // //directionDisplay.setMap(map);
        // var change=function(){
        //     calculateAndDisplayRoute(directionService,directionDisplay);
        // };
        // document.getElementById('sublist').addEventListener('click',change);


        // function calculateAndDisplayRoute(directionService,directionDisplay){
        //     directionService.route({
        //         origin:gLatLon,
        //         destination:coord,
        //         travelMode:google.maps.TravelMode.WALKING
        //     },function(response,status){
        //         if(status==google.maps.DirectionsStatus.OK){
        //             directionDisplay.setDirections(response); 
        //             directionDisplay.setMap(map);
        //         } else{
        //             window.alert('Directions '+ status);
        //         }
               
        //     }
        //     );
        // }
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 12.974044366434306, lng: 77.59139139035503 },
    zoom: 15,
    mapId: 'f0d8a0e86e1e278e'
  });
//Name, Lat, Long, Image, scaled Size Width, Height
  
  const markers = [
    [
      "G-Corp Residences",
      12.931022785487537, 77.63636885547564,
      "apartment.svg",
      38,31,
      3
    ],
    ["Prestige Pinewood",
     12.93154788801992, 77.63453955547568,
     "apartment.svg",
     38,31,
     4
    ],
    ["Arihant Nilaya",
     12.930837699133741, 77.63511599780364,
     "apartment.svg",
     38,31,
     2
    ],
    ["Advaitha Aksha",
    12.926584172831902, 77.64064162663969,
    "apartment.svg",
    38,31,
     3
    ]
    ];
for(let i=0;i<markers.length;i++)
  {
    const currMarker=markers[i];
const marker = new google.maps.Marker({
    position:{ lat: currMarker[1], lng: currMarker[2] } ,
    map,
    title: currMarker[0],
  animation: google.maps.Animation.DROP,
  icon:{
    url: currMarker[3],
  scaledSize: new google.maps.Size(currMarker[4],currMarker[5])
  }
  });

  const infowindow = new google.maps.InfoWindow({
    content: currMarker[0],

  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
}
}

window.initMap = initMap;


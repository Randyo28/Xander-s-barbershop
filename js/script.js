const loader = document.querySelector('.loader');

const main = document.querySelector('.main');

function init() {
  setTimeout(() =>{
    loader.style.opacity = 0;
  loader.style.display = 'none';
    main.style.display = 'block';
  setTimeout(() => main.style.opacity = 1, 50);
}, 2000);
}

init();

//let map;

//function initMap() {
  //map = new google.maps.Map(document.getElementById("map"), {
  //  center: { lat: 40.655270, lng: -73.956490 },
    //zoom: 16
  //});
//}
function initMap() {
  // The location of Uluru
  var xander = {lat: 40.655270, lng: -73.956490};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 17, center: xander});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: xander, map: map});
}
initMap();

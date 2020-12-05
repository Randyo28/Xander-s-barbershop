// const loader = document.querySelector('.loader');
//
// const main = document.querySelector('.main');

// function init() {
//   setTimeout(() =>{
//     loader.style.opacity = 0;
//   loader.style.display = 'none';
//     main.style.display = 'block';
//   setTimeout(() => main.style.opacity = 1, 100);
// }, 2000);
// }
//
// init();

            //Nav-bar//

    function navBar() {
      var x = document.getElementById("navbar");
      if (x.style.display === "flex") {
          x.classList.toggle("change");
          x.style.display = "none";
  } else {
          x.style.display = "flex";
          }
        }


          //Hamburger-transition
        function myFunction(x) {
  x.classList.toggle("change");
}

            //Google-map//


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


//Gsap
const tl = gsap.timeline();

tl.fromTo('.nav-logo',{
  x: -150,
},{
  x:0,
  duration:3,
}
);

tl.fromTo('#navbar',{
  x: 1000,
},{
  x:0,
  duration:3,
},
'>-3'
);

tl.fromTo('.ham-container',{
  x: 150,
},{
  x:0,
  duration:3,
},
'>-3.5'
);

tl.fromTo('.name',{
  opacity:0,
},{
  opacity:1,
},
'>-1'
);



// tl.fromTo('.barbers',{
//   opacity:0,
//   y: 50,
// },{
//   opacity:1,
//   y: 0,
//   stagger: 0.5,
// });

/* Scroll  Animations */
if(screen.width < 480) {
  const tlPhotoScroll = new gsap.timeline()

tlPhotoScroll.fromTo('.barbers', {
  opacity:0,
  y: 50,
}, {
  opacity:1,
  y: 0,
  stagger: 1,
});
const barberElement = document.querySelector('.barbers');

let homeController = new ScrollMagic.Controller();

let serviceScene = new ScrollMagic.Scene({
  triggerElement: '.barbers',
  triggerHook: 1,
  duration:1800
})
.setTween(tlPhotoScroll)
// .addIndicators()
.addTo(homeController)
}
  else{
    const tlPhotoScroll = new gsap.timeline()

  tlPhotoScroll.fromTo('.barbers', {
    opacity:0,
    y: 50,
  }, {
    opacity:1,
    y: 0,
    stagger: 0.2,
  });
  const barberElement = document.querySelector('.barbers');

  let homeController = new ScrollMagic.Controller();

  let serviceScene = new ScrollMagic.Scene({
    triggerElement: '.barbers',
    triggerHook: 1,
    duration: 800 //1800
  })
  .setTween(tlPhotoScroll)
  // .addIndicators()
  .addTo(homeController)
  }

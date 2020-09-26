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
'>-.3'
);

tl.fromTo('.ham-container',{
  x: 150,
},{
  x:0,
  duration:3,
},
'>-3.5'
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
const tlPhotoScroll = new gsap.timeline()

// function debugPercentage() {
//   console.log(tlServicesScroll.progress());
// }
tlPhotoScroll.fromTo('.barbers', {
  opacity:0,
  y: 50,
}, {
  opacity:1,
  y: 0,
  stagger: 0.5,
});
const serviceElement = document.querySelector('.barbers');

let homeController = new ScrollMagic.Controller();

let serviceScene = new ScrollMagic.Scene({
  triggerElement: '.barbers',
  triggerHook: 1,
  duration: 800
})
.setTween(tlPhotoScroll)
.addIndicators()
.addTo(homeController)

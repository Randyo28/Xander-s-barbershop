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
    stagger: 0.5,
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

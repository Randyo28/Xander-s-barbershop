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

tl.fromTo('.icon-hamburger',{
  x: 150,
},{
  x:0,
  duration:3,
},
'>-3.5'
);

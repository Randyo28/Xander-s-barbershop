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



        //Card-button
const btn = document.querySelector('.btn')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const barberOne = document.querySelector('.barber-1')
const barberTwo = document.querySelector('.barber-2')
const barberThree = document.querySelector('.barber-3')
const div = document.createElement("div")
const p = document.createElement("p")
const p2 = document.createElement("p") 
const h5 = document.createElement("h5")
var click = false
 

btn1.addEventListener('click', () => {
            //Barber1 
           
  // barberOne.appendChild(p).appendChild(newText)
  // btn.classList.add("show")
  

  if(barberOne.contains(h5)) {
    barberOne.removeChild(div)
    div.removeChild(h5).innerText = 'Hours Available: 10am - 7pm'
    // div.removeChild(p).innerText = '10am - 7pm'
    div.removeChild(p2).innerText = 'Day off: Tuesday'
    //btn show more
    btn1.innerHTML = "Learn-More"
    
  } else{
    barberOne.appendChild(div)
    div.classList = "barberHours"
    div.appendChild(h5).innerText = 'Hours Available: 10am - 7pm'
    div.appendChild(p2).innerText = 'Day off: Tuesday'
    // Btn show less
    btn1.innerHTML = "Less-Info"
    click == true
    }
  })


btn2.addEventListener('click', () => {

             //Barber2

  // barberOne.appendChild(p).appendChild(newText)
  // btn.classList.add("show")
  

  if(barberTwo.contains(h5)) {
    barberTwo.removeChild(div)
    div.removeChild(h5).innerText = 'Hours Available: 10am - 7pm'
    // div.removeChild(p).innerText = '10am - 7pm'
    div.removeChild(p2).innerText = 'Day off: Wednesday'
    //btn show more
    btn2.innerHTML = "Learn-More"
    
  } else{
    barberTwo.appendChild(div)
    div.classList = "barberHours"
    div.appendChild(h5).innerText = 'Hours Available: 10am - 7pm'
    div.appendChild(p2).innerText = 'Day off: Wednesday'
    // Btn show less
    btn2.innerHTML = "Less-Info"
   
  }
})


 

btn3.addEventListener('click', () =>{


           //Barber3

  // barberOne.appendChild(p).appendChild(newText)
  // btn.classList.add("show")
  

  if(barberThree.contains(h5)) {
    barberThree.removeChild(h5).innerText = 'Hours Available:'
    barberThree.removeChild(p).innerText = '10am - 7pm'
    barberThree.removeChild(p2).innerText = 'Day off: Monday'
    //btn show more
    btn3.innerHTML = "Learn-More"
    
  } else{
    barberThree.appendChild(h5).innerText = 'Hours Available:'
    h5.classList = "barberHours"
    barberThree.appendChild(p).innerText = '10am - 7pm'
    //
    // barberOne.appendChild(newText)
    barberThree.appendChild(p2).innerText = 'Day off: Monday'
    // Btn show less
    btn3.innerHTML = "Less-Info"
   
  }
})


console.log(btn1)



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
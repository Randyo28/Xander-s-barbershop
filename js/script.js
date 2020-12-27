           //Nav-bar//

  const ham = document.querySelector(".ham-container");
  const ulMobile = document.getElementById("navbar");

  ham.addEventListener('click', () => {
      if (ulMobile.style.width === "0px") {
      ulMobile.style.width = "172px";
      ham.classList.add("change");
    } else {
      ulMobile.style.width = "0px";
      ham.classList.remove("change");
            }
  })

        //Card-button
var btn = document.querySelectorAll('.btn')
var btn1 = document.querySelector('.btn1')
var btn2 = document.querySelector('.btn2')
var btn3 = document.querySelector('.btn3')
const allBarbers = document.querySelectorAll('.barbers')
const barberOne = document.querySelector('.barber-1')
const barberTwo = document.querySelector('.barber-2')
const barberThree = document.querySelector('.barber-3')
const div = document.createElement("div")
const p = document.createElement("p")
const p2 = document.createElement("p") 
const h5 = document.createElement("h5")

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
    btn2.innerHTML = "Learn-More"
    btn3.innerHTML = "Learn-More"
    
  } else{
    barberOne.appendChild(div)
    // div.classList = "barberHours"
    div.appendChild(h5).innerText = 'Hours Available: 10am - 7pm'
    div.appendChild(p2).innerText = 'Day off: Tuesday'
    // Btn show less
    btn1.innerHTML = "Less-Info"
    btn2.innerHTML = "Learn-More"
    btn3.innerHTML = "Learn-More"
    }
    
  })
  

btn2.addEventListener('click', () => {
  
  if(barberTwo.contains(h5)) {
    barberTwo.removeChild(div)
    div.removeChild(h5).innerText = 'Hours Available: 10am - 7pm'
    // div.removeChild(p).innerText = '10am - 7pm'
    div.removeChild(p2).innerText = 'Day off: Wednesday'
    //btn show more
    btn2.innerHTML = "Learn-More"
    btn1.innerHTML = "Learn-More"
    btn3.innerHTML = "Learn-More"
    
    
    
  } else{
    barberTwo.appendChild(div)
    // div.classList = "barberHours"
    div.appendChild(h5).innerText = 'Hours Available: 10am - 7pm'
    div.appendChild(p2).innerText = 'Day off: Wednesday'
    // Btn show less
    btn2.innerHTML = "Less-Info"
    btn1.innerHTML = "Learn-More"
    btn3.innerHTML = "Learn-More"
  }
})


 

btn3.addEventListener('click', () =>{

  if(barberThree.contains(h5)) {
    barberThree.removeChild(div)
    div.removeChild(h5).innerText = 'Hours Available: 10am - 7pm'
    // div.removeChild(p).innerText = '10am - 7pm'
    div.removeChild(p2).innerText = 'Day off: Monday'
    //btn show more
    btn3.innerHTML = "Learn-More"
    btn1.innerHTML = "Learn-More"
    btn2.innerHTML = "Learn-More"
    
  } else{
    barberThree.appendChild(div)
    // div.classList = "barberHours"
    div.appendChild(h5).innerText = 'Hours Available: 10am - 7pm'
    div.appendChild(p2).innerText = 'Day off: Monday'
    // Btn show less
    btn3.innerHTML = "Less-Info"
    btn1.innerHTML = "Learn-More"
    btn2.innerHTML = "Learn-More"
   
  }
})

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
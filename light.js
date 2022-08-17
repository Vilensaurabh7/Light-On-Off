const btn1 = document.getElementById("myBtn");
btn1.addEventListener("click", clickToOff);

function clickToOn()
{
   let image= document.getElementById('image');
   image.src = "light-bulb-on.png";
}
function clickToOff()
{
   let image= document.getElementById('image');
   image.src = "light-bulb-off.png";
}

//  let clickToOff=()=>{
//     let image= document.getElementById('image');
//     image.src = "light-bulb-off.png";
//  }
 
//   .addEventListener("click", myFunction);
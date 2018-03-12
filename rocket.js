
// Get the modal
var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function () {
    modal1.style.display = "block";
    console.log(onclick);
}
btn2.onclick = function () {
    modal2.style.display = "block";
     console.log(onclick);
}
btn3.onclick = function () {
    modal3.style.display = "block";
     console.log(onclick);
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal1.style.display = "none";
    console.log(span);
}


// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

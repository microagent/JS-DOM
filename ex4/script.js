// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

let myButton = document.getElementById("myButton");
let box = document.getElementsByClassName("box");

// document.addEventListener("click", function() {
//   box[0].style = "background-color: blue";
//   box[1].style = "background-color: blue";
//   box[2].style = "background-color: blue";
// });

document.addEventListener("click", function() {
  for (let item of box) {
    item.style = "background-color: blue";
  }
});

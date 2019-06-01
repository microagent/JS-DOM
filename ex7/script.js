// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

var sectionHdr = document.getElementById("section-header");
console.log(sectionHdr);

sectionHdr.addEventListener("click", function() {
  let section = document.getElementById("section");
  if (section.getAttribute("style") === "display: none;") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
});

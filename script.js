var togglebtn = document.getElementById("toggle-btn");
var subPackages = document.querySelectorAll(".sub-package");

function toggleIcon(tabname) {
  togglebtn.classList.toggle("toggle-left");
  for (const subpackage of subPackages) {
    subpackage.classList.remove("active-package");
  }
  event.currentTarget.classList.add("active-package");
}

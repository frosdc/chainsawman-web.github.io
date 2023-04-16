
// TOOGLE MENU START

var navLinks = document.getElementById("navLinks");
        function showMenu(){
            navLinks.style.right = "0";
        }
        function hideMenu(){
            navLinks.style.right = "-850px";
        }
// TOOGLE MENU ENDS


//EPISODE TAB (CHANGE ONCLICK)
let tabs = document.querySelectorAll(".leftTabs h3");
let epsContents = document.querySelectorAll(".eps-content div");



tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        epsContents.forEach((content) => {
            content.classList.remove("active");
        });
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        epsContents[index].classList.add("active");
        tabs[index].classList.add("active");
    });
});
//EPISODE ENDS
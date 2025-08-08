
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
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".leftTabs h3");
    const episodes = document.querySelectorAll(".eps-content > div");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {

            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            
            episodes.forEach(ep => ep.classList.remove("active"));

           
            if (episodes[index]) {
                episodes[index].classList.add("active");
            }
        });
    });
});

//EPISODE ENDS

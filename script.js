// Nav elements
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});


// ====  Typing animation ====//
var typed = new Typed(".typing", {
    strings:["","Web Developer", "Problem Solver","FrontEnd Developer"," Backend Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})



/* ====== aside  =====  */

const nav = document.querySelector(".nav"),
        navList = nav.querySelectorAll("li"),
        totalNavList = navList.length,
        allSections = document.querySelectorAll(".section"),
        totalSections = allSections.length;

    for (let i = 0; i < totalNavList; i++) {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function() {
            for (let i = 0; i < totalSections; i++) {
                allSections[i].classList.remove("back-section");
            }
            for (let j = 0; j < totalNavList; j++) {
                if(navList[j].querySelector("a").classList.contains("active")){
                    allSections[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSection(this);
        });
    }

    function showSection(element) {
        for (let i = 0; i < totalSections; i++) {
            allSections[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        console.log(target);
        document.querySelector("#" + target).classList.add("active");
    }
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

    //Hire me button
    document.addEventListener('DOMContentLoaded', function() {
        const navLinks = document.querySelectorAll('.nav li a');
        const hireLink = document.querySelector('.hire-link'); // Get the Hire Me link
    
        function activateSection(link) {
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
            showSection(link);
        }
    
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                activateSection(this);
            });
        });
    
        // Add event listener to Hire Me button link
        hireLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            activateSection(this); // Activate and show the contact section
        });
    });
    
    // Existing functions for navigation and section management
    function showSection(element) {
        const allSections = document.querySelectorAll('.section');
        allSections.forEach(section => section.classList.remove('active'));
    
        const target = element.getAttribute('href').split('#')[1];
        document.querySelector("#" + target).classList.add('active');
    }


//More about me button
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav li a');
    const hireLink = document.querySelector('.hire-link');
    const aboutBtn = document.querySelector('.about-btn'); // Get the More About Me button

    function activateSection(link) {
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
        showSection(link);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            activateSection(this);
        });
    });

    hireLink.addEventListener('click', function(e) {
        e.preventDefault();
        activateSection(this);
    });

    // Add event listener to More About Me button
    aboutBtn.addEventListener('click', function() {
        const aboutLink = document.querySelector('#aboutLink'); // Get the About link
        activateSection(aboutLink); // Activate and show the About section
    });
});

// Existing function to handle section display
function showSection(element) {
    const allSections = document.querySelectorAll('.section');
    allSections.forEach(section => section.classList.remove('active'));

    const target = element.getAttribute('href').split('#')[1];
    document.querySelector("#" + target).classList.add('active');
}


//for nav-toggler
document.addEventListener('DOMContentLoaded', function() {
    const navToggler = document.querySelector('.nav-toggler');
    const nav = document.querySelector('.nav');

    navToggler.addEventListener('click', function() {
        nav.classList.toggle('open'); // Toggle the dropdown menu
    });

    // Existing code for handling section navigation
    const navLinks = document.querySelectorAll('.nav li a');

    function activateSection(link) {
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
        showSection(link);
        nav.classList.remove('open'); // Close the dropdown after selecting a section
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            activateSection(this);
        });
    });

    function showSection(element) {
        const allSections = document.querySelectorAll('.section');
        allSections.forEach(section => section.classList.remove('active'));

        const target = element.getAttribute('href').split('#')[1];
        document.querySelector("#" + target).classList.add('active');
    }
});

    
// MBSC Solutions

console.log("MBSC Solutions Website Loaded");

document.addEventListener("DOMContentLoaded", function () {

    // Smooth Scroll
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function(link){
        link.addEventListener("click", function(e){
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Card Animation
    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card){
        card.addEventListener("mouseenter", function(){
            card.style.transform = "translateY(-8px)";
        });

        card.addEventListener("mouseleave", function(){
            card.style.transform = "translateY(0)";
        });
    });

});

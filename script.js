console.log("Bienvenido a Veltrix");

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow = "0px 20px 40px rgba(0,212,255,.3)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "0 10px 20px rgba(0,0,0,.1)";

    });

});
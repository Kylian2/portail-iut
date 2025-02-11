const toggleContainer = (event) => {
    const element = event.target;
    const toggler = element.closest('.toggler');
    
    if (!toggler) return;

    const containerApps = toggler.querySelector('.container__apps');
    const arrow = toggler.querySelector('.arrow');

    if (containerApps) {
        containerApps.classList.toggle("hidden");

        arrow.classList.toggle("fa-arrow-up");
        arrow.classList.toggle("fa-arrow-down");
    } else {
        console.log("Aucun élément .container__apps trouvé");
    }
};

document.addEventListener("DOMContentLoaded", (event) => { 
    const container = document.getElementsByClassName('toggler');

    [...container].forEach(element => {
        element.addEventListener('click', toggleContainer);
    });
})


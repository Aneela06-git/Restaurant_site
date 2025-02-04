document.addEventListener("DOMContentLoaded", () => { 
    const bookButton = document.querySelector(".book");
    const menuButton = document.querySelector(".menu");
    const readMoreLink = document.querySelector(".read-more");
    const lunchButton = document.querySelector(".menu-item-Lunch");
    const filterBtns = document.querySelectorAll(".filter-btn");

    if (bookButton) {
        bookButton.addEventListener("click", () => {
            window.location.href = "#booking";
        });
    }

    if (menuButton) {
        menuButton.addEventListener("click", () => {
            window.location.href = "#MENU";
        });
    }

    if (lunchButton) {
        lunchButton.addEventListener("click", () => {
            window.location.href = "#Dinner";
        });
    }

    if (readMoreLink) {
        readMoreLink.addEventListener("click", (event) => {
            event.preventDefault();
            alert("Redirecting to more information about Food Amore...");
            window.location.href = "#about-more";
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(t => t.classList.remove("active"));
            btn.classList.add("active");
        });
    });

    const reservationForm = document.getElementById("reservationForm");
    if (reservationForm) {
        reservationForm.addEventListener("submit", function(event) {
            event.preventDefault();
            //alert("Your table has been booked!");
            document.getElementById('message1').textContent = `Your table has been booked!, ${email}!`;
            
        });
    }
});

// Subscribe function moved outside DOMContentLoaded
function subscribe(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    document.getElementById('message').textContent = `Thank you for subscribing, ${email}!`;
}


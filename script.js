function bookSession(sessionName) {

    // Select the matching session
    const sessionSelect = document.getElementById("session");

    if (sessionName === "Quick Talk") {
        sessionSelect.value = "Quick Talk — ₹19";
    }

    if (sessionName === "Standard Talk") {
        sessionSelect.value = "Standard Talk — ₹39";
    }

    if (sessionName === "Long Talk") {
        sessionSelect.value = "Long Talk — ₹59";
    }

    // Scroll to booking form
    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
}


document.getElementById("bookingForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const session = document.getElementById("session").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    alert(
        "Booking request received!\n\n" +
        "Name: " + name + "\n" +
        "Session: " + session + "\n" +
        "Date: " + date + "\n" +
        "Time: " + time
    );

});
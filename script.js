
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

    // Scroll to the booking form
    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
}


// Handle booking fSorm submission
document.getElementById("bookingForm").addEventListener("submit", function(event) {

    event.preventDefault();

    // Get the form values
    const name = document.getElementById("name").value;
    const session = document.getElementById("session").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Find the confirmation message
    const confirmationMessage = document.getElementById("confirmationMessage");

    // Display the confirmation
    confirmationMessage.textContent =
        "Thanks, " + name + "! Your demo request for " +
        session + " on " + date + " at " + time +
        " has been recorded on this page.";

    confirmationMessage.hidden = false;

});
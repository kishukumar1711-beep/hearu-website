
function bookSession(sessionName) {
    const sessionSelect = document.getElementById("session");

    if (sessionName === "Quick Talk") {
        sessionSelect.value = "Quick Talk — ₹19";
    } else if (sessionName === "Standard Talk") {
        sessionSelect.value = "Standard Talk — ₹39";
    } else if (sessionName === "Long Talk") {
        sessionSelect.value = "Long Talk — ₹59";
    }

    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
}

const bookingForm = document.getElementById("bookingForm");
const confirmationMessage = document.getElementById("confirmationMessage");

bookingForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const submitButton = bookingForm.querySelector('button[type="submit"]');

    // Prevent repeated submissions while sending
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    confirmationMessage.hidden = false;
    confirmationMessage.textContent = "Sending your request...";
    confirmationMessage.style.color = "";

    try {
        const response = await fetch(bookingForm.action, {
            method: "POST",
            body: new FormData(bookingForm),
            headers: {
                Accept: "application/json"
            }
        });

        if (response.ok) {
            confirmationMessage.textContent =
                "Your request was sent successfully! This is a request, not a confirmed booking. We'll contact you after reviewing it.";

            confirmationMessage.style.color = "#6ee7a0";
            bookingForm.reset();
        } else {
            confirmationMessage.textContent =
                "We couldn't send your request. Please try again later.";

            confirmationMessage.style.color = "#ff8a8a";
        }
    } catch (error) {
        confirmationMessage.textContent =
            "Connection error. Please check your internet and try again.";

        confirmationMessage.style.color = "#ff8a8a";
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = "Request a call";
    }
});
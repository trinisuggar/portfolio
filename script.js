const copyEmailButton = document.querySelector("#copyEmailButton");
const copyMessage = document.querySelector("#copyMessage");
const emailAddress = "hello@nicoleruch.dev";

if (copyEmailButton && copyMessage) {
    copyEmailButton.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(emailAddress);
            copyMessage.textContent = "Email copied to clipboard.";
            copyEmailButton.textContent = "Copied!";

            setTimeout(() => {
                copyMessage.textContent = "";
                copyEmailButton.textContent = "Copy email";
            }, 2500);
        } catch (error) {
            copyMessage.textContent = "Could not copy email. Please copy it manually.";
        }
    });
}
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach((element) => {
    revealOnScroll.observe(element);
});
document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll(".toggle-btn");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            const answer = this.parentElement.nextElementSibling;
            const isVisible = answer.style.display === "block";

            // Close all open answers
            document.querySelectorAll(".answer").forEach(answer => answer.style.display = "none");

            // Toggle the visibility of the current answer
            if (!isVisible) {
                answer.style.display = "block";
            }
        });
    });
});

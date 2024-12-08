document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", (event) => {
        // Prevent default form submission behavior
        event.preventDefault();

        // Collect form data
        const formData = {
            fullname: document.getElementById("fullname").value,
            email: document.getElementById("email").value,
            username: document.getElementById("username").value,
            password: document.getElementById("Password").value,
            gender: document.getElementById("gender").value,
            note: document.getElementById("note").value,
            dob: document.getElementById("dob").value,
            phone: document.getElementById("phone").value,
            age: document.getElementById("age").value,
            maritalStatus: document.querySelector('input[name="marital-status"]:checked').value,
            file: document.getElementById("file-upload").files[0]?.name || "No file uploaded",
        };

        // Validate required fields (if additional validation is needed)
        if (
            !formData.fullname ||
            !formData.email ||
            !formData.username ||
            !formData.password ||
            !formData.gender ||
            !formData.dob ||
            !formData.phone ||
            !formData.age ||
            !formData.maritalStatus
        ) {
            alert("Please fill in all required fields.");
            return;
        }

        // Display confirmation message
        alert("Form submitted successfully!");

        // Log the form data to the console (or send it to a server)
        console.log("Form Data:", formData);

        // Reset the form
        form.reset();
    });
});

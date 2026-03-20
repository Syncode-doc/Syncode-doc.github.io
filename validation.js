window.onload = function () {
    const form = document.getElementById("myForm");
    const submitBtn = document.getElementById("submitBtn");
    const clearBtn = document.getElementById("clearBtn");
    const messages = document.getElementById("messages");

    submitBtn.addEventListener("click", validateForm);

    clearBtn.addEventListener("click", function () {
        messages.innerHTML = "";
    });

    function validateForm() {
        messages.innerHTML = "";

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const ageGroup = document.getElementById("ageGroup").value;

        let hasEmpty = false;
        let hasInvalid = false;

        // Regex patterns
        const usernameRegex = /^[a-z0-9]{4,12}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.(net|com|org|edu)$/;
        const phoneRegex = /^\(\d{3}\)-\d{3}-\d{4}$/;

        // Password:
        // at least 9 chars, at least 1 uppercase, 1 lowercase, 1 number, 1 special char
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9_]).{9,}$/;

        // Empty checks
        if (username === "") {
            addMessage("Please Enter Username", "red");
            hasEmpty = true;
        }
        if (email === "") {
            addMessage("Please Enter Email", "red");
            hasEmpty = true;
        }
        if (phone === "") {
            addMessage("Please Enter Phone Number", "red");
            hasEmpty = true;
        }
        if (password === "") {
            addMessage("Please Enter Password", "red");
            hasEmpty = true;
        }
        if (confirmPassword === "") {
            addMessage("Please Enter Confirm Password", "red");
            hasEmpty = true;
        }
        if (!gender) {
            addMessage("Please Select Gender", "red");
            hasEmpty = true;
        }
        if (ageGroup === "") {
            addMessage("Please Select Age Group", "red");
            hasEmpty = true;
        }

        // Invalid checks only if field is not empty
        if (username !== "" && !usernameRegex.test(username)) {
            addMessage("Please Enter a valid username", "orange");
            hasInvalid = true;
        }

        if (email !== "" && !emailRegex.test(email)) {
            addMessage("Please Enter a valid email", "orange");
            hasInvalid = true;
        }

        if (phone !== "" && !phoneRegex.test(phone)) {
            addMessage("Please Enter a valid phone number", "orange");
            hasInvalid = true;
        }

        if (password !== "" && !passwordRegex.test(password)) {
            addMessage("Please Enter a valid password", "orange");
            hasInvalid = true;
        }

        if (confirmPassword !== "" && !passwordRegex.test(confirmPassword)) {
            addMessage("Please Enter a valid confirm password", "orange");
            hasInvalid = true;
        }

        // Only check password match if all fields are filled and valid
        if (!hasEmpty && !hasInvalid) {
            if (password !== confirmPassword) {
                alert("passwords do not match");
                return;
            }

            // Redirect to your VM webpage here
            window.location.href = "success.html";
        }
    }

    function addMessage(text, colorClass) {
        const p = document.createElement("p");
        p.textContent = text;
        p.className = colorClass;
        messages.appendChild(p);
    }
};
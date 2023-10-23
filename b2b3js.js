//var myNodelist = document.getElementsByTagName("LI");
var taskList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < taskList.length; i++) {
    var span = document.createElement("SPAN");
    var closeIcon = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(closeIcon);
    taskList[i].appendChild(span);
}

var closeButtons = document.getElementsByClassName("close");
for (i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        var listItem = this.parentElement;
        listItem.style.display = "none";
    }
}

var list = document.querySelector('#taskList');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function addTask() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("taskInput").value;
    var taskText = document.createTextNode(inputValue);
    li.appendChild(taskText);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("taskList").appendChild(li);
    }
    document.getElementById("taskInput").value = "";

    var span = document.createElement("SPAN");
    var closeIcon = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(closeIcon);
    li.appendChild(span);

    for (i = 0; i < closeButtons.length; i++) {
        closeButtons[i].onclick = function() {
            var listItem = this.parentElement;
            listItem.style.display = "none";
        }
    }
}

function validateForm() {
            // Reset error messages
            clearErrors();

            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;

            var isValid = true;

            // Check for required fields
            if (name === "") {
                displayError("nameError", "Name is required.");
                isValid = false;
            }

            if (email === "") {
                displayError("emailError", "Email is required.");
                isValid = false;
            } else if (!isValidEmail(email)) {
                displayError("emailError", "Invalid email format.");
                isValid = false;
            }

            if (password === "") {
                displayError("passwordError", "Password is required.");
                isValid = false;
            }

            return isValid;
        }

        function displayError(id, errorMessage) {
            var errorElement = document.getElementById(id);
            errorElement.textContent = errorMessage;
        }

        function clearErrors() {
            var errorElements = document.querySelectorAll(".error");
            for (var i = 0; i < errorElements.length; i++) {
                errorElements[i].textContent = "";
            }
        }

        function isValidEmail(email) {
            // You can implement a more complex email validation logic here if needed
            var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            return emailPattern.test(email);
        }

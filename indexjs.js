function submitFeedback() {
            var nameInput = document.getElementById("name");
            var messageInput = document.getElementById("message");
            var feedbackList = document.getElementById("feedbackList");

            var name = nameInput.value;
            var message = messageInput.value;

            if (name === "" || message === "") {
                alert("Please fill out both name and feedback fields.");
                return;
            }

            var listItem = document.createElement("li");
            listItem.className = "feedback";
            listItem.textContent = "Name: " + name + ", Feedback: " + message;
            feedbackList.appendChild(listItem);

            nameInput.value = "";
            messageInput.value = "";

            alert("Thank you for your feedback!");
        }


let popup = document.getElementById("floating-popup");

function closePopup() {
    popup.style.display = "none";
}

popup.style.display = "block";
let animationFrame;



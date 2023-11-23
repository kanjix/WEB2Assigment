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


    $(document).ready(function() {
      $('.card').hover(function() {
        $(this).css('transform', 'scale(1.05)');
      }, function() {
        $(this).css('transform', 'scale(1)');
      });
    });



const draggableListItems = document.querySelectorAll('.draggable-list li');
const endMessage = document.getElementById('end-message');

// current phrase being dragged
let selectedId;

// target phrase
let dropTargetId;

// counter for correct phrases
let matchingCounter = 0;

addEventListeners();

function dragStart() {
    selectedId = this.id;
}

function dragEnter() {
    this.classList.add('over');
}

function dragLeave() {
    this.classList.remove('over');
}

function dragOver(ev) {
    ev.preventDefault();
}

function dragDrop() {
    dropTargetId = this.id;

    if (checkForMatch(selectedId, dropTargetId)) {
        document.getElementById(selectedId).style.display = 'none';
        document.getElementById(dropTargetId).style.display = 'none';
        matchingCounter++;
    } else if (checkForMatch2(selectedId, dropTargetId)) {
        document.getElementById(selectedId).style.display = 'none';
        document.getElementById(dropTargetId).style.display = 'none';
        matchingCounter++;
    }

    if (matchingCounter === 9) {
        endMessage.style.display = 'block';
    }

    this.classList.remove('over');
}

function checkForMatch(selected, dropTarget) {
    switch (selected) {
        case 'e1':
            return dropTarget === 's1';

        case 'e2':
            return dropTarget === 's2';

        case 'e3':
            return dropTarget === 's3';

        case 'e4':
            return dropTarget === 's4';

        case 'e5':
            return dropTarget === 's5';

        case 'e6':
            return dropTarget === 's6';

        case 'e7':
            return dropTarget === 's7';

        case 'e8':
            return dropTarget === 's8';

        case 'e9':
            return dropTarget === 's9';

        default:
            return false;
    }
}

function checkForMatch2(selected, dropTarget) {
    switch (selected) {
        case 's1':
            return dropTarget === 'e1';

        case 's2':
            return dropTarget === 'e2';

        case 's3':
            return dropTarget === 'e3';

        case 's4':
            return dropTarget === 'e4';

        case 's5':
            return dropTarget === 'e5';

        case 's6':
            return dropTarget === 'e6';

        case 's7':
            return dropTarget === 'e7';

        case 's8':
            return dropTarget === 'e8';

        case 's9':
            return dropTarget === 'e9';

        default:
            return false;
    }
}

function playAgain() {
    matchingCounter = 0;
    endMessage.style.display = 'none';
    draggableListItems.forEach(item => {
        document.getElementById(item.id).style.display = 'block';
    })
}

function addEventListeners() {
    draggableListItems.forEach (item => {
        item.addEventListener('dragstart', dragStart);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragover', dragOver);
        item.addEventListener('dragleave', dragLeave);
    })
}






function openModal(imageSrc) {
    let modal = document.getElementById("myModal");
    let modalImage = document.getElementById("modal-image");

    modal.style.display = "block";
    modalImage.src = imageSrc;
}

let closeBtn = document.querySelector(".close");
closeBtn.onclick = function () {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
    let modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}





function playSound() {
        var sound = document.getElementById("addToCartSound");
        sound.play();
    }

    function orderClothing(itemName) {
        playSound();
        alert("Товар " + itemName + " добавлен в корзину.");
    }


function closePopup() {
    const floatingPopup = document.getElementById("floating-popup");
    floatingPopup.classList.add("closing");

    // Задержка перед полным закрытием окна
    setTimeout(() => {
        floatingPopup.style.display = "none";
    }, 300); // Длительность анимации (0.3 секунды) в миллисекундах
}



 // Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
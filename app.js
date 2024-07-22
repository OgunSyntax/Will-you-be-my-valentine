// const b = document.querySelector('button.button--no');
// b.addEventListener("click", moveOnClick);

// function moveOnClick() {
//     const i = Math.floor(Math.random() * 500) + 1;
//     const j = Math.floor(Math.random() * 500) + 1;

//     b.style.left = i + "px";
//     b.style.top = j + "px";
// }


const b = document.querySelector('button.button--no');
const imageElement = document.getElementById('flowercat');
const textElement = document.getElementById('changetext');

b.addEventListener("click", changeContent);

function changeContent() {
    // Change the image source to a new image
    imageElement.src = "images/cat with gun.jpg";

    // Change the text content to a new text
    textElement.textContent = "The 'No' button was just for style";

    // Change the button's position within a smaller area on the phone's screen
    const maxWidth = window.innerWidth - b.clientWidth - 30; // Adjusted to stay within 20px from the right edge
    const maxHeight = window.innerHeight - b.clientHeight - 30; // Adjusted to stay within 20px from the bottom edge

    const i = Math.floor(Math.random() * maxWidth) + 1;
    const j = Math.floor(Math.random() * maxHeight) + 1;

    b.style.left = i + "px";
    b.style.top = j + "px";
}




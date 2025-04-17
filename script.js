var texts = [
    "Doc Laura Li",
    "Link Below",
    "Buy Now"
];

var currentIndex = 0;

function accept() {
    window.close();
    window.location.href = 'Page2.html';
}

function displayTextInOrder() {
    if (currentIndex < texts.length) {
        var textBox = document.createElement("div");
        textBox.className = "textBox"; 
        textBox.textContent = texts[currentIndex];

        var xPos = Math.floor(Math.random() * (window.innerWidth - 200)); 
        var yPos = Math.floor(Math.random() * (window.innerHeight - 100)); 
        textBox.style.position = "absolute";
        textBox.style.left = xPos + "px";
        textBox.style.top = yPos + "px";

        document.body.appendChild(textBox);

        currentIndex++;

        var randomInterval = Math.floor(Math.random() * (30000 - 5000 + 1)) + 5000;

        setTimeout(displayTextInOrder, randomInterval);
    }
}

setTimeout(function() {
    displayTextInOrder();
}, 500);

console.log("Welcome to Internet Success 101!");
// Change text content when the button is clicked
document.getElementById('changeTextButton').addEventListener('click', function () {
    document.getElementById('message').textContent = "The text has been changed dynamically!";
});

// Modify CSS style when the button is clicked
document.getElementById('changeStyleButton').addEventListener('click', function () {
    document.getElementById('message').style.color = "green";
    document.getElementById('message').style.fontSize = "25px";
});

// Toggle an element's visibility when the button is clicked
document.getElementById('toggleElementButton').addEventListener('click', function () {
    var toggleContent = document.getElementById('toggleContent');
    toggleContent.classList.toggle('hidden');
});


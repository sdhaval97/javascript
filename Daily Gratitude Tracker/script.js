// Selecting DOM elements and setting up the form logic

const form = document.getElementById("gratitude-form");
const gratitude = document.getElementById("gratitude-input");
const entryList = document.getElementById("entry-list");

// Event listener to handle form submissions
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const value = gratitude.value.trim();
    console.log("Gratitude entry:", value);

    //clearing the text area
    gratitude.value = "";
})
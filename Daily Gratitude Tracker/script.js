// Selecting DOM elements and setting up the form logic

const form = document.getElementById("gratitude-form");
const gratitude = document.getElementById("gratitude-input");
const entryList = document.getElementById("entry-list");

// array to hold gratitude entries
const gratitudeEntries = [];

// Event listener to handle form submissions
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const value = gratitude.value.trim();
    console.log("Gratitude entry:", value);

    //clearing the text area
    gratitude.value = "";

    const newEntry = {
        text: value,
        date: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })
    };

    gratitudeEntries.push(newEntry);
    console.log(gratitudeEntries);
});
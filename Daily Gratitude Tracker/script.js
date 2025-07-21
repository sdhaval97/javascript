// Selecting DOM elements and setting up the form logic

const form = document.getElementById("gratitude-form");
const gratitude = document.getElementById("gratitude-input");
const entryList = document.getElementById("entry-list");

// array to hold gratitude entries
let gratitudeEntries = [];

// Load entries from local storage on page load
function loadEntries() {
    const savedEntries = localStorage.getItem("gratitudeEntries");
    if (savedEntries) {
        gratitudeEntries = JSON.parse(savedEntries);
        renderEntries();
    }
}

// Save entries to local storage
function saveEntries() {
    localStorage.setItem("gratitudeEntries", JSON.stringify(gratitudeEntries));
}

// Event listener to handle form submissions
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const value = gratitude.value.trim();
    
    if (value === "") {
        return;
    }

    const newEntry = {
        text: value,
        date: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }),
        id: Date.now()
    };

    gratitudeEntries.push(newEntry);
    saveEntries();
    renderEntries();
    
    gratitude.value = "";
});

function renderEntries() {
    entryList.innerHTML = "";

    gratitudeEntries.forEach(entry => {
        const li = document.createElement("li");
        li.className = "entry";
        li.innerHTML = `
            <div><strong>${entry.date}</strong></div>
            <div>I'm grateful for: ${entry.text}</div>
        `;
        entryList.prepend(li);
    });
}

// Load entries when page loads
loadEntries();
// I. Selecting the form elements
// Form
const form = document.getElementById(`journal-form`);

// Text Area
const entryText = document.getElementById(`entry-text`);

// Mood Select
const moodSelect = document.getElementById(`mood`);

// Entry list container
const entryList = document.getElementById(`entry-list`);

console.log(form, entryText, moodSelect, entryList);

const entries = []; // array to store journal entries

// II. Event Listener when form is submitted
form.addEventListener("submit", function (event){
    event.preventDefault(); // stops form from submitting the traditional way

    // Get the user input and the mood
    const journal = entryText.value.trim();
    const mood = moodSelect.value;

    // Creating an object for new entry
    const newEntry = {
        text: journal,
        mood: mood,
        date: new Date().toLocaleString()
    };

    // pushing the new entry to the entries array
    entries.push(newEntry);
    renderEntries();

});

// Rendering entries to the page
function renderEntries() {
    // Clear the current list
    entryList.innerHTML = "";

    // Loop through all the entries
    entries.forEach(
        entry => {
            const li = document.createElement("li");
            li.className = "entry";
            li.innerHTML = `
            <strong>${entry.mood}</strong> - ${entry.date}</br>
            ${entry.text}
            `;
            entryList.prepend(li);
        }
    );
}


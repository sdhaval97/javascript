// I. Selecting the form elements
// Form
const form = document.getElementById(`journal-form`);

// Text Area
const entryText = document.getElementById(`entry-text`);

// Mood Select
const moodSelect = document.getElementById(`mood`);

// Entry list container
const entryList = document.getElementById(`entry-list`);

// letting the user see how many characters are remaining for the journal entry
const charCount = document.getElementById("char-count");

entryText.addEventListener("input", ()=> {
    const remaining = 750 - entryText.value.length;
    charCount.textContent = `${remaining} characters remaining`;

    if (remaining <= 50) {
        charCount.style.color = "red";
    } else {
        charCount.style.color = "black";
    }
});

const entries = []; // array to store journal entries

// II. Event Listener when form is submitted
form.addEventListener("submit", function (event){
    event.preventDefault(); // stops form from submitting the traditional way

    // Get the user input and the mood
    const journal = entryText.value.trim();
    const mood = moodSelect.value;

    // adding validation for empty entry
    if (journal === "") {
        alert("Please write something in your journal!");
        return;
    }

    if (journal.length < 5) {
        alert("Journal entry too small!");
        return;
    }

    // Creating an object for new entry
    const newEntry = {
        text: journal,
        mood: mood,
        date: new Date().toLocaleString()
    };

    // pushing the new entry to the entries array
    entries.push(newEntry);
    localStorage.setItem("journalEntries", JSON.stringify(entries));
    renderEntries();
    entryText.value = ""; // clearing the journal input after hitting submit
    moodSelect.value = "🙂";
    charCount.textContent = "750 characters remaining";
    charCount.style.color = "black";

});

// Rendering entries to the page
function renderEntries() {
    // Clear the current list
    entryList.innerHTML = "";

    // Loop through all the entries
    entries.forEach(
        (entry, index) => {
            const li = document.createElement("li");
            li.className = "entry";
            li.innerHTML = `
            <strong>${entry.mood}</strong> - ${entry.date}</br>
            ${entry.text}<br/>
            <button class = "delete-btn" data-index = "${index}">🗑️ Delete</button>
            `;
            entryList.prepend(li);
        }
    );
    const deleteButtons = document.querySelectorAll(".delete-btn");

    deleteButtons.forEach(button => {
        button.addEventListener("click", function() {
            const index = parseInt(button.dataset.index);
            entries.splice(index, 1);
            renderEntries();
        });     
    });

}

const savedEntries = localStorage.getItem("journalEntries");

if (savedEntries) {
    const parsed = JSON.parse(savedEntries);
    entries.push(...parsed);
    renderEntries();
}


/* Variables */
let count = 0;
let saveEl = document.getElementById("save-el");


/* Functions */

// Increases the counter by a step of 1
function increment() {
    count += 1;
    document.getElementById("count-el").textContent = count;
}

// Decreases the counter by a step of 1
function decrement() {
    count -= 1;
    document.getElementById("count-el").textContent = count;
}

// Store the current count in the "Previous Entries: " section
function save() {
    countMessage = count + ", ";
    saveEl.textContent += countMessage;
    resetCounter();
}

// Reset the counter to 0
function resetCounter() {
    count = 0;
    document.getElementById("count-el").textContent = count;
}
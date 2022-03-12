let incrementBtn = document.getElementById("increment-btn");
let decrementBtn = document.getElementById("decrement-btn");
let saveBtn = document.getElementById("save-btn");
let countEl = document.getElementById("counter");
let entry = document.getElementById("entries");
let weeks = document.getElementById("weeks");
let entries = [];
let count = 0;
let Total = 0;
let localOccupation = localStorage.getItem("WeeksData");

if (localOccupation) {
    entries = JSON.parse(localOccupation);
    for (let i = 0; i < entries.length; i++) {
        Total += entries[i];
    }

    for (let i = 0; i < entries.length; i++) {
        weeks.innerHTML = `
        <ul>
            <li>Last Week's Entries: ${entries}</li>
            <li>Total Entries: ${Total}</li>
        </ul>
        `
}
entries = [];
Total = 0;
}

function saveInLOcal(Key, Value) {
    localStorage.setItem(Key, Value);
}

countEl.innerText = count;

incrementBtn.addEventListener("click", function() {
    count++;
    countEl.innerText = count;
})

decrementBtn.addEventListener("click", function() {
    if (count >= 1) {
        count--;
        countEl.innerText = count;
    }
})

saveBtn.addEventListener("click", function() {

    if (entries.length === 6) {
        countEl.innerText = count;
        entries.push(count);
        for (let i = 0; i < entries.length; i++) {
            Total += entries[i];
        }
        weeks.innerHTML = `
        <ul>
            <li>Last Week's Entries ${entries}</li>
            <li>Total Entries: ${Total}</li>
        </ul>
        `
        saveInLOcal("WeeksData", JSON.stringify(entries) );
        entry.innerText += ` ${count}`;
        countEl.innerText = count;
        entries = [];
        count = 0;
        Total = 0;
        entry.innerText = `Previous entries: `;
    } else if (entries.length === 0) {
        countEl.innerText = count;
        entries.push(count);
        entry.innerText += ` ${count}`;
        count = 0;
        countEl.innerText = count;
    } else {
        countEl.innerText = count;
        entries.push(count);
        entry.innerText += ` - ${count}`;
        count = 0;
        countEl.innerText = count;
    }

})
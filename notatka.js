// Funkcja do dodawania notatki
document.getElementById("addNoteButton").addEventListener("click", function() {
    const noteInput = document.getElementById("noteInput");
    const noteText = noteInput.value.trim();

    // Sprawdzenie, czy pole nie jest puste
    if (noteText !== "") {
        const noteList = document.getElementById("noteList");

        // Tworzenie elementu listy dla nowej notatki
        const li = document.createElement("li");
        li.className = "note";
        li.textContent = noteText;

        // Tworzenie przycisku do usuwania notatki
        const deleteButton = document.createElement("span");
        deleteButton.className = "delete";
        deleteButton.textContent = "🗑️";
        deleteButton.onclick = function() {
            noteList.removeChild(li);
        };

        // Dodanie przycisku do usuwania do notatki
        li.appendChild(deleteButton);
        noteList.appendChild(li);

        // Wyczyszczenie pola input
        noteInput.value = "";
    } else {
        alert("Proszę wpisać notatkę!");
    }
});

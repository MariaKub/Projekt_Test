// Funkcja do zmiany obrazka
const images = [
    "image1.jpg",  // Podstawowy obrazek
    "image2.jpg",  // Drugi obrazek
    "image3.jpg"   // Trzeci obrazek
];

let currentImageIndex = 0;

document.getElementById("changeImageButton").addEventListener("click", function() {
    currentImageIndex = (currentImageIndex + 1) % images.length; // Zwiększ indeks, aby przełączyć obrazek
    document.getElementById("image").src = images[currentImageIndex]; // Ustaw nowy obrazek
});

// Funkcja do dodawania elementów do listy
document.getElementById("addItemButton").addEventListener("click", function() {
    const itemInput = document.getElementById("itemInput");
    const itemText = itemInput.value.trim();

    // Sprawdzenie, czy pole nie jest puste
    if (itemText !== "") {
        const itemList = document.getElementById("itemList");
        const li = document.createElement("li");
        li.textContent = itemText;
        itemList.appendChild(li);
        itemInput.value = ""; // Wyczyść pole po dodaniu
    } else {
        alert("Proszę wpisać coś, aby dodać do listy!");
    }
});

// Funkcja do wyświetlania daty i godziny
document.getElementById("showDateButton").addEventListener("click", function() {
    const now = new Date();
    document.getElementById("dateDisplay").textContent = now.toLocaleString();
});

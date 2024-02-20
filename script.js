// JavaScript function to toggle between languages
function toggleLanguage() {
    var portugueseContent = document.getElementById("portuguese-content");
    var englishContent = document.getElementById("english-content");
    var button = document.getElementById("language-toggle");

    if (portugueseContent.style.display === "none") {
        portugueseContent.style.display = "block";
        englishContent.style.display = "none";
        button.textContent = "English";
    } else {
        portugueseContent.style.display = "none";
        englishContent.style.display = "block";
        button.textContent = "Português";
    }
}

// Add event listener to the button
document.getElementById("language-toggle").addEventListener("click", toggleLanguage);
const container = document.querySelector(".container");
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");
const darkMode = document.getElementById("dark-mode");

// Función para aplicar el modo oscuro si está guardado en localStorage
function applyDarkMode() {
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode-use');
    } else {
        document.body.classList.remove('dark-mode-use');
    }
}

// Aplicar el modo oscuro al cargar la página
applyDarkMode();

btnSignIn.addEventListener("click", () => {
    container.classList.remove("toggle");
});

btnSignUp.addEventListener("click", () => {
    container.classList.add("toggle");
});

document.getElementById("main").onclick = function() {
    window.location.href = "../index.html";
};

darkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode-use");
    // Guardar el estado del modo oscuro en localStorage
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode-use'));
});

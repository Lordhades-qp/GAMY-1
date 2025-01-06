let heroHealth = 100; // Points de vie initiaux
const maxHealth = 100; // Points de vie maximum
let currentLevel = 1;

// Mise à jour de la barre de vie
function updateHealthBar() {
    const healthBar = document.getElementById("health-bar");
    healthBar.style.width = (heroHealth / maxHealth) * 100 + "%";
}

// Réduire les points de vie du héros
function takeDamage(damage) {
    heroHealth -= damage;
    if (heroHealth < 0) heroHealth = 0;
    updateHealthBar();

    if (heroHealth === 0) {
        gameOver();
    }
}

// Restaurer des points de vie avec des potions
function heal(amount) {
    heroHealth += amount;
    if (heroHealth > maxHealth) heroHealth = maxHealth;
    updateHealthBar();
}

// Afficher un écran Game Over
function gameOver() {
    alert("Game Over ! Vous avez perdu.");
    heroHealth = maxHealth;
    updateHealthBar();
}

// Charger l’histoire d’un niveau
async function loadStory(level) {
    const response = await fetch(`assets/stories/story${level}.txt`);
    const story = response.ok ? await response.text() : "Aucune histoire disponible.";
    document.getElementById("story-title").innerText = `Niveau ${level}`;
    document.getElementById("story-content").innerText = story;
    document.getElementById("story-container").style.display = "block";
}

// Commencer un niveau
function startLevel(level) {
    loadStory(level);
    console.log(`Niveau ${level} commencé.`);
    // Charger les monstres et l'arrière-plan ici
}

// Gérer le clic sur "Continuer"
document.getElementById("continue-game").addEventListener("click", () => {
    document.getElementById("story-container").style.display = "none";
    // Lancer le gameplay ici
});

// Gérer le clic sur "Commencer"
document.getElementById("start-game-btn").addEventListener("click", () => {
    startLevel(currentLevel);
});

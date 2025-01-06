let currentLevel = 1;
const maxLevels = 100;

// Charger une histoire
async function loadStory(level) {
    const response = await fetch(`assets/stories/story${level}.txt`);
    if (response.ok) {
        return await response.text();
    }
    return "Histoire indisponible pour ce niveau.";
}

// Afficher une histoire
async function showStory(level) {
    const storyContent = await loadStory(level);
    document.getElementById("story-title").textContent = `Niveau ${level}`;
    document.getElementById("story-content").textContent = storyContent;
    document.getElementById("story-container").style.display = "flex";
}

// Passer au niveau suivant
function nextLevel() {
    if (currentLevel <= maxLevels) {
        showStory(currentLevel);
        currentLevel++;
    } else {
        alert("Félicitations ! Vous avez terminé le jeu.");
    }
}

// Commencer le jeu
document.getElementById("start-game-btn").addEventListener("click", () => {
    currentLevel = 1;
    nextLevel();
});

// Continuer après une histoire
document.getElementById("continue-game").addEventListener("click", () => {
    document.getElementById("story-container").style.display = "none";
    console.log(`Jouer niveau ${currentLevel}`);
    // Ajouter ici la logique pour jouer au niveau.
});

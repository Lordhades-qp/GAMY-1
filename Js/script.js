ick", () => {
    startLevel(currentLevel);
});
// VARIABLES GLOBALES
let currentPlayer = "personnage"; // Joueur actuellement sélectionné
let points = 0; // Points du joueur
let level = 1; // Niveau actuel
let unlockedPlayers = ["personnage"]; // Joueurs débloqués
let heroHealth = 100; // Points de vie du héros
let boss = null; // Boss actuel
let monsters = []; // Liste des monstres
let gameRunning = false; // État du jeu

// CONFIGURATION DES JOUEURS
const players = [
    { name: "personnage", cost: 0, power: 1 },
    { name: "YAM", cost: 100, power: 2 },
    { name: "GÉGÉ", cost: 200, power: 3 },
    { name: "KALISTA", cost: 300, power: 4 },
    { name: "CHAKA", cost: 400, power: 5 },
    { name: "DONEL", cost: 500, power: 6 },
    { name: "PLAVIS", cost: 600, power: 7 },
    { name: "RINMA", cost: 700, power: 8 },
    { name: "HOMA", cost: 800, power: 9 },
    { name: "ANITA", cost: 900, power: 10 },
    { name: "GATUZO CHIRIKAZOLA", cost: 1000, power: 15 },
];

// CONFIGURATION DES NIVEAUX
const levels = [
    { level: 1, monsters: 5, boss: null },
    { level: 5, monsters: 10, boss: "dragon" },
    { level: 10, monsters: 15, boss: "dragon" },
    { level: 15, monsters: 20, boss: "dragon" },
    { level: 99, monsters: 50, boss: ["dragon", "dragon", "dragon", "dragon", "dragon"] },
];

// DOM ELEMENTS
const startButton = document.getElementById("start");
const shopButton = document.getElementById("shop");
const changePlayerButton = document.getElementById("change-player");
const settingsButton = document.getElementById('settings').addEventListener('click', openSettings);
const creditsButton= document.getElementById('credits').addEventListener('click', () => {
        window.location.href = 'credits.html';
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

// CHARGEMENT DU JEU
function loadGameData() {
    const savedData = localStorage.getItem("gameData");
    if (savedData) {
        const data = JSON.parse(savedData);
        points = data.points;
        unlockedPlayers = data.unlockedPlayers;
        level = data.level;
    }
}

// SAUVEGARDE DU JEU
function saveGameData() {
    const data = {
        points: points,
        unlockedPlayers: unlockedPlayers,
        level: level,
    };
    localStorage.setItem("gameData", JSON.stringify(data));
}

// COMMENCER LE JEU
function startGame() {
    gameRunning = true;
    playLevel(level);
}

// GESTION DES NIVEAUX
function playLevel(level) {
    const currentLevel = levels.find((lvl) => lvl.level === level);
    monsters = [];
    for (let i = 0; i < currentLevel.monsters; i++) {
        monsters.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height });
    }

    if (currentLevel.boss) {
        boss = { type: currentLevel.boss, health: 100 * level };
    }

    gameLoop();
}

// BOUCLE DE JEU
function gameLoop() {
    if (!gameRunning) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dessiner les monstres
    monsters.forEach((monster) => {
        ctx.fillStyle = "red";
        ctx.fillRect(monster.x, monster.y, 20, 20);
    });

    // Dessiner le boss
    if (boss) {
        ctx.fillStyle = "purple";
        ctx.fillRect(canvas.width / 2 - 50, canvas.height / 2 - 50, 100, 100);
    }

    requestAnimationFrame(gameLoop);
}

// GESTION DES MONSTRES ET DU BOSS
function defeatMonster(index) {
    monsters.splice(index, 1);
    points += 10;
    if (monsters.length === 0 && (!boss || boss.health <= 0)) {
        nextLevel();
    }
}

function defeatBoss() {
    boss = null;
    points += 100;
    nextLevel();
}

function nextLevel() {
    level++;
    if (level > 99) {
        alert("Félicitations, vous avez terminé le jeu !");
        gameRunning = false;
    } else {
        playLevel(level);
    }
    }

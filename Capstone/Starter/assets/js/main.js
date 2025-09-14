// --- Capstone Challenge: Dragon Rune Adventure ---

// Constructor for Player
class Player {
  constructor(name, species) {
    // Set up player properties
  }
  // Method to add a rune to the player's collection
  addRune(rune) {
    this.runes.push(rune);
  }
  // Method to lose 1 XP (never goes below 0)
  loseXP() {
  }
  // Method to gain 1 XP
  gainXP() {
  }
  // Method to get a summary of the player's stats
  getStats() {
    return `${this.name} (${this.species}) | XP: ${this.xp} | Runes: ${this.runes.join(", ") || "None"}`;
  }
}

// Array of possible rune choices (each is an object)
const runeChoices = [
  { name: "Rune of Fire", power: "Flame" },
  { name: "Rune of Ice", power: "Freeze" },
  { name: "Rune of Wisdom", power: "Knowledge" },
  { name: "Rune of Shadows", power: "Stealth" }
];

// Utility function: returns a random integer from 0 up to (but not including) max
const randInt = (max) => Math.floor(Math.random() * max);

// Utility function: displays the player's stats in the HTML page
const showStats = player => {
  document.getElementById('stats').textContent = player.getStats();
};

// Main function that runs the adventure game
// Your logic to start the adventure.
const startAdventure = () => {
  let userName = prompt("Enter your name:");
  if (!userName) {
    alert("Name is required to start your adventure!");
    return; // Exits game
  }
  console.log(`Your name is ${userName}.`)

  let species = prompt("Are you a dragon or human?");
  if (!species) {
    alert("You must choose either dragon or human.");
    return; // Extis game
  }
  console.log(`You are a ${species}.`)

  let rune = prompt("Select Rune. 1 - Rune of Fire. 2 - Rune of Wisdom ");
  if (!rune) {
    alert("You must choose either 1 or 2.");
    return; // Extis game
  }
  console.log(`You selected Rune number ${rune}.`)
};



// Add event listener to the start button to begin the adventure when clicked
document.getElementById('startBtn').addEventListener('click', startAdventure);
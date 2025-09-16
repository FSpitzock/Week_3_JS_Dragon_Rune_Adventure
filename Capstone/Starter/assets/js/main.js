// --- Capstone Challenge: Dragon Rune Adventure ---

// Constructor for Player
class Player {
  constructor(name, species, element, rune) {
    // Set up player properties
    this.name = name;
    this.species = species;
    this.element = element;
    this.rune = rune;
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
  const userConfirmed = window.confirm("Start Adventure?");
  if (userConfirmed) {
    console.log("User clicked OK. Proceed with adventure.")
  } else {
    alert("You Cancelled the game.");
    return; // User clicked cancel to exit game
  } 
 // First window prompt box: User Name
  let userName = prompt("Enter your name:");
  if (userName === null) {
    // User clicked "Cancel"
    alert("You Cancelled the game.");
    return; // Exits game
  } else if  (!userName) {
    alert("Name is required to start your adventure!");
    return; // Exits game
  }
  console.log(`Your name is ${userName}.`)


// Second window prompt box: Species
  let species = prompt("Are you a dragon or human?");
  let desiredValue1 = "dragon";
  let desiredValue2 = "human";
  let lowerCaseInput = species.trim().toLowerCase();
 
  if (lowerCaseInput !== desiredValue1 && lowerCaseInput !== desiredValue2) {
    alert("You are a" + " " + species + ". You are not eligible for XP.");
    return; // Exits game
  } 
  else if (!species) {
    alert("You must choose either dragon or human.");
  } 
  else if(species === null) {
    alert("You Cancelled the game.");
    return; // Exits game
  }
  console.log(`You are a ${species}.`)

  // Third window prompy box: Element
  let element = prompt("What is your element? \n(e.g., Fire, Ice, Earth, Wind)");
  let desiredElement1 = "fire";
  let desiredElement2 = "ice";
  let desiredElement3 = "earth";
  let desiredElement4 = "wind";
  let lowerCaseElement = element.trim().toLowerCase();

   
  if (lowerCaseElement !== desiredElement1 && 
      lowerCaseElement !== desiredElement2 && 
      lowerCaseElement !== desiredElement3 && 
      lowerCaseElement !== desiredElement4) {
      alert("You must choose a true element! Start over!");
      return; // Exists game  
      }  
      else if (!element) {
    alert("An Element is required to continue your journey!");
    return; // Exits game
  }
   console.log(`Your element is: ${element}.`)

// Fourth window prompy box: Rune selector
  let rune = prompt("Select Rune. \n1 - Rune of Wisdom (Knowledge). \n2 - Rune of Fire (Flame) \n(only type in the number 1 or number 2)");
  //rune = Number();
  let desiredRune1 = "1";
  let desiredRune2 = "2";
    
  if (rune !== desiredRune1 && rune !== desiredRune2) {
    alert ("You must choose the correct rune!");
    return; // Exits game
  } else if  (!rune) {
    alert("You must choose either 1 or 2.");
    return; // Exits game
  } else if (rune === null) {
    // User clicked "Cancel"
    alert("You Cancelled the game.");
    return; // Exits game
  }

  console.log(`You selected Rune number ${rune}.`);
  console.log( Player); 
};



// Add event listener to the start button to begin the adventure when clicked
document.getElementById('startBtn').addEventListener('click', startAdventure);
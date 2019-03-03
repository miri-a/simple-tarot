// An array of cards

var cards = 
[{card: "The Fool",
desc: "a new beginning.",
src: "RWS_Tarot_00_Fool.jpg"},
{card: "The Magician",
desc: "power.",
src: "hRWS_Tarot_01_Magician.jpg"},
{card: "The High Priestess",
desc: "secrets.",
src: "RWS_Tarot_02_High_Priestess.jpg"},
{card: "The Empress",
desc: "fertility.",
src: "RWS_Tarot_03_Empress.jpg"},
{card: "The Emperor",
desc: "control.",
src: "RWS_Tarot_04_Emperor.jpg"},
{card: "The Hierophant",
desc: "tradition.",
src: "RWS_Tarot_05_Hierophant.jpg"},
{card: "The Lovers",
desc: "harmony.",
src: "RWS_Tarot_06_Lovers.jpg"},
{card: "The Chariot",
desc: "travels.",
src: "RWS_Tarot_07_Chariot.jpg"},
{card: "Strenght",
desc: "compassion.",
src: "RWS_Tarot_08_Strength.jpg"},
{card: "The Hermit",
desc: "loneliness.",
src: "RWS_Tarot_09_Hermit.jpg"},
{card: "Wheel of Fortune",
desc: "unpredictability.",
src: "https://upload.wikimedia.org/wikipedia/en/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg"},
{card: "Justice",
desc: "clarity.",
src: "RWS_Tarot_11_Justice.jpg"},
{card: "The Hanged Man",
desc: "sacrifice.",
src: "RWS_Tarot_12_Hanged_Man.jpg"},
{card: "Death",
desc: "changes.",
src: "RWS_Tarot_13_Death.jpg"},
{card: "Temperance",
desc: "balance.",
src: "RWS_Tarot_14_Temperance.jpg"},
{card: "The Devil",
desc: "boundaries.",
src: "RWS_Tarot_15_Devil.jpg"},
{card: "The Tower",
desc: "Destruction.",
src: "RWS_Tarot_16_Tower.jpg"},
{card: "The Star",
desc: "hope.",
src: "hRWS_Tarot_17_Star.jpg"},
{card: "The Moon",
desc: "illusion.",
src: "RWS_Tarot_18_Moon.jpg"},
{card: "The Sun",
desc: "happiness.",
src: "RWS_Tarot_19_Sun.jpg"},
{card: "Judgement",
desc: "a big reveal.",
src: "RWS_Tarot_20_Judgement.jpg"},
 {card: "The World",
desc: "completion.",
src: "RWS_Tarot_21_World.jpg"}
];

// The button function

function buttonClick() {
  
// Create a random number generator

var cardsNumber = cards.length;
var randomNumber = Math.random();
var chooseRange = (randomNumber * cardsNumber) + 1;
var numberGen = Math.floor(chooseRange);

// Change HTML
  
  document.getElementById('card').innerHTML = "Your answer is " + cards[numberGen].card + "." + "<br> This card represents " + cards[numberGen].desc;
  document.getElementById('face').src = cards[numberGen].src;
  document.getElementById('button').visibility = 'hidden';   
  document.getElementById('button').innerHTML = "Try another question";

}
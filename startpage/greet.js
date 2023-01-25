const greeting = document.getElementById("greeting");
const hour = new Date().getHours();
const welcomeTypes = ["Good morning.", "Good afternoon.", "Good evening.", "Good night."];
let welcomeText = "";

if (hour < 12) welcomeText = welcomeTypes[0];
else if (hour < 18) welcomeText = welcomeTypes[1];
else if (hour < 21) welcomeText = welcomeTypes[2];
else welcomeText = welcomeTypes[3];

greeting.innerHTML = welcomeText;
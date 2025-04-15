const outputDiv = document.getElementById("output"); // keep this to output to page.

// Problem 1
// 1. Create an object called gameSettings
// 2. with the properties: difficulty, soundOn, and maxPlayers. 
// 3. Loop through the object and 
// 4. display the results to the page.

let gameSettings = {
  difficulty: "Hard",
  soundOn: true,
  maxPlayers: 20,
  toggleSound: function(){
    if (gameSettings.soundOn === true){
      gameSettings.soundOn = false
    }
    else{
      gameSettings.soundOn = true
    }
  }
}



function problem1() {
  // Output results in a new result variable. use let result = ______
  let result = ""

  for (let [key, value] of Object.entries(gameSettings)){
    if (key !== "toggleSound"){
      result += `${key}: ${value} <br>`
    }
  }

  outputDiv.innerHTML = result
}

// Problem 2
// 1. Add a method to the gameSettings object called toggleSound 
// 2. that switches the soundOn property between true and false. 
// 3. Call the method and output the soundOn property to the page. 
// 4. Each time you click the button, it should alternate between true and false.

function problem2() {
  // Add ONE line IN THIS function that calls toggleSound method.
  gameSettings.toggleSound()
  outputDiv.innerHTML = `<strong>Sound is now:</strong> ${gameSettings.soundOn}`;
}

// Problem 3
// 1. Create an object called smoothie 
// 2. with the properties flavor, size, and hasProtein (boolean). 
// 3. Prompt the user for a size, then 
// 4. display the updated size on the page.
  
  function problem3() {
    let smoothie = {
      flavor: prompt("What do you want the flavor to be?"),
      size: prompt("What do you want for the size"),
      hasProtein: confirm("Ok for protein & Cancel for no protien"),
    }

    // keep this if else block to help with overwriting the old size. 
    // You will need to have created a newSize variable with the use of a prompt.
    let newSize = prompt("Choose a new size")
    
    if (newSize && newSize.trim() !== "") {
      smoothie.size = newSize.trim();
    }
    console.log(smoothie.size)
    outputDiv.innerHTML = `<strong>Smoothie Size Updated:</strong> ${smoothie.size}`;
  }
  

// Problem 4
// 1. Create an object called gadget. 
// 2. gadget should have properties of name, batteryLife, and isWireless. 
// 3. Write a function called printGadgetSpecs that 
// 4. takes the properties of gadget and 
// 5. displays a formatted string to the page like:
// 6. "Name: [name], Battery Life: [batteryLife] hrs, Wireless: [true/false]".


function printGadgetSpecs(gadget) {
  return `Name: ${gadget.name}, Battery Life ${gadget.batteryLife} hours, Wireless: ${gadget.isWireless} `// insert `output string here` // hint: use backticks and ${object.property} references.
}

function problem4() {
  let gadget = {
    name: "Electric toothbrush",
    batteryLife: 10,
    isWireless: true,
  }
  
  
  outputDiv.innerHTML = `<strong>Gadget Specs:</strong> ${printGadgetSpecs(gadget)}`;
}

// Problem 5
// 1. Create an object called garden that
// 2. has a property plants (an array of strings). 
// 3. Add a method addPlant to garden that 
// 4. takes user input (text entry box) and 
// 5. PUSHes a new plant into the array. 
// 6. Use the method to add two plants, then 
// 7. loop through the object to display (list out on the page) the plants in the garden.


function problem5() {
  let garden = {
    plants: ["Peonies", "Roses", "Cucumber", "Eggplant"],
    addPlant: function(){
      garden.plants.push(newPlant)
    }
  }
  // This helps with keeping your text entry box clean after every input.
  // No need to change this, just keep the variable and object naming in mind.
  const newPlant = document.getElementById("plantInput").value;
  if (newPlant.trim() !== "") {
    garden.addPlant(newPlant);
    document.getElementById("plantInput").value = "";
  }

  // Keep this and make use of it to help with outputting your results :)
  let result = "<strong>Plants in Garden:</strong><ul>";
  for (let plant of garden.plants) {
    result += `<li>${plant}</li>`;
  }
  result += "</ul>";
  outputDiv.innerHTML = result;
}

// Problem 6
// 1. Create an object called playlist that
// 2. has a name and a songList (array). 
// 3. Add a method addSong that adds a new song to the list. 
// 4. This should take user input (prompt) to add the song to songList. 
// 5. Then add two songs and log the playlist.

function problem6() {
  let playlist = {
    name: "Moody Blues",
    songList: [],
    addSong: function(song){
      playlist.songList.push(song)
    }
  }
  
  // Use a for loop that iterates 2 times to ask for two songs.
  // No need to touch the for loop except uncommenting and replacing the PLACEHOLDER.
  for (let i = 0; i <= 1; i++) {
    const song = prompt(`Enter song ${i + 1}:`);
    if (song && song.trim() !== "") {
      playlist.addSong(song.trim());
     }
  }

  // This will output to the page for you:
  // Just fill in the PLACEHOLDERs with the correct info.
  let result = `<strong>Playlist: ${playlist.name} </strong><ul>`;
  for (let song of playlist.songList) {
    result += `<li>${song}</li>`;
  }
  result += "</ul>";
  outputDiv.innerHTML = result;
}

//This function opens and close the drop-down menu
function toggleDropdown(){
    document.getElementById("dropdownMenu").classList.toggle("show");
}
//This makes the drop down menu close when the user click anywhere else on the page
window.onclick = function(event) {
    //checks if the users clickes any mode
    if (!event.target.matches('.Modes')) {

        let dropdown = document.getElementById("dropdownMenu");
        //closes the menu if the mode is selected 
        if (dropdown.classList.contains("show")){
            dropdown.classList.remove("show");
        }
    }
}

function changeMode(mode) { //This is to change the accessibility modes
    //Remove any modes that is already applied 
    document.body.classList.remove(
        "normal",
        "protanomaly",
        "deuteranomaly",
        "tritanopia",
        "achromatopsia",
        "dyslexia"
    );
    //If the end user clicks normal it would make the website as it was 
    if (mode === 'normal'){
        return;
    }
    
    //Applying selected mode 
    document.body.classList.add(mode);
}
//This is the function that will help to read the webpage out loud 
function toggleScreenReader(){
    //When the screen reader is already reading and you want to stop it
    if (window.speechSynthesis.speaking ||
        window.speechSynthesis.pending) {
            window.speechSynthesis.cancel();
            return;
        }
        //This gets all the text from the webpage
        let text = document.body.innerText.trim();
        //checking if there is any text to read
        if (text === ""){
            return;
        }
        //This is creating the speech
        let speech = new SpeechSynthesisUtterance(text);
        //This controls how the speech should sound like 
        speech.rate = 1;
        speech.pitch = 1;
        speech.volume = 50;
        //This reads the webpage
        window.speechSynthesis.speak(speech);
};

//Weekly challenges system
// Find all challenge checkboxes
const challenges = document.querySelectorAll(".challenge-checkbox");

// Find the points displays
const weeklyPointsDisplay = document.getElementById("weeklyPoints");
const totalPointsDisplay = document.getElementById("totalPoints");

// Find the progress message
const progressMessage = document.getElementById("progressMessage");

// Find the progress image
const progressImage = document.getElementById("progressImage");
//loading saved data
// Get saved weekly points
let weeklyPoints =
    Number(localStorage.getItem("weeklyPoints")) || 0;

// Get saved total points
let totalPoints =
    Number(localStorage.getItem("totalPoints")) || 0;

// Get saved checkbox states
let completedChallenges =
    JSON.parse(localStorage.getItem("completedChallenges")) || [];
//restoring checkboxes
challenges.forEach(function(challenge, index) {

    if (completedChallenges.includes(index)) {

        challenge.checked = true;

    }

});
//wpdating the website 
function updateDisplay() {

    // Update weekly points
    weeklyPointsDisplay.textContent = weeklyPoints;

    // Update total points
    totalPointsDisplay.textContent = totalPoints;


    // Update progress message
    if (weeklyPoints === 0) {

        progressMessage.textContent =
            "LOREM IPSUM";

    }

    else if (weeklyPoints <= 20) {

        progressMessage.textContent =
            "LOREM IPSUM";

    }

    else if (weeklyPoints <= 40) {

        progressMessage.textContent =
            "LOREM IPSUM";

    }

    else if (weeklyPoints <= 60) {

        progressMessage.textContent =
            "LOREM IPSUM";

    }

    else if (weeklyPoints < 80) {

        progressMessage.textContent =
            "LOREM IPSUM";

    }

    else {

        progressMessage.textContent =
            "LOREM IPSUM";

    }


    // Save everything
    localStorage.setItem(
        "weeklyPoints",
        weeklyPoints
    );

    localStorage.setItem(
        "totalPoints",
        totalPoints
    );

    localStorage.setItem(
        "completedChallenges",
        JSON.stringify(completedChallenges)
    );

}
//when challenge is clicked
challenges.forEach(function(challenge, index) {

    challenge.addEventListener("change", function() {

        // Get the points for this challenge
        const points =
            Number(challenge.dataset.points);
//challenge completed 
        if (challenge.checked) {

            // Make sure it isn't already counted
            if (!completedChallenges.includes(index)) {

                weeklyPoints =
                    weeklyPoints + points;

                totalPoints =
                    totalPoints + points;

                completedChallenges.push(index);

            }

        }
//challenge - unchecked 
        else {

            // making sure it was previously counted
            if (completedChallenges.includes(index)) {

                weeklyPoints =
                    weeklyPoints - points;

                totalPoints =
                    totalPoints - points;

                completedChallenges =
                    completedChallenges.filter(function(number) {

                        return number !== index;

                    });

            }

        }


        //to update everything
        updateDisplay();

    });

});
//initial displat
updateDisplay();

//This is the section for jargon dictionary
function showDefinition(word){
    //This is where the dictionary definitions are
    const definitions = {
        "deforestation": 
        " [noun] the action of clearing a wide area of trees",

        "greenhouse gases":
        "Any gas in Earth's atmosphere that absorbs infrared radiation and traps heat, causing the greenhouse effect",

        "greenhouse effect":
        "The warming of Earth's surface and lower atmosphere caused by gases that let sunlight in but trap outgoing heat",

        "Chlorofluorocarbons":
        "Chemical compounds made of carbon, chlorine, fluorine, and sometimes hydrogen",

        "organic fertilizer":
        "A natural plant food made from things that were once alive, like animal waste or dead plants",

        "refrigerants":
        "Special liquids or gases inside air conditioners and refrigerators that absorb heat and move it outside to make things cold",

        "solvents":
        "a liquid (or sometimes a gas or solid) that can dissolve other things to make a mixture",

        "propellants":
        "a substance that pushes or drives something forward",
    };
    //Get the definition
    const definition = definitions[word];
    //Putting the word into the dictionry box
    document.getElementById("jargonTitle").textContent = word;
    //Putting the definition into the dictionary box
    document.getElementById("jargonDefinition").textContent = definition;
    //Shows the dictionary box
    document.getElementById("jargonBox").style.display = "block";
}
//Closing the jargon dictionary
function closeDefinition(){
    document.getElementById("jargonBox").style.display = "none";
}

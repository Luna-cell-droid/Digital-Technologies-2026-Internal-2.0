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

function changeMode(mode) {
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
//Weeky challenges system
// Find all the challenge checkboxes
const challenges = document.querySelectorAll(".challenge-checkbox");
console.log(challenges.length);
// Find the points displays
const weeklyPointsDisplay = document.getElementById("weeklyPoints");
const totalPointsDisplay = document.getElementById("totalPoints");

// Starting points
let weeklyPoints = 0;
let totalPoints = 0;
// Add points when a challenge is checked or unchecked
challenges.forEach(function(challenge) {

    challenge.addEventListener("change", function() {

        const points = Number(challenge.dataset.points);

        // If the challenge is checked
        if (challenge.checked) {

            weeklyPoints = weeklyPoints + points;
            totalPoints = totalPoints + points;

        }

        // If the challenge is unchecked
        else {

            weeklyPoints = weeklyPoints - points;
            totalPoints = totalPoints - points;

        }

        // Update the numbers on the webpage
        weeklyPointsDisplay.textContent = weeklyPoints;
        totalPointsDisplay.textContent = totalPoints;

    });

});
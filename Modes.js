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
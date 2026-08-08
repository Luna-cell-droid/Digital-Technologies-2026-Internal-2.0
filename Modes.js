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
//Weekly challenge system
const challenges = document.querySelectorAll(
    ".challenge-checkbox"
);

//Find the points and image
const weeklyPointsDisplay =
    document.getElementById("weeklyPoints");

const totalPointsDisplay =
    document.getElementById("totalPoints");

const progressImage =
    document.getElementById("progressImage");

const progressMessage =
    document.getElementById("progressMessage");

//find the correct week
function getCurrentWeek(){

    const today = new Date();

    const firstDay =
        new Date(today.getFullYear(), 0, 1);

    const difference =
        today - firstDay;

    const days =
        Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );

    const week =
        Math.ceil(
            (days + firstDay.getDay() + 1) / 7
        );

    return today.getFullYear() + "-week-" + week;
}
//Load the saved information 
let savedData =
    JSON.parse(
        localStorage.getItem(
            "EarthBeatWeeklyChallenges"
        )
    );
//In case if there is no saved data
if(savedData === null){

    savedData = {

        week: getCurrentWeek(),

        weeklyPoints: 0,

        totalPoints: 0,

        completedChallenges: []

    };

}
//Check the points for new week
const currentWeek =
    getCurrentWeek();


if(savedData.week !== currentWeek){

    savedData.week =
        currentWeek;

    savedData.weeklyPoints =
        0;

    savedData.completedChallenges =
        [];

}
//Saving data
function saveData(){

    localStorage.setItem(
        "EarthBeatWeeklyChallenges",
        JSON.stringify(savedData)
    );

}
//Restoring the checkboxes back to its original position
challenges.forEach(
    function(challenge, index){
        if(
            savedData.completedChallenges
            .includes(index)
        ){
            challenge.checked = true;
        }
    }
);
//changing the progress image according to the points
function updateProgressImage(){

    if(savedData.weeklyPoints === 0){

        progressImage.src =
            "";

        progressMessage.textContent =
            "Complete a challenge to start earning points.";

    }

    else if(savedData.weeklyPoints <= 20){

        progressImage.src =
            "";

        progressMessage.textContent =
            "Great start! Keep going.";
 }

    else if(savedData.weeklyPoints <= 40){

        progressImage.src =
            "";

        progressMessage.textContent =
            "You are making great progress!";

    }
    else if(savedData.weeklyPoints <= 60){

        progressImage.src =
            "";

        progressMessage.textContent =
            "Amazing! Keep taking action.";

    }

    else if(savedData.weeklyPoints < 80){

        progressImage.src =
            "";

        progressMessage.textContent =
            "You are almost at the weekly goal!";

    }
    else{

        progressImage.src =
            "Images/progress5.png";

        progressMessage.textContent =
            "You completed all the weekly challenges!";

    }

}
//updating the screen
function updateDisplay(){

    weeklyPointsDisplay.textContent =
        savedData.weeklyPoints;

    totalPointsDisplay.textContent =
        savedData.totalPoints;

    updateProgressImage();

    saveData();
}
//When the challenge is clicked 
challenges.forEach(
    function(challenge, index){

        challenge.addEventListener(
            "change",
            function(){

                const points =
                    Number(
                        challenge.dataset.points
                    );
//when challenge is completed 
  if(challenge.checked){

                    savedData.weeklyPoints +=
                        points;

                    savedData.totalPoints +=
                        points;

                    savedData.completedChallenges
                        .push(index);

                }

//When challenge is unchecked
else{

                    savedData.weeklyPoints -=
                        points;

                    savedData.totalPoints -=
                        points;

                    savedData.completedChallenges =
                        savedData.completedChallenges
                        .filter(
                            function(number){

                                return number !== index;

                            }
                        );

                }
//Update the website
        updateDisplay();

            }
        );

    }
);
//Load the initial information
updateDisplay();
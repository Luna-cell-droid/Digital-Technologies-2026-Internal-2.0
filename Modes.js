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
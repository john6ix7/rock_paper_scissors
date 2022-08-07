function getComputerChoice() {
    let ranNum = Math.floor((Math.random() * 3)+ 1); // generates a random number between 1 and 3

    console.log(ranNum); // Makes sure a random number is being matched to the string returned

    if (ranNum == 1){
        return ("rock");

    }else if(ranNum == 2) {
        return ("paper")
    }
    else {
        return ("scissors")
    } // conditional statement compares random number generated to specified value and returns string if true
}
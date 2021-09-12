//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

//Coinditional / ternerary solution to the function above

function experiencePoints(bool) {
    console.log(xp);
    return bool;
}

var xp = experiencePoints(true) ? "You won the battle, here is 10 XP" : "You lost the battle, here is 1 XP";
var xp = experiencePoints(false) ? "You won the battle, here is 10 XP" : "You lost the battle, here is 1 XP";


//Using this function, answer the questions below:
// input in console is case sensitive
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");

// you encounter a monster


//#3 return value when moveCommand("back");

// you arrived home


//#4 return value when moveCommand("right");

// you found a river


//#5 return value when moveCommand("left");

// you run into a troll 


//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

// my bonus switch fun
function tavern(talkToBarkeep) {
    var talk;
    switch (talkToBarkeep) {
        case "Option 1":
            break;
            talk = "Order a brew";
        case "Option 2":
            talk = "Ask about the monsters terrorizing the town";
            break;
            break;
        case "Option 3":
            return talk = "See what they have for sale";
            break;
        case "Option 4":
            break;
            talk = "Request a room for the night";
            break;
        default:
            talk = "Please choose an option!";
    }
    return talk;
}


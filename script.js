var rand;
var choice;
var $victoire = document.querySelector('#victoire p');

function $rand() {
    rand = Math.floor((Math.random() * 3) + 1);
}


function rps(choice, rand) {
    if (choice === rand) {
        $choice = "Egalité! ";
    } else if (choice == 1 && rand == 2) {
        $choice = "Feuille, gagné!";
    } else if (choice == 1 && rand == 3) {
        $choice = "Ciseaux, gagné!";
    } else if (choice == 1 && rand == 1) {
        $choice = "Egalité!";   
    } else if (choice == 2 && rand == 3) {
        $choice = "Ciseaux, Perdu!";
    } else if (choice == 2 && rand == 1) {
        $choice = "Pierre, Perdu!"
    } else if (choice == 2 && rand == 2) {
        $choice = "Egalité!"    
    } else if (choice == 3 && rand == 1) {
        $choice = "Pierre, gagné!";
    } else if (choice == 3 && rand == 2) {
        $choice = "Feuille, perdu!";
    } else if (choice == 3 && rand == 3) {
        $choice = "Egalité!";
    }
        
    
    $victoire.innerHTML = $choice;
};

function playerschoice() {
    choice = document.getElementById('jeux').value;
};
button.onclick = activate;

function activate() {
    $rand();
    playerschoice();
    rps(choice, rand)
};
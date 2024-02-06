// On récupère l'élément #board
const board = document.querySelector("#board");

// On crée une box avec la class "carree"
const box = document.createElement("div")
box.classList.add("carree")

// Je défini un compteur de box, pour en afficher un maximum
let boxCree = 0;
const maxBox = 15*15;

// Je crée un tableau pour faire une gestion de mes box (ajouter/supprimer)
const createdBoxes = [];

document.addEventListener("keydown", (event) => { // Je fais réagir le dom grâce a la pression d'une touche du clavier
    
    const newBox = box.cloneNode(); // Je clone ici ma newBox

    if (event.key === 'ArrowDown' && boxCree < maxBox) { // Si j'appuie sur la fleche du bas, je crée une box
        boxCree++;
        newBox.style.backgroundColor = getRandomColor();
        board.appendChild(newBox);
        createdBoxes.push(newBox); // J'ajoute la box dans le tableau
        console.log('Touche "ArrowDown" pressée.');

    } else if (event.key === 'ArrowUp' && boxCree > 0) { // Si j'appuie sur la fleche du haut, je supprime une box
        const lastBox = createdBoxes.pop(); // Je récupère ici la dernière box du tableau, pour la supprimer
        board.removeChild(lastBox);
        boxCree--;
        console.log('Touche "ArrowUp" pressée.');
    }

    newBox.addEventListener("click", function() { // Ici je gère le click sur la box, pour la colorer en noir
        newBox.style.backgroundColor = "black"
        console.log("click")
    })
});

function getRandomColor() { // Ici une function pour crée une couleur random
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
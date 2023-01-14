/*
1. cliccando sul bottone generate compare la griglia
2. creo di div cella con numerazione da 1 a 100
3. al click dell'utente sulla cella si colora di azzurro grazie alla classe:
    - appare in console il numero
*/

// seleziono la griglia
const gridContainer = document.getElementById('grid-container');
console.log('Ho selezionato l\'elemento', gridContainer);

//seleziono il bottone
const generateButton = document.getElementById('generate-button');
console.log('Ho selezionato l\'elemento', generateButton);



// cliccando compare la griglia
generateButton.addEventListener('click',
    function() {

        bombs = [];

        // creo le bombe nella griglia
        for (let i = 0; i < 16; i++){
            const newBomb = getUniqueBombs(1, 100, bombs);
            bombs.push(newBomb);
        }
        console.log('le bombe sono', bombs);

        const newCell = createNewCell(bombs);


    }

);






















// FUNZIONI

//Funzione celle
function createNewCell (redBomb){

    for(let i = 1 ; i <= 100 ; i++){

        // creo le mie celle
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gridContainer.append(cell);
    
        //mostro all'interno il contenuto
        cell.innerHTML = [i];

         // aggiungo il click colorato
        cell.addEventListener('click', 
    
        function () {
            if (redBomb.includes(cell.innerHTML = [i])){
                cell.classList.add('bombs');
                console.log('Ho cliccato sulla bomba', redBomb);
                alert('Hai perso');
            }
            else{
                cell.classList.add('clicked');
                console.log('Ho cliccato sulla cella', i);
            }
        }

    );

    }

}

// Funzione per generare le bombe casuali
function getBombs (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione per bombe uniche
function getUniqueBombs (min, max, arr){

    let randomBombs = getBombs(min, max);

    while(arr.includes(randomBombs)){
        randomBombs = getBombs(min, max);
    }

    return randomBombs;
}
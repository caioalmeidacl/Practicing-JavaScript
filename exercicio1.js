// Exercicio transformando nota numerica em 

function getScore(note) {
    noteA = note >= 90 && note <= 100
    noteB = note >= 80 && note < 90
    noteC = note >= 70 && note < 80
    noteD = note >= 60 && note < 70
    noteF = note < 60  && note >= 0

    let scoreFinal;

    if (noteA) {
        scoreFinal = 'A'
    } else if(noteB) {
    scoreFinal = 'B'
    } else if(noteC) {
        scoreFinal = 'C'
    } else if(noteD) {
        scoreFinal = 'D'
    } else if(noteF) {
        scoreFinal = 'F'
    }

    return scoreFinal

}
 
console.log(getScore(45))
 
 


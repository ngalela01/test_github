
// let score =0

// let choix= prompt("Avec quelles liste désirez vous jouer: Mots ou Phrases?")

// while(choix!== "Mots" && choix!=="Phrases"){
//     choix= prompt("Avec quelles liste désirez vous jouer: Mots ou Phrases?")
// }

// if (choix==="Mots"){


// for (let i=0;i<listeMots.length; i++){
//     let motUilisateur=prompt("entrer le mot :"+ listeMots[i])
//     if(motUilisateur===listeMots[i]){
//         score ++
//     }
// }
// console.log("votre score est de "+ score + "sur 3")
// }
// else {

//     for (let i=0;i<listePhrases.length ; i++){
//         let phraseUtilisateur =prompt("entrer la phrase :"+ listePhrases[i])
//         if(phraseUtilisateur===listePhrases[i]){
//             score ++
//         }
        
//     }
//     console.log("votre score est de "+ score + " sur 3 ") 
// }




// fonction choisirPhrasesOuMots : cette fonction demande à l’utilisateur s’il 
// veut jouer avec des phrases ou des mots.

function choisirPhraseOuMots(){ 
    let choix= prompt("Avec quelles liste désirez vous jouer: Mots ou Phrases?")

while(choix!== "Mots" && choix!=="Phrases"){
    choix= prompt("Avec quelles liste désirez vous jouer: Mots ou Phrases?")
}
return choix
}


/*fonction lancerBoucleDeJeu : cette fonction contient la boucle principale de jeu, 
c'est-à-dire la boucle for qui propose les mots/phrases au joueur, et lui demande de 
taper ces mots. Elle prend en paramètre le tableau de mots/phrases qui sera proposé au joueur, 
et retourne le nombre de mots/phrases correctement tapés ; */ 

function lancerBoucleDeJeu(tableau){
    let score=0
    for (let i=0;i<tableau.length; i++){
        let motUilisateur=prompt("entrer le mot :"+ tableau[i])
        if(motUilisateur===tableau[i]){
            score ++
        }
        
    }
    return score
}


/* fonction afficherResultat : cette fonction prend en paramètre le résultat et le nombre total de mots proposés, 
et affiche le résultat du joueur ;*/
function afficherResultat(resultat, nbreTotalMot){
    return console.log("votre resulat est de "+ resultat + " sur  "+nbreTotalMot)
}



/*fonction lancerJeu : cette fonction sera la fonction principale, c’est elle qui s’occupe de lancer toutes les autres. 
En d’autres termes, c’est elle qui va appeler les fonctions que vous venez d’écrire.*/

function lancerJeu (){
    let resultat=0
    let nbreTotalMot=0
    let choix =choisirPhraseOuMots()
    if (choix=="Mots"){
        nbreTotalMot=listeMots.length
        resultat=lancerBoucleDeJeu(listeMots)
    }
    else{
        nbreTotalMot=listePhrases.length
        resultat=lancerBoucleDeJeu(listePhrases)
    }
    return afficherResultat(resultat,nbreTotalMot)
}

lancerJeu()
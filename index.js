
// Entrer des nombres 

// let number_1 = parseFloat(prompt("Entrez le nombre 1 "));
// let number_2 = parseFloat(prompt("Entrez le nombre 2 "));
// let somme =number_1 + number_2 ; 
// console.log(somme);

// let number_3 = parseFloat(prompt("Entrez le nombre 3 "));
// let number_4 = parseFloat(prompt("Entrez le nombre 4 "));
// let soust = number_1 - number_2 ;
// //calcul
// console.log(soust);

 
//Exercice 1 
let cons = parseFloat(prompt("Entrez la consommation"));
let type_client = true;
let montant_bruit = 0;
let taxe_eventuelle = 0 ;
const taxe = 0.5 ;
const remise = 0.10;
let montant_final = 0;
let prix = 0;
if(cons <= 100) {
    prix = 50 ;
    montant_bruit = cons * prix;
    console.log(montant_bruit+ " FCFA");
} else if (cons <= 300){
    prix = 75;
    montant_bruit = cons * prix;
    console.log(montant_bruit + " FCFA");
    console.log(type_client);
    console.log("Vous êtes un abonné standard");
    montant_final = remise * montant_bruit ;
    console.log("Votre prix final est " + montant_final + " FCFA");

    

} else if (cons <= 500) {
    prix = 100;
    montant_bruit = cons * prix;
    console.log(montant_bruit + " FCFA");
    console.log(type_client);
    console.log("Vous êtes un abonné prémuim");
    taxe_eventuelle = remise * montant_bruit ;
    console.log("Votre prix d'achat est fixé sur "  + taxe_eventuelle +  " FCFA ");
    montant_final = taxe_eventuelle * taxe ;
    console.log("Votre prix final est "  + montant_final  + " FCFA ");



} else {
    prix = 150;
    montant_bruit = cons * prix;
    console.log(montant_bruit + " FCFA");

}





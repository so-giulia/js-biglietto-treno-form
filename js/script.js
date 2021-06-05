//Creiamo un finto biglietto del treno con:
//Nome passeggero OK
//Codice treno (numero casuale tra 90000 e 100000 escluso)
//Numero carrozza (numero casuale tra 1 e 9 incluso)
//Prezzo calcolato in base all'esercizio visto in precedenza
//Categoria selezionata dall'utente
//Al click su "Genera" appare la schermata con le caratteristiche del biglietto. OK
//Al click su "Annulla" dobbiamo ripulire il form OK
//Bonus: aggiungete qualche controllo sui dati di input!




//Genera
var genera = document.getElementById("genera");

genera.addEventListener("click", function(){

    //visualizzo il biglietto
    document.getElementById("output").className = "b";

    //prendo i valori
    var nome = document.getElementById("nome").value;
    var cognome = document.getElementById("cognome").value;
    var age = document.getElementById("age").value;

    //li visualizzo nel biglietto
    document.getElementById("nomeOutput").innerHTML = nome;
    document.getElementById("nomeOutput").innerHTML += "<br>" + cognome;

});

//Annulla
var annulla = document.getElementById("annulla");

annulla.addEventListener("click", function(){
    //nascondo il biglietto
    document.getElementById("output").className = "hide";
});
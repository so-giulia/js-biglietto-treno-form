//Creiamo un finto biglietto del treno con:
//**OK** Nome passeggero
//**OK** Codice treno (numero casuale tra 90000 e 100000 escluso)
//**OK** Numero carrozza (numero casuale tra 1 e 9 incluso)

//Prezzo calcolato in base all'esercizio visto in precedenza
//Categoria selezionata dall'utente

//**OK** Al click su "Genera" appare la schermata con le caratteristiche del biglietto.
//**OK** Al click su "Annulla" dobbiamo ripulire il form 

//Bonus: aggiungete qualche controllo sui dati di input!


//————————————————————————
// *** FUNZIONE GENERA ***
//————————————————————————

var genera = document.getElementById("genera");

genera.addEventListener("click", function(){

    //visualizzo il biglietto
    document.getElementById("output").className = "b";

    //prendo i valori
    var nome = document.getElementById("nome").value;
    var km = document.getElementById("km").value;

    //li visualizzo nel biglietto
    document.getElementById("nomeOutput").innerHTML = nome;

    //——————————————————————————
    //aggiungo gli altri valori:
    //——————————————————————————

    //codice treno
    var cpCode = Math.round(Math.random() * (100000 - 90000) + 90000);
    document.getElementById("codiceCpOutput").innerHTML = cpCode;

    //numero carrozza
    var carrozza = Math.round(Math.random() * (9 - 1) + 1);
    document.getElementById("carrozzaOutput").innerHTML = carrozza;

    //calcolo prezzo in base all'età
    var prezzo = km * 0.21;
    var age = document.getElementById("age").selectedIndex;

    if(age == "0"){
        prezzo = parseFloat((prezzo - (prezzo * 0.2)).toFixed(2));
        document.getElementById("offertaOutput").innerHTML = "Sconto minorenni";
        document.getElementById("costoOutput").innerHTML = prezzo + "€";
    }else if(age == "2"){
        prezzo = parseFloat((prezzo - (prezzo * 0.4)).toFixed(2));
        document.getElementById("offertaOutput").innerHTML = "Sconto over 65";
        document.getElementById("costoOutput").innerHTML = prezzo + "€";
    }else{
        document.getElementById("offertaOutput").innerHTML = "Nessuna offerta";
        document.getElementById("costoOutput").innerHTML = prezzo + "€";
    }
});


//—————————————————————————
// *** FUNZIONE ANNULLA ***
//—————————————————————————

var annulla = document.getElementById("annulla");

annulla.addEventListener("click", function(){
    //nascondo il biglietto
    document.getElementById("output").className = "hide";
});
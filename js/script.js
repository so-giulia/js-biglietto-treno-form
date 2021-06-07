//————————————————————————
// *** FUNZIONE GENERA ***
//————————————————————————

var genera = document.getElementById("genera");

genera.addEventListener("click", function(){

    //visualizzo il biglietto
    document.getElementById("output").className = "b";

    //prendo i valori
    var nome = document.getElementById("nome").value;
    var nome = nome.charAt(0).toUpperCase() + nome.slice(1);

    //**Bonus controlli:**
    if(nome == null || nome == ""){
        alert("Inserisci il tuo nome");
        document.getElementById("output").className = "hide";
    }

    //li visualizzo nel biglietto
    document.getElementById("nomeOutput").innerHTML = nome;

    //——————————————————————————
    //aggiungo gli altri valori:
    //——————————————————————————

    //codice treno
    var cpCode = Math.round(Math.random() * 100000) + 90000;
    document.getElementById("codiceCpOutput").innerHTML = cpCode;

    //numero carrozza
    var carrozza = Math.round(Math.random() * 9) + 1;
    document.getElementById("carrozzaOutput").innerHTML = carrozza;

    //———————————————————
    //calcolo del prezzo:
    //———————————————————

    var km = document.getElementById("km").value;
    var prezzo = km * 0.21;

    var age = document.getElementById("age").selectedIndex;

    //**Bonus controlli:**
    if(km == null || km == ""){
        alert("Inserisci i km");
        document.getElementById("output").className = "hide";
    }else if(isNaN(km)){
        alert("I km devono essere espressi in numeri");
        document.getElementById("output").className = "hide";
    }

    //**Bonus controlli:**
    if(age == null || age == "0"){
        alert("Seleziona la tua età");
        document.getElementById("output").className = "hide";
    }

    if(age == "1"){
        prezzo = parseFloat((prezzo - (prezzo * 0.2)).toFixed(2));
        document.getElementById("offertaOutput").innerHTML = "Sconto minorenni";
        document.getElementById("costoOutput").innerHTML = prezzo + "€";
    }else if(age == "3"){
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
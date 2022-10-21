// Scrivere un programma che chieda all’utente:

const btnGenerator = document.querySelector(".btn-generator");
const generatorNameElement = document.querySelector(".name-surname");
const generatorOfferElement = document.querySelector(".offer");
const generatorCarriageElement = document.querySelector(".carriage");
const generatorCpElement = document.querySelector(".cp-code");
const generatorPriceElement = document.querySelector(".price");

btnGenerator.addEventListener('click', function() {
    // - il nome e cognome dell'utente
    let nameSurname = document.getElementById("name").value;
    
    // - Il numero di chilometri da percorrere
    let distance = Number(document.getElementById("distance").value);
    
    // - Età del passeggero
    let age = document.getElementById("age").value;
    
    // Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
    console.log(nameSurname, distance, age);
    
    // - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    let price = distance * 0.21;
    
    if (age === "minorenne") {
        // - va applicato uno sconto del 20% per i minorenni
        price -= price * 0.2;
        message = "Biglietto minorenni";
        
    } else if ( age === "over-65") {
        // - va applicato uno sconto del 40% per gli over 65.
        price -= price * 0.4;
        message = "Biglietto over 65";
        
    } else {
        price = distance * 0.21;
        message = "Biglietto standard";
        
    }
    console.log(`${price.toFixed(2)}€`);
    console.log(message);
    
    const ticketElement = document.querySelector(".ticket");
    // aggiungiamo variabili per calcolare la carrozza e il codice CP
    
    const carriageRandom = Math.floor(Math.random() * 10) + 1;
    const cpRandom = Math.floor(Math.random() * 9999) + 90000;

    // generiamo i dati ricavati all'interno dell'HTML, sulla sezione ticket
    
    generatorNameElement.innerHTML = nameSurname;
    generatorOfferElement.innerHTML = message;
    generatorCarriageElement.innerHTML = carriageRandom;
    generatorCpElement.innerHTML = cpRandom;
    generatorPriceElement.innerHTML = (`${price.toFixed(2)}€`);   
    
    // generiamo il biglietto dell' utente 

    ticketElement.classList.replace("ticket-hidden", "my-ticket");
});
/* -Chiedere all'utente il numero di km che vuole percorrere e salvare il dato
   -Chiedere l'età dell'utente e salvare il dato
   -Definire il prezzo del biglietto in base ai km
   -Calcolare il prezzo del viaggio

   ? SE l'utente ha 18 anni o meno
     ° applicare al prezzo dell'utente applicare il 20% di sconto

   ?SE ALTRIMENTI l'utente ha 65 anni o +
     ° applicare al prezzo dell'utente applicare il 40% di sconto

    ? ALTRIMENTI se l'utente ha un'età tra i 19 e i 64 anni
      ° applicare il prezzo già calcolato 
   
*/

let kilometerUser = parseInt(prompt("Quanti km vuoi percorrere?"));
let ageUser = parseInt(prompt("Quanti anni hai?"));
let ticketPrice = 0.21 * kilometerUser;

document.writeln("Viaggerai per " + kilometerUser + "km");
document.writeln("Hai " + ageUser + " anni");

if (ageUser < 18) {
    let sale = ticketPrice * 0.20;
    userPrice = ticketPrice - sale;
    userPrice = userPrice.toFixed(2);
    document.writeln("Il prezzo del tuo biglietto è: " + userPrice + "€")
} else if (ageUser > 65)  {
    let sale = ticketPrice * 0.40;
    userPrice = ticketPrice - sale;
    userPrice = userPrice.toFixed(2);
    document.writeln("Il prezzo del tuo biglietto è: " + userPrice + "€")
} else {
    document.writeln("Il prezzo del tuo biglietto è: " + ticketPrice + "€")
}














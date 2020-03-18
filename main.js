// Chiedere al visitatore il suo nome e salutarlo
// Quanti anni hai? Allora sei nato nel.


// creaimo var per memorizzare nome utente
var nome;
// creaiamo var per memorizzare cognome utente
var cognome;
// creaiamo var per memorizzare colore preferito utente
var colore;

// chiediamo al visitatore il suo nome
// e lo salviamo nella var creata
nome = prompt("inserisci il tuo nome");

// chiediamo al visitatore il suo cognome
// e lo salviamo nella var creata
cognome = prompt("inserisci il tuo cognome");

// chiediamo al visitatore il suo colore preferito
// e lo salviamo nella var creata
colore = prompt("inserisci il tuo colore preferito");

// calcolare password sommando nome cognome colere e 19
document.getElementById('password').innerHTML = nome + cognome + colore + "19";

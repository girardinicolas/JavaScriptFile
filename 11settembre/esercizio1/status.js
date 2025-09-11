// JavaScript semplice, senza type alias perché JS non supporta tipi statici
let currentStatus;

// Assegnazione valida
currentStatus = 'pending';

// Assegnazione non valida (nessun errore JS, ma non conforme al TS)
// currentStatus = 'invalid'; // In JS non genera errore, attenzione!

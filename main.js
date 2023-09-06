import './style.css'
import { setupCounter } from './counter.js'

setupCounter(document.querySelector('#counter'))

let counter = 0

// Fonction pour mettre à jour l'affichage du compteur
function afficherCompteur() {
  compteurElement.textContent = compteur;
}

function increment() {
  counter = counter + 1
  afficherCompteur();
}

function decrement() {
  if(counter >= 0){
    counter = counter - 1 
    afficherCompteur();
  }
}
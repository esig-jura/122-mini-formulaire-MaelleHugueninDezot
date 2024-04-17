/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';

//Récupération du formulaire
const formulaire = document.querySelector('form');
const txtMDP = document.querySelector('#mdp');
const txtMDPConfirm = document.querySelector('#mdpc');
console.log(formulaire, txtMDP, txtMDPConfirm);

//Ecouter l'envoi du formulaire
formulaire.addEventListener('submit', function coucou (event) {
    //Stop l'envoi du formulaire
    event.preventDefault();

    //Récupérer la valeur du mdp et de la confirmation
    let mdp = txtMDP.value;
    let mdpConfirm = txtMDPConfirm.value;

    //Tester si les mdp sont identiques
    if(mdp !== mdpConfirm){
        alert('Les mots de passe sont différents !')

    }
    else{
        alert('Compte créé avec succès !');

        //Envoi du formulaire
        formulaire.submit();
    }

});

/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';

//Récupération du formulaire
const formulaire = document.querySelector('form');
const txtMDP = document.querySelector('#mdp');
const txtMDPConfirm = document.querySelector('#mdpc');
const listeBackground = document.querySelector('#background');
const body = document.querySelector('body');
console.log(formulaire, txtMDP, txtMDPConfirm, listeBackground, body);

//Ecouter l'envoi du formulaire
formulaire.addEventListener('submit', (event) => {
    //Stop l'envoi du formulaire
    event.preventDefault();

    let erreurs = [];

    //Tester si mdp > 3
    if(txtMDP.value.length < 3){
        erreurs.push('Le mot de passe doit contenir au moins 3 caractères !')
        //return; //Sort de la fonction
    }

    //Récupérer la valeur du mdp et de la confirmation
    //let mdp = txtMDP.value;
    //let mdpConfirm = txtMDPConfirm.value;

    //Tester si les mdp sont identiques
    if (txtMDP.value !== txtMDPConfirm.value){
        erreurs.push('Les mots de passe sont différents !')
        //return; //Sort de la fonction

    }

    if(erreurs.length > 0){
        let msg = '';
        //Pour chaque erreur dans le tableau
        for (let err of erreurs){
            //Créer une nouvelle ligne (\n) pour chaque erreur
            msg += ' \n -' + err;
        }
        alert(msg);
        return;
    }

    alert('Compte créé avec succès !');

    //Envoi du formulaire
    formulaire.submit();


});

// Ecouter le changement de valeur dans la liste déroulante
listeBackground.addEventListener('change', () => {
    //Remplacer l'image de fond du body
    body.style.backgroundImage = 'url(./img/backgrounds/' + listeBackground.value +')';

})

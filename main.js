  //Selection des éléments(querySelector) du document(document.) grace au nom de l'identifiant 
  const add = document.querySelector("#increment");
  const sous = document.querySelector("#decrement")
  const num = document.querySelector("#compte");
  let counter = 1;
  
  //Selection des éléments(querySelector) du document(document.) grace au nom de la class
  const increment = document.querySelector(".add");
  const decrement = document.querySelector(".sous")
  const compte = document.querySelector(".num");
  let count = 1;
  
  const total = document.querySelector("#total");
  const shipping = document.querySelector(".shipping");
  let montant = 148.98;

  //L'evenement click sur le button add qui n'est rien d'autre que la selection de l'élément dont l'id est increment et qu'on définit un peu plus haut déclenche la fonction 
  //anonyme qui quant à elle incrémente le compteur préalablement définit. Lors que la valeur du compteur est inférieur à 0, on lui ajoute un 0 au début de son écriture pour lui donner 
  //l'aspect 01 au lieu de 1. Tout ceci fini, on affiche dans la balise (innerHTML) dont l'élément a été selectionne au préalable et stocker dans la variable add, la valeur du compteur.
  //C'est grace à cela que le numero change à chaque click.
  add.addEventListener("click", ()=>{
    counter++;
    counter = (counter < 10) ? "0" + counter : counter;
    
    num.innerHTML = `${counter}`

    //Lors que le montant afficher est egal a 0, lors de l'incrémentation, on ajoute au montant total les frais de la livraison 
    //car s'il n'y a pas de produit à livrer il ne peut pas y avoir de frais de livraison et ces frais ne sont pris en compte qu'une seule fois
    if (montant == 0.00) {
      montant = montant + 54.99 + 19
      total.innerHTML = `$ ${montant.toFixed(2)}`
    } else {
      montant = montant + 54.99
      total.innerHTML = `$ ${montant.toFixed(2)}`
    }

    //Mise à jour de l'affichage de la valeur des frais de livraisons
    shipping.innerHTML = `$19`
  });

  sous.addEventListener("click", ()=>{
    if (counter > 0 ) {
      counter--;
      counter = (counter < 10) ? "0" + counter : counter;
      
      num.innerHTML = `${counter}`
      montant = montant - 54.99

      //Lors que le montant total afficher est egale à 19 cela signifie que tous les produit ont été retirer et que le panier est vide ce qui déclenche la mise à jour de la valeur des frais de livraison à 0
      if ((montant.toFixed(2)) == 19) {
        montant = 0.00;
        shipping.innerHTML = `$0`
        //Arrondissement à n chiffres prêt (.toFixed(n))
        total.innerHTML = `$ ${montant.toFixed(2)}`
      } else{
        shipping.innerHTML = `$19`
        total.innerHTML = `$ ${montant.toFixed(2)}`
      }
    }
  });

  increment.addEventListener("click", ()=>{
    count++;
    count = (count < 10) ? "0" + count : count;
    
    compte.innerHTML = `${count}`

    if (montant == 0.00) {
      montant = montant + 74.99 + 19
      total.innerHTML = `$ ${montant.toFixed(2)}`
    } else {
      montant = montant + 74.99
      total.innerHTML = `$ ${montant.toFixed(2)}`
    }

    shipping.innerHTML = `$19`
  });

  decrement.addEventListener("click", ()=>{
    if (count > 0 ) {
      count--;
      count = (count < 10) ? "0" + count : count;
      
      compte.innerHTML = `${count}`
      montant = montant - 74.99

      if ((montant.toFixed(2)) == 19) {
        montant = 0.00;
        shipping.innerHTML = `$0`
        total.innerHTML = `$ ${montant.toFixed(2)}`
      } else{
        shipping.innerHTML = `$19`
        total.innerHTML = `$ ${montant.toFixed(2)}`
      }
    }
  });

//********************************** Section de validation de données **********************************//  

  //Déclaration de constante qui vont nous permettre de récupérer les entrés dans le champ comprenant l'id indiqué 
  const form = document.getElementById("form");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const fullname = document.getElementById("fullname");
  const address = document.getElementById("address");
  const city = document.getElementById("city");
  const country = document.getElementById("country");
  const postal = document.getElementById("postal");

  //Selection des balise comportant les messages du document car dans la logique du code on souhaiterait l'afficher ou pas sur la page
  let error1 = document.querySelector(".error1")
  let error2 = document.querySelector(".error2")
  let error3 = document.querySelector(".error3")
  let error4 = document.querySelector(".error4")
  let error5 = document.querySelector(".error5")
  let error6 = document.querySelector(".error6")
  let error7 = document.querySelector(".error7")
  let error8 = document.querySelector(".error8")

  //Sélection des input de chaque champs afin de changer laa couleur de la bordure en fonction de la validité de l'entrer du champs ou pas, par l'utilisateur
  var inEmail = document.querySelector(".inEmail");
  var inPhone = document.querySelector(".inPhone");
  var inFullname = document.querySelector(".inFullname");
  var inAddress = document.querySelector(".inAddress");
  var inCity = document.querySelector(".inCity");
  var inCountry = document.querySelector(".inCountry");
  var inPostal = document.querySelector(".inPostal");

  //Selection de tous les éléments pouvant m'aider pour la liste déroulante
  const listCountry = document.querySelector(".list-country");
  const listIcon = document.querySelector(".select-list");
  const ben = document.getElementById("benin");
  const usa = document.getElementById("us");
  const south = document.getElementById("sa");

  //Ecoute de la soumition du formulaire afin de s'assurer que tous les champs sont validé et d'afficher ou pas le message de success. Note: on met .addEventListener pour lui dire d'arrêter son comportement de soumission et de rafraichissement de la page
  form.addEventListener('submit', e => {
    e.preventDefault();
    
    error8.classList.add('invisible')
    
  });

  //Fonctionprenant en paramètre un email et qui permet de valider celui-ci en le comparant au regex (const formatEmail) et en le mettant en petit caractère afin d'éviter la sensibilité à la casse
  function isValidEmail(email) {
    //Pour le regex, l'email doit contenir au début des chaines de caractère (johndoe) puis doit être forcément suivi d'un (@). Après l'@ on doit forcément avoir une chaine de caratère (gmail ou yahoo) qui doit être suivi d'un point (.) puis d'une autre chaine de 2 caratères au moins (fr ou com)
    const formatEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return formatEmail.test(String(email).toLowerCase());
  }

  //Fonctionprenant en paramètre un email et qui permet de valider celui-ci en le comparant au regex (const formatEmail) et en le mettant en petit caractère afin d'éviter la sensibilité à la casse
  function isValidPhone(phone) {
    //Pour le regex, l'email doit contenir au début des chaines de caractère (johndoe) puis doit être forcément suivi d'un (@). Après l'@ on doit forcément avoir une chaine de caratère (gmail ou yahoo) qui doit être suivi d'un point (.) puis d'une autre chaine de 2 caratères au moins (fr ou com)
    const formatPhone = /^([(]\+\d{1,3}[)]|00\d{1,3})\s\d{8}$/;
    return formatPhone.test(String(phone).toLowerCase());
  }


  //Ecoute des entrées au clavier. Si le champs est vide (on supprime les espace avec la fonction trim()) on demande de rrenseigner le champs, si non si le mail est invalide on lui dit de mettre un mail qui respect le format. Tout ceci en changeant la couleur de la bordure.
  email.addEventListener('input', e => {
    if ((email.value.trim()) === '') {
      inEmail.classList.add('error')
      inEmail.classList.remove('success')
      error1.classList.remove('invisible')
      error1.innerHTML = 'Email is required'
    } else if(!isValidEmail(email.value.trim())) {
      inEmail.classList.add('error')
      inEmail.classList.remove('success')
      error1.classList.remove('invisible')
      error1.innerHTML = 'Please provide a valid email address'
    } else {
      inEmail.classList.add("success")
      inEmail.classList.remove("error")
      error1.classList.add('invisible')
    }
  });

  phone.addEventListener('input', e => {
    if((phone.value.trim()) === "") {
      inPhone.classList.add('error')
      inPhone.classList.remove('success')
      error2.classList.remove('invisible')
    } else if(!isValidPhone(phone.value.trim())){
      inPhone.classList.add('error')
      inPhone.classList.remove('success')
      error2.classList.remove('invisible')
    } else {
      inPhone.classList.add("success")
      inPhone.classList.remove("error")
      error2.classList.add('invisible')
    };
  });

  fullname.addEventListener('input', e => {
    if((fullname.value.trim()) === "") {
      inFullname.classList.add('error')
      inFullname.classList.remove('success')
      error3.classList.remove('invisible')
    } else {
      inFullname.classList.add("success")
      inFullname.classList.remove("error")
      error3.classList.add('invisible')
    }
  });

  address.addEventListener('input', e => {
    if((address.value.trim()) === "") {
      inAddress.classList.add('error')
      inAddress.classList.remove('success')
      error4.classList.remove('invisible')
    } else {
      inAddress.classList.add("success")
      inAddress.classList.remove("error")
      error4.classList.add('invisible')
    }
  });

  city.addEventListener('input', e => {
    if((city.value.trim()) === "") {
      inCity.classList.add('error')
      inCity.classList.remove('success')
      error5.classList.remove('invisible')
    } else {
      inCity.classList.add("success")
      inCity.classList.remove("error")
      error5.classList.add('invisible')
    }
  });

  country.addEventListener('input', e => {
    if((country.value.trim()) === "") {
      inCountry.classList.add('error')
      inCountry.classList.remove('success')
      error6.classList.remove('invisible')
    } else {
      inCountry.classList.add("success")
      inCountry.classList.remove("error")
      error6.classList.add('invisible')
    }
  });

  postal.addEventListener('input', e => {
    if((postal.value.trim()) === "") {
      inPostal.classList.add('error')
      inPostal.classList.remove('success')
      error7.classList.remove('invisible')
    } else {
      inPostal.classList.add("success")
      inPostal.classList.remove("error")
      error7.classList.add('invisible')
    }
  });

  //Déclaration d'un tableau contenant tout les champs qui feront disparaitre la liste lorsqu'on cliquera sur eux
  const elementsToClose = [email, phone, fullname, address, city, postal, country];

  //
  listIcon.addEventListener("click", () => {
    listCountry.classList.toggle('invisible');
  });

  elementsToClose.forEach(element => {
    element.addEventListener("click", () => {
      listCountry.classList.add('invisible');
    });
  });

  const countryInfo = [
    { idCOnst: ben, value: "Benin" },
    { idCOnst: usa, value: "United State" },
    { idCOnst: south, value: "South-Africa" }
  ];

  countryInfo.forEach(info => {
    info.idCOnst.addEventListener("click", () => {
      inCountry.classList.add("success")
      inCountry.classList.remove("error")
      country.setAttribute("value", info.value);
    });
  });
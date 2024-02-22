const boutonsAjouterPanier = document.querySelectorAll(".ajouter-panier");
const notif = document.querySelector(".cloche");

boutonsAjouterPanier.forEach((bouton) => {
  bouton.addEventListener("click", (event) => {
   event.preventDefault()
    
    notif.style.visibility = "visible"
 
 
  });
});

 

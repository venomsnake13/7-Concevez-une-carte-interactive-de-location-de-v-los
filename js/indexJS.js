  
//ObjetDISPLAY
var	objHome = new Display('btnHome', 'divHome', 'divNone');//affichage section home
var objContact = new Display('btnContact', 'divContact', 'divNone');//affichage section contact depuis contact
var objContact2 = new Display('btnContact2', 'divContact', 'divNone');//affichage section contact depuis compte
var objMap = new Display('btnMap', 'divMap', 'divNone'); //affichage section map
var objTuto = new Display('btnTuto', 'divTuto', 'divNone');//affichage section tuto
var objCompte = new Display('btnCompte', 'divCompte', 'divNone');//affichage section compte



//ObjectSLIDER
var sliderJS = new Slider('preview', 'next', 'vignette', 'slide');


//ObjetAJAX
 var dataGet = new ajaxCall("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=4c0dd7bc629dffa5ae869d96fce6b4eec7760d7c", "GET", function dataJSON(reponse) {
 	
 // Transforme la réponse en tableau d'objets JavaScript
 var stations = JSON.parse(reponse);

 //récupération des données JSON API JCDecaux (stations) par la methode AJAX et intégration à la map
//ObjetMAP
var mapJS = new Map('map','lyon', 45.75, 4.85, 14, stations);




});


contentPanierDesktop.textContent += sessionStorage.getItem("saveName");
chronoIdDesktop.textContent += sessionStorage.getItem("saveChrono");
var paymentDesktop = document.getElementById("paymentDesktop");
paymentDesktop.content += sessionStorage.getItem('stateReservation');

var divReserver = document.getElementById("divReserver");


if(sessionStorage.getItem('saveName'))//si storage présent
{
	paymentDesktop.style.display = "block";//affichage "réservation"  
	divReserver.style.display = "none";//disparition du canvas
}



	



	





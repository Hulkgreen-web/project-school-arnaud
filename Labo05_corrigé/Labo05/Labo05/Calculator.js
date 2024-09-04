function CalculerPuissance(longueur, largeur,hauteur, nbDec,temperature,plafond,murs,fenetresIso,fenetresNonIso)
{	
	// 1] Calcul de la puissance
	var calcul=longueur*largeur*hauteur;
	
	// 2] en fonction de la temp�rature
	calcul *= parseInt(temperature);					// Les temp�ratures :  	"60", "70", "80" sont entre guillemets : convention HTML
														//						-> on convertit le texte en integer pour le calcul
	// 3] en fonction des murs ext�rieurs
	calcul+=calcul*murs*0.1;
	
	//	4] en fonction du plafond isol�
	if(plafond==true)
	{calcul*=0.85;}	

	//	5] en fonction d'ouverture isol�es / non
	calcul+=calcul*(0.2*fenetresIso+0.1*fenetresNonIso); //on ajuste la valeur en fonction des ouvertures isol�es et non-isol�es
	
	var calculWatt = calcul.toFixed(nbDec); // on d�clare une variable locale calculWatt, on respecte le nombre de d�cimal demand�
	alert(calculWatt + " watt(s)");	  //Info-bulle affichant le résultat du calcul				
	return calculWatt  //renvoie la valeur calcul�e 		
}


// Les fonctions pour afficher la valeur num�rique s�lectionn�e par les 3 SLIDERS 		
function afficherNonIso()
{	document.getElementById("nonIso").innerHTML = document.getElementById("inputNonIso").value;}
			
function afficherMurs()
{	document.getElementById("murs").innerHTML = document.getElementById("inputMurs").value;}
			
function afficherIso()
{	document.getElementById("iso").innerHTML = document.getElementById("inputIso").value;}

/*la fonction test_bouton_radio  sert � g�rer le choix du nombre de murs ext�rieurs avec les boutons d'option (type radio). 
Le param�tre "bouton" est du type "input type radio", ce qui implique qu'� l'int�rieur de la fonction,on utilise les propri�t�s value et checked
*/
function test_bouton_radio(bouton)
{
	if (bouton.checked) 
	{ inputMurs.value=bouton.value;
	afficherMurs()
	}
}
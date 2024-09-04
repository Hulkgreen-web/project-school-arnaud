//Variable pour représenter la qti se sable dans un sac et celle-ci passer en arg comme ca si jamais elle change cela ne pose pas problème
//On aura pas a changer tout les 40 mais seulement la valeurs de la varibale qui indique le nbr de kg présent dans un sac
//Comme celle-ci est déclarer en dehors des fct elle a une portéé globale et comme le js est importer dans le html on pourra utiliser celle-ci lors de l'apelle
//de la fonction sable dans le html 
//const qui n'est pas succesptible de changer dans le programme
const qtiSableSac = 40;
const qtiCimentSac = 25;

function afficherElements(dimensionBrique)
{
	//Utilisation de la fonction split pour divisier le bloc de longueur,largeur et hauteur choisie par l'utilisateur en un tableau(Split divise des str en tableau)
	//=>permettra de récupérer la valeur des longueurs,largeurs et hauteurs de la brique qui se trouve dans un tableau a certaine position
	var tabDimBrique = dimensionBrique.split("X");
	//Retourne le tableau qui contient les différentes valeurs aux indices 0 a 3
	return tabDimBrique;
}

//Renverra le nombre de brique nécessaire a la construction d'un mur de brique ou de bloc
function nombre_briques(longueurMur,hauteurMur,longueurBrique,hauteurBrique)
{
	//Math.ceil arrondi d'office a l'unité suppérieur ce qui est logique car si on a 3.4 on va pas prendre 3 brique mais 4 on va pas en prendre une de moins mais une de plus
	//Math.round arrondi a l'unité la plus proche => dans ce cas ce n'est pas cette fonction a utiliser
	//Ici pas de conversion de long brique,larg brique et hauteur brique en int et on les laisse en str car la / ne posse pas problme elle les converti en int 
	//Tandis que + entre deux str les concatène
	var nbrBriquesLong = Math.ceil((longueurMur/longueurBrique) * 1.02 );
	var nbrBriquesLarg = Math.ceil((hauteurMur/hauteurBrique) * 1.02);
	var nbrBriquesTot = nbrBriquesLong * nbrBriquesLarg;
	return nbrBriquesTot;
}

function calculerVolumeMortier(longueurBrique,largeurBrique,hauteurBrique,nbrBriques)
{
	//Attention les valeurs récupérer dans le code HTML des long,larg et hauteur brique son de type str
	var surfaceAMacconer = (parseFloat(longueurBrique) + parseFloat(hauteurBrique)) * parseFloat(largeurBrique);
	var surfaceMortier = nbrBriques * surfaceAMacconer;
	//Récupère la longueur des de ce qu'entre l'utilisateur pour déterminer de quelle type de matériaux il sagit
	//1.5,1 et 0.8 = les différentes valeurs que peut prendre l'épaisseur du joint
	if(parseInt(longueurBrique) == 39)
	{
		//Stocke la valeur du joint dans un variable car on veut la récupérer sur la page HTML
		var valJoint = 1.5;
	}
	else if(parseInt(longueurBrique) == 29)
	{
		var valJoint = 1;

	}
	//Si pas alors longueurBrique == 18
	else
	{
		var valJoint = 0.8;
	}
	var volumeMortier = surfaceMortier * valJoint;
	//Normale qu'on obtienne une valeur assez grande car est exprimer comme étant un volume (volumeMortier)
	volumeMortier = volumeMortier + volumeMortier * 0.10
	//Pour pouvoir avoir la décimal par rapport a laquelle on va faire l'arrondi
	volumeMortier = volumeMortier / 10;
	//Math.round permet d'arrondir a l'entier suivant ou précédent
	volumeMortier = Math.round(volumeMortier);
	volumeMortier = volumeMortier / 100;
	return [volumeMortier,valJoint];
}
//Renvoie le nombre de sac de sable nécessaire pour fabriquer du mortier
function sable(volumeMortier, qtt_sable_par_sac)
{
	//Attention volumeMortier en M cube ici on taff en kg
	volumeMortier = volumeMortier / 1000;
	var nbrKgSableNeccesaire = volumeMortier * 1800;
	var nbrSacSable = nbrKgSableNeccesaire / qtiSableSac;
	//Arrondi du nombre de Kg de sable nécessaire 
	nbrKgSableNeccesaire = nbrKgSableNeccesaire * 100;
	nbrKgSableNeccesaire = Math.round(nbrKgSableNeccesaire);
	nbrKgSableNeccesaire = nbrKgSableNeccesaire / 100;
	//Ce qui est logique car un sac ne peux pas être en virgule
	nbrSacSable = Math.ceil(nbrSacSable);
	//Renvoie un tableau car besoin des deux valeurs, besoins de retourner deux valeurs => celles-ci se trouvent a certain index
	return [nbrKgSableNeccesaire,nbrSacSable];
}

function ciment(volumeMortier, qtt_ciment_par_sac)
{
	volumeMortier = volumeMortier / 1000;
	var nbrKgCimentNeccesaire = volumeMortier * 350;
	var nbrSacCiment = nbrKgCimentNeccesaire / qtiCimentSac;
	nbrKgCimentNeccesaire = nbrKgCimentNeccesaire * 100;
	nbrKgCimentNeccesaire = Math.round(nbrKgCimentNeccesaire);
	nbrKgCimentNeccesaire = nbrKgCimentNeccesaire / 100;
	nbrSacCiment = Math.ceil(nbrSacCiment);
	return [nbrKgCimentNeccesaire,nbrSacCiment];
}	

function calculerSuperficieMur(longueurMur,hauteurMur)
{
	superficieMur = parseInt(longueurMur) * parseInt(hauteurMur);
	superficieMur = superficieMur / 10000;
	return superficieMur;
}

function calculerSuperficieFaceBrique(longueurBrique,hauteurBrique)
{
	superficieFaceBrique = parseFloat(longueurBrique) * parseFloat(hauteurBrique);
	superficieFaceBrique = superficieFaceBrique / 100;
	superficieFaceBrique = Math.round(superficieFaceBrique);
	superficieFaceBrique = superficieFaceBrique / 100;
	return superficieFaceBrique;
	
}



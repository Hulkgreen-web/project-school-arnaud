function calculC(salaireBrut){
    var C = salaireBrut * 0.1307;
    C = parseFloat(C.toFixed(2));   //Arrondir à 2 chiffres après la virgule
    return C;
}



function calculS(salaireBrut,typeContrat,nbJours,nbJoursMax,nbHeures,nbHeuresMax){
    if (typeContrat == "Plein"){
        var S = salaireBrut * nbJoursMax / nbJours;
    } else if(typeContrat == "Partiel"){
        var S = salaireBrut * nbHeuresMax / nbHeures;
    } else {
        var S = "Erreur d'encodage";
    }
    S = parseFloat(S.toFixed(2));
    return S;
}

function calculR(salaireRef,statut){
    var R;
    if (statut == "Employé"){
        if (salaireRef <= 2013.64){
            R = 247.31;
        } else if (salaireRef <= 3082.66){
            R = 247.31 - (0.2313 * (salaireRef - 2013.64));
        } else {
            R = 0;
        }

        } else if (statut == "Ouvrier"){
            if (salaireRef <= 2013.64){
                R = 267.09;
            } else if (salaireRef <= 3082.66){
                R = 267.09 - (0.2498 * (salaireRef - 2013.64));
            } else {
                R = 0;
            }
        } else {
            R = "Erreur d'encodage"
        }
        R = parseFloat(R.toFixed(2));
        return R;
}

function calculP(statut,nbJours,nbJoursMax,nbHeures,nbHeuresMax,reduction,cotisation){
    var P;
    var fraction;
    if (statut == "Plein"){
        if (nbJours == nbJoursMax){
            P = reduction;
        } else {
            fraction = nbJours/nbJoursMax;
            fraction = parseFloat(fraction.toFixed(2));
            P = fraction * reduction;
        }
    } else if (statut == "Partiel"){
        P = nbHeures/nbHeuresMax*reduction;
    }

    if (P > cotisation){
        cotisation = 0;
    } else{
        cotisation = cotisation - P;
    }
    P = parseFloat(P.toFixed(2));
    cotisation = parseFloat(cotisation.toFixed(2));
    return [P,cotisation];
}
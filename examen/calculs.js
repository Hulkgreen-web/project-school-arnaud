function calculerBase(choixAge){
    return choixAge;
    
}

function calculerSupplement1(orphelin,choixAge){
    var sup;
    if (orphelin == "0parent"){
        sup = 426.65;
    } else if(orphelin == "1parent"){
        if (choixAge == "188.95"){
            sup = 94.48;
        } else {
            sup = 100.57;
        }
    } else{
        sup = 0;
    }
    return sup;
}

function calculerSupplement2(revenu,handicap){
    var supp;
    revenu = parseFloat(revenu);
    if (revenu < 31814.37){
        supp = 65.73; 
    } else if (revenu < 51340){
        supp = 29.88;
    } else{
        supp = 0;
    }
    if (handicap == true){
        supp = 79.24;
    }
    return supp;
}

function calculerSupplement3(revenu,invalide,monoparent,nombreuse){
    var suppl = 0;
    if (invalide == true){
        suppl += 11.26;
    }

    if (monoparent == true){
        if (revenu < 31814.37){
            suppl += 23.90;
        } else if (revenu < 51340){
            suppl += 24.38;
        } else {
            suppl += 0;
        }
    }

    if (nombreuse == true){
        if (revenu < 31814.37){
            suppl += 23.90;
        } else if (revenu < 51340){
            suppl += 42.67;
        }
        if (monoparent == true){
            suppl += 12.19;
        }
    }
    suppl = parseFloat(suppl.toFixed(2));
    return suppl;
}

function calculerSupplementTot(sup1,sup2,sup3){
    var supTot;
    supTot = sup1 + sup2 + sup3;
    supTot = parseFloat(supTot.toFixed(2));
    return supTot;
}

function calculerTotal(supTotal,base){
    var tot;
    tot = supTotal + parseFloat(base);
    tot = parseFloat(tot.toFixed(2));
    return tot;
}

function afficherRecap(choixAge,orphelin,revenu,handicap,invalide,monoparental,famiNombreuse){
    var age;
    var singlePar;
    var doublePar;
    if (choixAge == "188.95"){
        age = "<18";
    } else{
        age = ">18";
    }
    if (orphelin == "2parent"){
        singlePar = false;
        doublePar = false;
    } else if (orphelin == "1parent"){
        singlePar = true;
        doublePar = false;
    } else {
        singlePar = true;
        doublePar = true;
    }
    return [age,singlePar,doublePar,revenu,handicap,invalide,monoparental,famiNombreuse];
}
"use strict";
var Employe = /** @class */ (function () {
    // private nom : string;
    // private ancienneté : number;
    function Employe(nom, ancienneté, technologie) {
        /* this.nom = nom;
         this.ancienneté = ancienneté;*/
        this.nom = nom;
        this.ancienneté = ancienneté;
        this.technologie = technologie;
    }
    Employe.prototype.showIt = function () {
        return "[Nom : " + this.nom + " - Experience :" + this.ancienneté + "Technologie : " + this.technologie + "]";
    };
    return Employe;
}());
var safa = new Employe("Safa", 4, "PHP");
console.log(safa.showIt());

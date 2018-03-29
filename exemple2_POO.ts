class Employe {
   // private nom : string;
   // private ancienneté : number;

    constructor(private nom : string,private ancienneté : number,private technologie: string) { // il faut mettre la visiblité
       /* this.nom = nom;
        this.ancienneté = ancienneté;*/
        
    }
    public showIt(): string {
        return "[Nom : "+this.nom+" - Experience :"+this.ancienneté+"Technologie : "+this.technologie+"]";

    }
}

let safa:Employe = new Employe("Safa",4,"PHP");
console.log(safa.showIt());
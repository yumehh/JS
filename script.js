function calcul(){
    var a = prompt("1ere valeur");
    var b = prompt("2eme valeur");

    var total = a*b;
    console.log(total);

    document.getElementById("result").innerHTML = total;
    
    return total;

}

function nom(){
    var person = prompt("Entrez votre prénom", "Exemple");
    console.log(person);

    document.getElementById("rename").innerHTML = " Bonjour " + person;
}

function rename(){
    document.getElementById("rename").innerHTML = "bonjour";
}



function puissance(){
    var divtable = document.getElementById("puissance");
    var valeur = prompt("nombre");
    var puissance = prompt("puissance");

    var tab = [];
    tab.length = puissance;

    var html = ' ';
    html = "<table class='tab' id='tableau'";
    html = html + "<thead><tr id='underline'><th id='color1'>Puissance</th><th id='color2'>Résultat</th></tr></thead>";
    html = html + "<tbody>";

    for (let i = 0; i < tab.length; i++) 
{
    var result = Math.pow(valeur, i);
    html += "<tr id='border'><td>" + valeur + "<sup>" + i + "</sup></td><td>" + result + "</td></tr>";
}

    html = html + "</tbody></table>";
    divtable.innerHTML = html;

    document.getElementById("color1").style.backgroundColor="green";
    document.getElementById("color1").style.color="blue"; //fontColor est obsolète
    document.getElementById("color2").style.backgroundColor="red";
    document.getElementById("color2").style.border="thick solid yellow";
    document.getElementById("underline").style.textDecoration="underline";
}

function dissapear(){

    var idTexte = document.getElementById("paragraphe");
   
    if(getComputedStyle(idTexte).display != "none"){
        idTexte.style.display = "none";
        document.getElementById("disparaitre").innerHTML = "apparaitre";
    }else{
        idTexte.style.display = "block";
        document.getElementById("disparaitre").innerHTML = "disparaitre";
    }
};

function formDynamic(){ //TUTORIEL PRIMFX
       
        // 1ERE METHODE 

        // document.getElementById("inscription").addEventListener("submit", function(e){
        // var erreur;
        //var inputs = document.getElementById("inscription").getElementsByTagName("input"); // inputs = tableau qui reprend tous les champs inférieur
        // var inputs = this.getElementsByTagName("input"); // qui est la même chose que celui du dessus, le "this" pour le document.getElementbyid...

        // for (var i = 0; i < inputs.length; i++){
        //     if(!inputs[i].value){
        //         erreur = "Veuillez renseigner tous les champs";
        //     }
        // }

        // var pseudo = document.getElementById("pseudo");
        // var email = document.getElementById("email");
        // var email2 = document.getElementById("email2");
        // var mdp = document.getElementById("mdp");

        // if(!mdp.value){
        //     erreur = "veuillez renseignez un mdp";
        // }
        // if(!email.value){
        //     erreur = "veuillez renseignez un email";
        // }
        // if(!pseudo.value){
        //     erreur = "veuillez renseignez un pseudo";
        // }
    
        // if(erreur){
        //     e.preventDefault(); //empêcher le reload de la page
        //     document.getElementById("erreur").innerHTML = erreur;
        //     return false;
        // } else {
        //     alert('formulaire send');
        // }
    //})

    //2EME METHODE 

    //dans cette méthode, on peut supprimer les ID dans le forms HTML

    document.forms["inscription"].addEventListener("submit", function(e){

        var erreur;
        var inputs = document.getElementById("inscription").getElementsByTagName("input"); // inputs = tableau qui reprend tous les champs inférieur
        var inputs = this;

        if(inputs["email"].value != "h@gmail.com"){
            erreur = "email incorrect";
        }

        for (var i = 0; i < inputs.length; i++){
            if(!inputs[i].value){
                erreur = "Veuillez renseigner tous les champs";
            }
        }

        if(erreur){
            e.preventDefault(); //empêcher le reload de la page
            document.getElementById("erreur").innerHTML = erreur;
            return false;
        } else {
            alert('formulaire send');
        }
    })
}

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("div1").innerHTML = "Salut";
})

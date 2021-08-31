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
//rajouter des console.log()
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

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("div1").innerHTML = "Salut";
    // document.getElementById("nom").innerHTML = "Bonjour " + person + ". Comment allez-vous ?";
    //document.getElementById("rename").innerHTML = "bonjour" + person;
})

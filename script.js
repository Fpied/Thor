const canvas = document.querySelector('canvas');
const optionNav = document.querySelector(".option");
const ctx = canvas.getContext('2d');
const tailleCase = 40;

const colonnes = 40;
const lignes = 18;

const lightX = 3;
const lightY = 8;

const thor = {
        initialTX : Math.floor(Math.random()* colonnes),
        initialTY : Math.floor(Math.random() * lignes)
    }

function dessinerThor(){
    
    // 3 dessiner thor
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(
        thor.initialTX * tailleCase +10,
        thor.initialTY * tailleCase +10,
        tailleCase -20,
        tailleCase - 20
    );
}

function dessinerLight(){
    // Dessiner l'éclair (Cible)
    ctx.fillStyle = '#FFFF00';
    ctx.beginPath();
    ctx.arc(
        lightX * tailleCase + tailleCase/2,
        lightY * tailleCase + tailleCase/2,
        tailleCase/3, 0, Math.PI *2
        
    );
    ctx.fill();

}

function dessinerGrille(){
    for (let y = 0; y < lignes; y++){
        for(let x = 0; x < colonnes; x++){
            ctx.fillStyle = ((x + y) % 2 === 0)? '#ffffff' : '#cccccc';
            ctx.fillRect(x * tailleCase, y * tailleCase, tailleCase, tailleCase);
            ctx.strokeRect(x * tailleCase, y * tailleCase, tailleCase, tailleCase);
        }
    }

}

function verifierFin(){
    if(thor.initialTX >= 40 || thor.initialTX < 0 || thor.initialTY >= 18 || thor.initialTY < 0){
        alert("Vous avez perdu");
    }

    if(thor.initialTX === lightX && thor.initialTY === lightY){
        alert("Vous avez gagné");
    }
}


function dessinerJeu(){
    dessinerGrille();
    dessinerLight();
    dessinerThor();

}

dessinerJeu();


console.log(lightX, lightY);
console.log(thor);
const directionOption = [ "choisir une direction","N", "NE", "E", "SE","S","SW","W","NW"];

const select = document.createElement("select");
    for (const direction of directionOption) {
        const option = document.createElement("option");
        option.textContent = direction;
        select.appendChild(option); 
    }
optionNav.appendChild(select);

select.addEventListener("change", function(){
    switch (select.value){
    case "N":
        thor.initialTY -=1;
        dessinerJeu();
        verifierFin();
        select.value = "choisir une direction";
        break; 
    case "NE":
        thor.initialTX +=1;
        thor.initialTY -=1;
        dessinerJeu();
        verifierFin();
        select.value = "choisir une direction";
        break; 
    case "E":
        thor.initialTX +=1;
        dessinerJeu();
        verifierFin();
        select.value = "choisir une direction";
        break; 
    case "SE":
        thor.initialTX +=1;
        thor.initialTY +=1;
        dessinerJeu();
        verifierFin();
        select.value = "choisir une direction";
        break; 
    case "S":
        thor.initialTY +=1;
        dessinerJeu();
        verifierFin();
        select.value = "choisir une direction";
        break; 
    case "SW":
        thor.initialTX -=1;
        thor.initialTY +=1;
        dessinerJeu();
        verifierFin();
        select.value = "choisir une direction";
        break; 
    case "W":
        thor.initialTX -=1;
        dessinerJeu();
        verifierFin();
        select.value = "choisir une direction";
        break; 
    case "NW":
        thor.initialTX -=1;
        thor.initialTY -=1;
        dessinerJeu();
        verifierFin();
        select.value = "choisir une direction";
        break; 
    default:
        console.log("sorry");
}

})

document.addEventListener("keydown", function(event){
    if(event.defaultPrevented){
        return;
    }

    switch(event.key){
    case "ArrowDown":
        thor.initialTY+=1;
        dessinerJeu();
        verifierFin();
        break;
    case "ArrowUp":
        thor.initialTY-=1;
        dessinerJeu();
        verifierFin();
        break;
    case "ArrowLeft":
        thor.initialTX-=1;
        dessinerJeu();
        verifierFin();
        break;
    case "ArrowRight":
        thor.initialTX+=1;
        dessinerJeu();
        verifierFin();
        break;
    default:
        console.log("sorry");
}

})








    
        
  


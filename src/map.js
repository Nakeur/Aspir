//node des communes
var commune = document.querySelectorAll(".departement")

//node de la liste des communes des pros
var communePro = document.querySelectorAll(".communePro")

//pour changer le display
var listProCommune = document.getElementsByClassName("listProCommune")

var ide = null

var communeName = {possession: "La Possession", stDenis: "Saint Denis", lePort: "Le Port", stPaul: "Saint Paul",
steMarie : "Sainte Marie", stAndre: "Saint André", stLeu: "Saint Leu", etangSale: "Etang Salé",
brasPanon: "Bras Panon", aviron: "Les Avirons", entreDeux:"L'Entre Deux", stLouis: "Saint Louis",
stPierre: "Saint Pierre", leTampon :"Le Tampon", petitIle: "Petit Île", stJoseph:"Saint Joseph",
cilaos:"Cilaos", plaineDesPalmistes: "La Plaine des Palmistes", stBenoit:"Saint Benoit",
steRose: "Sainte Rose", steSuzanne: "Sainte Suzanne", stPhilippe:"Saint Philippe", salazie:"Salazie",
troisBassins:"Trois Bassins"}

//Polyfill du foreach
if (NodeList.prototype.forEach === undefined) {
    NodeList.prototype.forEach = function (callback) {
        [].forEach.call(this,callback)
    }
}

//array des listes de communes
var idCommunePro = []
for (let i=0;communePro[i];i++) {
    idCommunePro.push(communePro[i].id)
}
  
async function populate() {
    if (localStorage.getItem("libereaux") !== null) {
        var libereaux = localStorage.getItem('libereaux')
        var libereaux = JSON.parse(libereaux);
        populateList(libereaux);
    } else { 
        const request = new Request("libereaux.json");
        const response = await fetch(request);
        var libereaux = await response.json();
        localStorage.setItem('libereaux', JSON.stringify(libereaux));
        populateList(libereaux);
    }
}

function populateList(libereaux) {
    ele = document.getElementsByClassName(ide)[0];
    try {    
        var count=libereaux[ide].length;
        ville = document.createElement("h2");
        ville.textContent = value;
        ele.appendChild(ville);
        for (let i=0;i < count;i++) {
            
            nom = document.createElement("li");
            nom.className = "nom"
            tel = document.createElement("li");
            tel.className= "tel"
            mail = document.createElement("li");
            mail.className = "mail"
            adress = document.createElement("li");
            adress.className = "adress"
            p = document.createElement("p")
            p.className = "blanc"
            
            nom.textContent = libereaux[ide][i]["prenom"] + ' ' + libereaux[ide][i]["nom"];
            tel.textContent = libereaux[ide][i]['telephone'];
            mail.textContent =  libereaux[ide][i]['mail'];
            adress.textContent = libereaux[ide][i]['adresse'];
        
            ele.appendChild(nom);
            ele.appendChild(tel);
            ele.appendChild(mail);
            ele.appendChild(adress);
            ele.appendChild(p);

        }
    } catch(error) {

    }
}

function removeElementsByClass(className){
    try {
        var elements = document.getElementsByClassName(className)[0].childNodes;
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
        
    } catch {

    } finally {
        var elems = document.getElementsByClassName(ide)         
                populate();
                elems[0].style.display = 'block'
    }
} 

commune.forEach(function(e) {
    e.addEventListener('click', function() {
        const ade = ide;
        ide = this.id
        // match la commune avec la liste de pro de cette commune et display la liste des pro concerner par la commune
        for (let i=0;idCommunePro[i];i++) {
            if (idCommunePro[i] === ide) {
                for (var key in communeName) {
                    if (key === ide){
                        value = communeName[key]
                    }
                }
                removeElementsByClass(ade)
            }
        }
    })
})
    
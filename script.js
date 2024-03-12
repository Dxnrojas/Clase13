const ensalada = ["lechuga", "tomate", "zanahoria"]

console.log (ensalada);

ensalada.push ("pepino");

console.log (ensalada);

const primerElemento = ensalada [3];
console.log (primerElemento);

console.log(ensalada.length);

let nombresDeLaEnsalada = "";

for(const verdura of ensalada) {
    nombresDeLaEnsalada = nombresDeLaEnsalada + verdura + " ";
    console.log(verdura);
}



console.log (nombresDeLaEnsalada);

for(let i=0; i<ensalada.length; i++) {
    const verdura = ensalada [i];
    console.log (i);
}

const parrafo =document.querySelector ("#parrafo");
console.log (parrafo);
parrafo.innerHTML = "<strong>" + nombresDeLaEnsalada + "</strong>";

parrafo.classList.add ("parrafo--verde" , "parrafo--titulo");
// let & const
let seraQuePode = "?";
console.log(seraQuePode);

let estaFrio = true;
if (estaFrio) {
  var acao = "Colocar o casaco";
  console.log(acao);
}

const cpf: string = "21412412412";
//cpf = '2312451513'
console.log(cpf);

var segredo = "externo!";
function revelar() {
  var segredo = "interno";
  console.log(segredo);
}
revelar();
console.log(segredo);

{
  {
      const a = 'a'
      console.log(a)
  }
}

for (let i = 0; i < 10; i++){
    console.log(i)
}
//console.log(i)

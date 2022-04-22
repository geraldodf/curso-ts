function logarClasse(constructor: Function) {
  console.log(constructor);
}

function decoratorVazio(_: Function) {}

function logarClasseSe(valor: boolean) {
  return valor ? logarClasse : decoratorVazio;
}

function decorator(a: string, b: number) {
  return function (_: Function): void {
    console.log(a + " " + b);
  };
}
//@logarClasse
//@logarClasseSe(true)
//@decorator("Teste", 123)
@logarObjeto
class Eletrodomestico {
  constructor() {
    console.log("Novo...");
  }
}
type Construtor = { new(...args: any[]): {}}

function logarObjeto (constructor: Construtor){
    console.log('Carregado...');
    return class extends constructor{
        constructor(...args: any[]){
            console.log('Antes...')
            super(...args)
            console.log('Depois...');
        }
    }
}

type Construtor = { new(...args: any[]): {}}

// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
}

@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo critico foi alterado!')
    }
}
 
new MudancaAdministrativa().critico()

function perfilAdmin<T extends Construtor> (constructor: T){
    return class extends constructor{
        constructor(...args: any[]){
            super(...args)
            if(!usuarioLogado || !usuarioLogado.admin){
                throw new Error("Sem permissão!")
            }
        }
    }
}
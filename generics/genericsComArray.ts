function imprimir<T>(args: T[]){
    args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 3])
imprimir<number>([1, 2, 3])
imprimir<string>(['Ana', 'Bia', 'Carlos'])
imprimir<{nome: String, idade: number}>([
    {nome: 'Fulado', idade: 22},
    {nome: 'Cicrano', idade: 23},
    {nome: 'Beltrano', idade: 24}
])

type Aluno = {nome: String, idade: number}
imprimir<Aluno>([
    {nome: 'Fulado', idade: 22},
    {nome: 'Cicrano', idade: 23},
    {nome: 'Beltrano', idade: 24}
])
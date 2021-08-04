let nota = 7.3
let situacao

/*
if(nota >= 6){
    situacao = 'APROVADO'
}
else {
    situacao = 'REPROVADO'
}
*/

// para reduzir todas essas linhas de comando, usa-se o operador ternário

situacao = nota >= 6 ? 'APROVADO' : 'REPROVADO'
//         CONDIÇÃO
//                   ?
//                     RESULTADO SE VERDADEIRO : RESULTADO SE FALSO   

console.log(`Nota ${nota}, situação: ${situacao}`)

let user = 'admin'

let msg = user === 'admin' ? 'Pode logar' : 'Não pode logar'

console.log(msg)
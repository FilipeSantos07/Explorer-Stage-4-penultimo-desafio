/*  Bora praticar e rever tudo o que foi ensinado na aula? 💜
Nesse desafio, você irá solicitar ao usuário que ele insira dois números e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 

- [ ]  Verifique se a soma dos dois números é par (ou ímpar);
- [ ]  Verifique se os dois números inseridos são iguais (ou diferentes).

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
*/

let userName = prompt(`Olá, digite o seu nome:`)

alert(`${userName}, iremos fazer alguns cálculos matemáticos, eu preciso que você digite dois números, tudo bem?`)

let n1 = Number(prompt(`Digite o primeiro número:`))
let n2 = Number(prompt(`Digite o segundo número:`))

let sum = n1 + n2
let sub = n1 - n2
let mult = n1 * n2
let div = n1 / n2
let divRest = n1 % n2

alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${mult}`)
alert(`A divisão dos dois números é : ${div}`)
alert(`O resto da divisão dos dois números é: ${divRest}`)

if ((n1 + n2) % 2 == 0) {
    alert(`A soma dos dois números é par : ${sum}`)
} else {
    alert(`A soma dos dois números é ímpar: ${sum}`)
}

if(n1 != n2) {
    alert(`Os números inseridos são diferentes.`)
} else {
    alert(`Os números inseridos são iguais.`)
}
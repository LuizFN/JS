var somaFunc = require("./soma")//Requisita o arquivo onde a função somar() esta
var subFunc = require("./Subtracao")
var multFunc = require("./Multiplicar")
var divFunc = require("./Divisao")



console.log(`Soma: ${somaFunc(10, 40)}`)//Chama a função somar()
console.log(`Subtração: ${subFunc(10, 4)}`)
console.log(`Multiplicação: ${multFunc(10, 100)}`)
console.log(`Divisão: ${divFunc(4, 2)}`)





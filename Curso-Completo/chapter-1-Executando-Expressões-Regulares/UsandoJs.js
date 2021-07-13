const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

// ##########Métodos da RegExp##########
const regexNove = RegExp('9')
console.log('Métodos da RegExp...')
console.log(regexNove.test(texto))
// test verifica e retorna true ou false
// true
console.log(regexNove.exec(texto))
// exec verifica e retorna o que ele encontrou atraves do regex e a posição
//'9', index: 18, input: '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f',


// ##########Métodos da string##########
const regexLetras = /[a-f]/g
console.log('Métodos da string...')
console.log(texto.match(regexLetras))
// match passando o regex busca os elementos se tiver
// [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(texto.search(regexLetras))
// search passando o regex busca o primeiro index quando encontra a expressão
// 20
console.log(texto.replace(regexLetras, 'Achei'))
// replace substitui o que fou encontrato pelo regex para o parametro passado.
//0,1,2,3,4,5,6,7,8,9,Achei,Achei,Achei,Achei,Achei,Achei
console.log(texto.split(regexLetras))
// split divide em outros elementos o que o regex encontrou
// [ '0,1,2,3,4,5,6,7,8,9,', ',', ',', ',', ',', ',', '' ]
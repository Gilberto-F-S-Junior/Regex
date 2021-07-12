// g - global - procura todos as letras que passar em todo o texto, se não passar busca apenas o primeiro.
// i - ignore case - busca tanto letras maiúsculas como minusculas.

const texto = 'Gilberto assinou o abaixo-assinado.'

// | ou em regex
console.log(texto.match(/G|ab/))

// não vai encontrar o g pois não é case
console.log(texto.match(/g|ab/))

// não vai encontrar o g pois não é case
// depois da última / adicionar a flag
console.log(texto.match(/g|ab/i))
console.log(texto.match(/g|ab/gi))
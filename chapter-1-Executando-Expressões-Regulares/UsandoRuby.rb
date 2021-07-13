texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

#Regexp::new('9') é a mesma coisa de %r{9}
# =~ verifica se existe

regexNove = Regexp::new('9')
puts regexNove.match(texto)

regexNove = %r{9}

puts regexNove.match(texto)

p regexNove =~ '894'

p regexNove =~ '884'

regexLetras = /[a-f]/

puts texto.scan(regexLetras)
#a
#b
#c
#d
#e
#f
puts texto.scan(regexLetras).join
#abcdef
puts texto.scan(regexLetras).join(' ')
#a b c d e f

puts texto.split(/,/).join
puts texto.split(/,/).join(' ')

print texto.split(/[aeiou]/)
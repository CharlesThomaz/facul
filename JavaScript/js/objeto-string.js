let frase = 'Java Script é uma linguagem de programação maravilhosa';
console.log(frase);

/* retorna o tamanho da string */
console.log(frase.length);

/* retorna a posição da letra que tiver dentro do conchete */
console.log(frase[53]);


/* Letras maiúsculas */
console.log(frase.toUpperCase());

/* Letras Minuscula */
console.log(frase.toLowerCase());

/* Percorre a string com metodo e retornando o valor */
console.log(frase.charAt(0));

/* Buscando algo na string pelo - início */
console.log(frase.indexOf('a'));

/* Buscando algo na string pelo - final */
console.log(frase.lastIndexOf('a'));
/* O resultado -1 diz que não existe a letra */
console.log(frase.lastIndexOf('z'));

/* verificar se existe algo e retornar Boolean */
console.log(frase.includes('ling'));

/* juntado strings */
console.log(frase.concat(' + Oi tdo bem'));

/* substituindo o primeiro caracter */
console.log(frase.replace('a', '@'));

/* substituindo o primeiro caracter */
console.log(frase.replaceAll('a', '@'));

/* printando parte da strig*/
console.log(frase.substring(4, 40));
console.log(frase.slice(4, 40));

/* separando a string - array */
console.log(frase);

/* retirando espaços pelo inicio */
console.log(frase.trim());

/* verificando se a string começa com uma frase ou caracter especifica */
console.log(frase.startsWith('Java'));

/* verificando se a string termina com uma frase especifica */
console.log(frase.endsWith('osa'))



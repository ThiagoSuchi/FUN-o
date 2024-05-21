// 4 - Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.

const menuPrincipal = ['portuguesa', 'provensal', 'moda da casa', '4 queijos'];
const menuSobremesas = ['chocalete com morango', 'prestigio', 'beijinho', 'nega maluca']

const menuCompleto = menuPrincipal.concat(menuSobremesas);

console.log(menuCompleto);
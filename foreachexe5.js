/*
06

Abaixo do array customers, declare uma const priceMessages e atribua um array 
vazio a ela.

Abaixo do array vazio que você acabou de criar, você precisa adicionar nesse 
array mensagens que devem conter o nome do cliente e o total que ele deve 
pagar.

O array priceMessages deve ficar assim: 
['Ricardo deve pagar R$ 119.80', 'Giselle deve pagar R$ 319.70']

Para formatar com duas casas decimais o preço total que cada cliente deve 
pagar, você pode usar o método toFixed(2).
*/

const customers = [
    {
      name: 'Ricardo',
      age: 25,
      orders: [
        { id: 59, product: 'Camiseta Comfort Em Algodão Com Estampa Route 66', price: 29.9 },
        { id: 129, product: 'Calça Skinny Em Sarja Com Bolsos', price: 89.9 }
      ]
    },
    {
      name: 'Giselle',
      age: 37,
      orders: [
        { id: 85, product: 'Bota Cano Médio Tratorada', price: 99.9 },
        { id: 645, product: 'Bolsa Transversal Com Alça De Corrente', price: 59.9 },
        { id: 491, product: 'Pijama Americano Curto Em Viscolycra Com Viés Contrastante', price: 159.90 }
      ]
    }
  ]

  
  const priceMessages = [];

  
  customers.forEach((cliente) => {
    let price = 0;
    cliente.orders.forEach(pedido => price += pedido.price)
    priceMessages.push(`${cliente.name} deve pagar um total de: ${price.toFixed(2)}`)
  
  })

  console.log(priceMessages);
  
  

  
const people = [
    { id: 5, name: 'Angelica', age: 18, federativeUnit: 'Pernambuco' },
    { id: 81, name: 'Thalles', age: 19, federativeUnit: 'São Paulo' },
    { id: 47, name: 'Ana Caroline', age: 18, federativeUnit: 'Alagoas' },
    { id: 87, name: 'Felipe', age: 18, federativeUnit: 'Minas Gerais' },
    { id: 9, name: 'Gabriel', age: 20, federativeUnit: 'São Paulo' },
    { id: 73, name: 'Aline', age: 19, federativeUnit: 'Brasília' }
]


const agesFrequency = people.reduce((acumulator, person) => {
    /* Verifica se já existe uma entrada para a idade da pessoa no acumulador
       se existir, incrementa o contador para essa idade, senão, define como */
    acumulator[person.age] =  acumulator[person.age] + 1 || 1
    return acumulator // Retorna o acumulador atualizado para a próxima iteração.

}, {})

console.log(agesFrequency);

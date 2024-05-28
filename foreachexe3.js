/*
03

Através do código abaixo, gere uma string no seguinte formato:
  
Segundo o site Metacritic, as 5 melhores séries já feitas são:
- Rectify, com metascore em 99 e user score em 8.2.
- The Larry Sanders Show, com metascore em 99 e user score em 4.8.
- Murder One, com metascore em 99 e user score em 4.6.
- Breaking Bad, com metascore em 99 e user score em 9.7.
- The Office (UK), com metascore em 98 e user score em 8.4.

Atenção! A string deve estar no exato formato acima. Isto é, ela precisa 
ser apenas uma única string com o conteúdo textual acima. 

Dica: para quebrar linha, você pode usar dentro da string o caractere 
especial \n. Pesquise por ele, se necessário. 
*/

const bestTVShows = [
    { title: 'Rectify', metascore: 99, userScore: 8.2 },
    { title: 'The Larry Sanders Show', metascore: 99, userScore: 4.8 },
    { title: 'Murder One', metascore: 99, userScore: 4.6 },
    { title: 'Breaking Bad', metascore: 99, userScore: 9.7 },
    { title: 'The Office (UK)', metascore: 98, userScore: 8.4 }
  ]
  let message = 'Segundo o site Metacritic, as 5 melhores séries já feitas são:' 

  console.log(message.toUpperCase(0));

  bestTVShows.forEach((array) => {
      console.log(`| - ${array.title}, com metascore em ${array.metascore}, e user score em ${array.userScore} `);
      
    })
    



const letraS = [`A`, `B`, `C`, `D`, `E`, `F`, `D`, `D`, `A`, `E`, `G`];

const letrasFiltradas = new Set(letraS);

console.log(letrasFiltradas);

const letras = [`A`, `B`, `C`, `D`, `E`, `F`, `D`, `D`, `A`, `E`, `G`];

const listaDeLetrasAtualizada = [...new Set(letras)];

console.log(listaDeLetrasAtualizada);



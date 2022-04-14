// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maça', 'mamão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['creme de amendoim', 'granola', 'bolo'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));


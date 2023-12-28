function countBreads<Type>(breads: Type[]): number {
  return breads.length
}

function getBread<Type>(value: Type): Type {
  return value;
}

function sendAlertAboutAlergens<BreadType, AllergensType>(breads: BreadType[], allergens: AllergensType[]): string {
  return `Atenção! ${breads.join(' e ')} têm como alergênicos: ${allergens.join(', ')}`;
}

const allergensIds = [123, 445, 221];

type CommonBread = {
  name: string,
  allergens: string[],
}

const paoDeSal: CommonBread = {
  name: 'Pão de sal',
  allergens: ['Glúten'],
}

const paoDoce: CommonBread = {
  name: 'Pão doce',
  allergens: ['Glúten'],
}

const myBreads = [paoDeSal, paoDoce];
const myBreadsAsStrings = ['Pão de sal', 'Pão doce'];
console.log(countBreads<string>(myBreadsAsStrings))
console.log(countBreads<CommonBread>(myBreads))
console.log(sendAlertAboutAlergens<string, string>(['Pão de sal', 'Pão doce'], ['Glúten']));
console.log(sendAlertAboutAlergens<string, number>(['Pão de sal', 'Pão doce'], allergensIds));
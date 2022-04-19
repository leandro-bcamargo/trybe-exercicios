const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dragonDmg = () => {
  return 15 + Math.floor((Math.random() * (warrior.strength - 15)) + 1);
}

// 2 - Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorDmg = () => {
  return warrior.strength + Math.floor((Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength) - 1));
}


// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const mageDmgMana = () => {
  if (mage.mana < 15) {
    return {
      damage: 'Não possui mana suficiente',
      manaSpent: 0,
    }
  }
  return {
    damage: mage.intelligence + Math.floor((Math.random() * (mage.intelligence * 2 - mage.intelligence)) + 1),
    manaSpent: 15,
  }
}

// Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions . O objeto será composto por ações do jogo e cada ação é por denifição uma HOF , pois neste caso, são funções que recebem como parâmetro outra função.
// Copie o código abaixo e inicie sua implementação:

const gameActions = {
  warriorTurn: (damage) => {
    const singleDmg = damage();
    dragon.healthPoints -= singleDmg;
    warrior.damage = singleDmg;
  },
  mageTurn: (damage) => {
    const singleDmg = damage();
    dragon.healthPoints -= singleDmg.damage;
    mage.damage = singleDmg.damage;
    mage.mana -= singleDmg.manaSpent;
  },
  dragonTurn: (damage) => {
    const singleDmg = damage();
    warrior.healthPoints -= singleDmg;
    mage.healthPoints -= singleDmg;
    dragon.damage = singleDmg;
  },
  result: () => battleMembers,
};

gameActions.warriorTurn(warriorDmg);
gameActions.mageTurn(mageDmgMana);
gameActions.dragonTurn(dragonDmg);
console.log(battleMembers);

// 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.


// 3 - Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do monstro dragon . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior . Além disto ela também deve atualizar o valor da chave damage do monstro.




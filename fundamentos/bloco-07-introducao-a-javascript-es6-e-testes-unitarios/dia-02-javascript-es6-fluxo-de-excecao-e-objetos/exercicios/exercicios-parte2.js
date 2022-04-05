const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Nº${order.address.number}, AP: ${order.address.apartment}`
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = "Luiz Silva";
  let arrayPizzas = Object.keys(order.order.pizza);
  let arrayCoke = Object.values(order.order.drinks.coke);
  return `Olá ${order.name}, o total do seu pedido de ${arrayPizzas[0]}, ${arrayPizzas[1]} e ${arrayCoke[0]} é R$${order.order.pizza.marguerita.amount * order.order.pizza.marguerita.price + order.order.pizza.pepperoni.amount * order.order.pizza.pepperoni.price + order.order.drinks.coke.amount * order.order.drinks.coke.price}`;
}

console.log(orderModifier(order));

// Agora você vai fazer alguns exercícios de fixação.
// Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
// Note que o parâmetro da função já está sendo passado na chamada da função.
// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00.
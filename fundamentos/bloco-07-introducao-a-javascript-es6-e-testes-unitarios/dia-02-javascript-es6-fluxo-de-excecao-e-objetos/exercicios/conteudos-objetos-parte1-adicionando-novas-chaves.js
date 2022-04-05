// Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
};

const addNewKey = (object, keyName, value) => {
    object[keyName] = value;
    return object;
}

console.log(addNewKey(customer, "lastName", "Silva"));


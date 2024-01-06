const generateRandomNumber = () => Math.round(Math.random() * 10);

const handlePromise = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = generateRandomNumber();
    if (randomNumber % 2 === 0) resolve(randomNumber);
    reject(new Error(`O número ${randomNumber} é inválido`));  
  }, 1000);
})
  
handlePromise()
.then(response => console.log(`O número ${response} é válido`))
.catch(error => console.log(error.message))
.finally(() => console.log('Processo finalizado.'));


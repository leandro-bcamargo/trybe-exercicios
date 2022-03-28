// Bibliotecas são códigos reutilizáveis. Ex: funções que realizam tarefas muito recorrentes. -->
// Tornam o código mais sucinto.
// É importante ler a documentação da biblioteca a ser utilizada.
// Pode-se fazer o download do arquivo .js contendo as funções a serem utilizadas. 
// Pode-se instalar via pacote npm do node.
// Para importar uma biblioteca, declara-se uma variável e usa-se require("nome da biblioteca");
let moment = require("moment");

// Função moment da biblioteca moment.
let brasilTetra = moment("17071994", "DDMMYYYY");

// Método fromNow() dessa mesma biblioteca;
let fromNow = brasilTetra.fromNow();

console.log("Ouvimos o 'É TETRA' há: " + fromNow);

// Outra forma de importar uma biblioteca é copiar a tag script contendo um link para a biblioteca como valor do atributo src.
// No HTML:
<script src="//cdn.rawgit.com/namuol/cheet.js/master/cheet.min.js"
        type="text/javascript"></script>

// No javascript:
cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
    alert('Voilà!');
  });

// Como vimos, a documentação da biblioteca contém as instruções sobre como instalá-la e uma lista com as funções disponíveis para você utilizar. A documentação deve ser sempre a sua principal fonte de informação, e saber ler documentações é fundamental na sua carreira como pessoa desenvolvedora. Quando uma pessoa programadora cria uma biblioteca, a sua intenção é compartilhá-la com toda a comunidade e, para isso, ela irá se esforçar para escrever uma documentação com bons exemplos para podermos reutilizar funções que são corriqueiras - como manipular datas, exibir alertas, validar campos, dentre outras.

// Algumas bibliotecas têm o seu próprio servidor. Outras, são distribuídas a partir de uma CDN externa. Uma CDN ( Content Delivery Network ) é uma rede de servidores para a distribuição de conteúdos. Ela armazena réplicas de conteúdos de outros sites e os entrega para o usuário. Essa distribuição é baseada na localização geográfica do visitante. Assim, a pessoa usuária irá ser conectada ao servidor mais próximo, diminuindo o tempo de latência (transferência de dados).

// Algumas bibliotecas têm o seu próprio servidor. Outras, são distribuídas a partir de uma CDN externa. Uma CDN ( Content Delivery Network ) é uma rede de servidores para a distribuição de conteúdos. Ela armazena réplicas de conteúdos de outros sites e os entrega para o usuário. Essa distribuição é baseada na localização geográfica do visitante. Assim, a pessoa usuária irá ser conectada ao servidor mais próximo, diminuindo o tempo de latência (transferência de dados).

// A biblioteca que vimos no vídeo, Moment, também está disponível via CDN e você pode acessá-la aqui . A cdnjs hospeda várias bibliotecas que você aprenderá mais para frente, como React JS . O grande benefício de se utilizar uma biblioteca através de CDNs é que os seus servidores são otimizados para servir arquivos estáticos como bibliotecas Javascript rapidamente. No entanto, a maioria dos sites que disponibilizam bibliotecas preferem hospedá-las em servidores próprios para ter mais controle sobre o conteúdo e otimizá-los, como incorporando mais de uma biblioteca em um arquivo para se ter mais recursos e performance.

// Há milhares de bibliotecas JavaScript que irão te auxiliar em diversas tarefas, como:
// Layout da página;
// Acessibilidade;
// Manipulação DOM;
// Efeitos e animação;
// Gráficos e quadros;
// Suporte para dispositivos móveis;

// Diante de tantas opções e funcionalidades, como decidir qual biblioteca utilizar? A verdade é que não há uma resposta correta para essa pergunta, e a escolha de qual biblioteca usar é fundamental no trabalho de uma pessoa desenvolvedora - afinal, você começará a escrever códigos tendo como base qual biblioteca utilizar e mudar de ideia quando a página já está em desenvolvimento pode ser uma tarefa difícil.

// Para tomar a melhor decisão, você pode pensar na sua aplicação a partir da sua composição. Uma página Web é composta por uma interface com o usuário (HTML e CSS), por elementos de interatividade (Javascript e DOM) e por um banco de dados (que também pode ser acessado por Javascript). Algumas bibliotecas são específicas para a interface com o usuário, enquanto que outras podem ser utilizadas em diferentes partes da aplicação.

// Bibliotecas que "fazem de tudo" são chamadas de frameworks. Elas atuam desde a recuperação de dados até a manipulação do DOM e interface com o usuário. Por outro lado, por fazer coisas demais, em algumas situações usar bibliotecas menores pode ser mais vantajoso, pois elas são focadas em tarefas específicas. Ainda assim, há muitas vantagens em se usar frameworks. Você aprenderá um pouco mais sobre um Framework CSS muito utilizado para criar páginas com design responsivo: o Bootstrap.

// Bootstrap é um framework CSS que nos ajuda a criar páginas com design responsivo -> elementos se adaptam ao tamanho da tela do dispositivo.

// Criar vínculo com arquivo css da biblioteca.
<link href="bootstrap-5.1.3-dist/css/bootstrap.min.css"></link>

// Criar vínculo com arquivo js da biblioteca.
<script src="bootstrap-5.1.3-dist/js/bootstrap.min.js"></script>

// jQuery é uma biblioteca necessária para utilizar o código do bootstrap.
// Como o bootstrap depende do jQuery para funcionar, é necessário importar o jQuery antes do bootstrap.

<script src="jquery-3.6.0.min.js"></script>

// Além do Bootstrap , você também pode usar bibliotecas que melhoram a experiência de navegação do usuário. A biblioteca mais popular para manipulação do DOM é a jQuery , que vimos no vídeo.

// Conforme as suas páginas crescem, você sentirá a necessidade de usar bibliotecas que te auxiliarão na definição da arquitetura da sua aplicação. Logo mais, quando chegarmos no módulo Frontend, você irá aprender uma biblioteca que é muito utilizada para construir user interfaces : o React JS .

// Algumas bibliotecas são bem pontuais, e são utilizadas para tarefas específicas. 

// Como você pode perceber, há milhares de bibliotecas disponíveis e não tem uma resposta correta para qual biblioteca você deve usar. No entanto, você pode fazer algumas considerações na hora de definir qual biblioteca mais se adequa ao produto que você está desenvolvendo. É interessante ponderar como será a experiência do time de desenvolvimento com a biblioteca e como será a experiência do usuário:

// Bem documentada : a biblioteca deve ser de fácil entendimento, com demonstrações de uso real e um guia sobre como utilizá-la. Se uma biblioteca não tem uma documentação, este pode ser um indício de que ela pode não ser tão amigável assim para time de desenvolvimento. Prefira bibliotecas com uma documentação acessível;

// Flexível : é fácil alterar as opções de configuração da funcionalidade que você gostaria de usar? Muitas vezes, a biblioteca pode ter demonstrações impressionantes, mas ser engessada para um uso específico;

// Atualizada : o mundo da Internet está em constante mudança. Bibliotecas podem parar de funcionar por depender de alguma característica específica de um navegador que foi atualizado. Verifique se a biblioteca que você quer utilizar está sempre ativa e atualizada;

// Testada : todas as bibliotecas devem incluir testes que garantem que as suas funcionalidades são executadas como o esperado.

// Código limpo : algumas vezes tratamos a biblioteca como uma caixa preta, e não damos tanta importância para o código que implementa as suas funcionalidades. Mas pode acontecer de você precisar entendê-lo, caso você encontre algum bug que pode estar relacionado à biblioteca, por exemplo. Dê uma olhada nos códigos da biblioteca e veja se ele é fácil de ser lido, com trechos comentados.

// Comunidade ativa : você vai ter dúvidas, e você irá encontrar bugs nas bibliotecas que usará como pessoa desenvolvedora. A melhor forma de tirar dúvidas e resolver bugs é junto com outras pessoas desenvolvedoras em uma comunidade ativa.

// Se a biblioteca é hospedada em sites como o GitHub, algumas dicas para conferir se a biblioteca é uma boa escolha é olhar o número de Forks ou o número de estrelas. Esses números são um bom indicativo sobre a quantidade de pessoas desenvolvedoras e pessoas programadoras que estão utilizando a biblioteca. Algumas podem atingir milhares de Forks! Você pode conferir também se há muitos problemas em aberto. Se sim, isso pode ser um sinal de que a comunidade não está muito empenhada em resolvê-los.

// Além dessas dicas, observe também como a comunidade externa está utilizando a biblioteca. As perguntas no StackOverflow são respondidas? Não deixe de buscar na Internet pelo nome da biblioteca que você quer utilizar e analise bem os resultados retornados.

// Acessibilidade : verifique se a biblioteca que você quer usar tem recursos que tornarão a sua aplicação acessível para qualquer usuário - inclusive pessoas portadoras de alguma deficiência.

// Responsividade : se o usuário for utilizar a aplicação em um dispositivo móvel, a biblioteca deve funcionar bem para o dispositivo. Os botões são grandes o bastante e respondem ao toque?

// Suporte ao navegador : algumas bibliotecas podem não suportar todos os navegadores. Elas podem ter sido projetadas para navegadores de dispositivos móveis, ou simplesmente não são compatíveis com navegadores mais antigos. Verifique se a sua biblioteca funciona bem para o navegador que você deseja.



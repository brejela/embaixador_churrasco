const express = require("express");
const path = require("path");

const port = 8000;

const app = express();

app.set("view engine", "ejs"); //coloca para informar que está utilizando o ejs como ferramenta de renderização
app.set("views", path.join(__dirname, "./views")); //tudo que estiver nessa pasta views vai ser renderizado de forma automatica como se fosse um template.

app.use(express.static(path.join(__dirname, "./static"))); //Volta a pasta raiz da aplicação e combina com a pasta static

//Criação do objeto para receber o conteudo estatico da pagina home
let conteudo = {
    titulo: "Como fazer churrasco: comece pela carne",
    texto: "A escolha da carne e do corte é um ponto importante para quem está aprendendo como fazer churrasco. Se você não tem prática no preparo, há alguns tipos que são mais recomendados. Fraldinha, picanha e contra-filé, além de serem alguns dos preferidos pelos brasileiros, também são os melhores para quem está começando acertar em cheio. Esses cortes são os mais rápidos para assar, fazem que você acumule experiência e possa avançar para preparos mais elaborados em breve. Você não precisa saber logo de início onde estão localizados os tipos de carne na parte do corpo do animal. Normalmente, você já encontra as carnes segmentadas por corte, com opções de tamanho e peso, com mais ou menos gordura, mais fresca ou mais maturada, diretamente no açougue. Se fizer você sentir mais seguro, comece pedindo no açougue carnes já temperadas. Mas, se for salgar por conta própria, cuide para não exagerar no sal. Em excesso, pode desidratar a carne. O sal grosso deve ser usado apenas em pedaços grandes. Partes médias podem ser temperadas com o sal triturado, enquanto o sal fino é suficiente para salgar os pedaços pequenos.",
}

let conteudo2 = {
    titulo: "O fogo é seu melhor amigo",
    texto: "Agora que você já adquiriu a carne, hora de colocar a churrasqueira para funcionar! Pode ser um grande desafio para o iniciante no mundo do churrasco, mas garantir que a carne fique assada de forma homogênea – por dentro e por fora – depende de fazer um bom fogo. Vamos sugerir duas técnicas que são consideradas simples e seguras para quem vai acender o fogo pela primeira vez. Em uma delas, basta depositar o carvão na churrasqueira e despejar álcool por cima dele. Aguarde alguns minutos enquanto o carvão absorve o álcool, e aí sim jogue de longe um palito de fósforo aceso. Lembre-se de limpar as mãos antes disso. Em pouco tempo, o carvão terá se tornado um braseiro. A segunda forma é até mais fácil. Basta fazer uma espécie de canudo da espessura de dois dedos da sua mão e torcer uma das pontas para que fique em forma de taça. Em seguida, abra uma cavidade em meio ao carvão. Posicione a taça ali e encha de óleo de cozinha. Ao acender, o fogo vai entrar em contato com o óleo e espalhar-se por todo o carvão. É fácil e eficaz! Deixe queimar até obter uma camada de cinzas por cima do carvão e somente aí coloque a carne para assar. Conforme a necessidade, você pode deslocar mais carvão para assar a carne. Dessa forma, quando a gordura começar a pingar, você evita as altas labaredas de fogo queimando o seu churrasco. Viu como fazer churrasco não tem muitos mistérios? Tudo é questão de prática. Continue acompanhando o blog do Embaixador do Churrasco para aperfeiçoar ainda mais as suas técnicas como mestre churrasqueiro."
}

let conteudos = [conteudo, conteudo2];

let conteudoBebida = {
    titulo: "Quais os tipos de bebidas são indispensáveis em um churrasco?",
    texto: "O churrasco foi quase perfeito. Ótimos cortes foram escolhidos, os amigos se divertiram, a música foi certeira e os acompanhamentos cumpriram perfeitamente seu papel. Só que faltou alguma coisa para que o evento fosse perfeito: as bebidas, que são fundamentais para o sucesso absoluto desse momento. Se no churrasco as opções de bebidas forem mínimas, não agradarem a todos os convidados e ainda estiverem quentes, provavelmente a avaliação do seu evento não será boa. Para evitar que qualquer tipo de problema aconteça, o churrasqueiro precisa ter em mente quais são as bebidas indispensáveis para este momento. E é para isso que criamos esse post! Nele, você encontrará quais são os principais tipos de bebidas que garantirão por completo o sucesso de seu churrasco."
}

let conteudoCarnes = {
    titulo: "Qual é o melhor tipo de carne para churrasco?",
    texto: "Não tem nada melhor do que reunir a família e os amigos, no final de semana, e fazer aquele churrasquinho. Preparar a lista de compras é fácil: tem que ter cerveja, “tem carvão em casa ou precisa comprar?”, aperitivos “Ok!”, “Não esquece do pão de alho!”, e mão na massa! Calma, mão na carne! As opções de carne parecem ser ainda mais infinitas quando você chega no açougue, não podemos negar que o preço conta muito no momento de decisão. Mas não adianta pagar barato e não comer bem, não é mesmo? Pensando no sucesso do seu churrasco, separamos os 9 melhores tipos de carne, com preços que cabem no seu bolso."
}

let conteudoPetisco = {
    titulo: "Acompanhamentos imperdíveis para churrasco!",
    texto: "Um churrasco de qualidade não conta somente com carnes saborosas preparadas por um churrasqueiro de primeira. A escolha dos acompanhamentos certos pode fazer a diferença na hora de saborear suas peças favoritas. Que tal conferir algumas ideias imperdíveis de acompanhamento para churrasco que não podem faltar na sua mesa?"
}

let conteudoContato = {
    titulo: "Como montar seu Kit Churrasco?!",
    email: "E-mail",
    nome: "Nome",
    texto: "Qual a sua duvida?",
    button: "Enviar"
}

app.get("/", (request, response) => {
    //response.sendFile(path.join(__dirname, "./static/index.html"));
    response.render("layout/template", { cont: conteudos, conteudo: "index" });
});

let dados = require('./dados/bebidas.json');

app.get("/bebidas", (request, response) => {
    //response.sendFile(path.join(__dirname, "./static/html/bebidas.html"));
    response.render("layout/template", { produtos: dados, conteudoBebida, conteudo: "bebidas" });
});

let dadosCarne = require('./dados/carnes.json');

app.get("/carnes", (request, response) => {
    // response.sendFile(path.join(__dirname, "./static/html/carnes.html"));
    response.render("layout/template", { produtos: dadosCarne, conteudoCarnes, conteudo: "carnes" });
});

app.get("/contato", (request, response) => {
    // response.sendFile(path.join(__dirname, "./static/html/contato.html"));
    response.render("layout/template", { conteudoContato, conteudo: "contato" });
});

let dadosPetisco = require('./dados/petiscos.json');

app.get("/petiscos", (request, response) => {
    // response.sendFile(path.join(__dirname, "./static/html/petiscos.html"));
    response.render("layout/template", { produtos: dadosPetisco, conteudoPetisco, conteudo: "petiscos" });
});

app.listen(8000, function() {
    console.log("O servidor está rodando na porta 8000");
});
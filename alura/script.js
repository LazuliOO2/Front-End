//Criamos uma função de pesquisarEsporte pega id do botão e class .servico-card além de transformar tudo que o usuario digitar em letra minuscula
    function pesquisarEsporte() {
        const esporte = document.getElementById('esporteInput').value.toLowerCase();
        const bainers = document.querySelectorAll('.servico-card');
// Usamos if else if e else para verificar oque usuario digito e com isso modificar o titulo p e a img do bane
        if (esporte === 'futebol') {
bainers[0].querySelector('h6').innerText = 'História do Futebol no Brasil';
bainers[0].querySelector('img').src = 'img/qndchego.jfif';
bainers[0].querySelector('p').innerText = 'O futebol foi introduzido no Brasil no final do século XIX, mais precisamente em 1894. O responsável por trazer o esporte para o país foi Charles Miller, um jovem brasileiro que havia estudado na Inglaterra e retornou com bolas e as regras do jogo.A primeira partida oficial aconteceu em São Paulo, no campo do São Paulo Railway, e contou com a participação de ingleses e brasileiros.';

bainers[1].querySelector('h6').innerText = 'Futebol nas Olimpíadas';
bainers[1].querySelector('img').src = 'img/quandovir.jfif';
bainers[1].querySelector('p').innerText = 'O futebol fez sua estreia nos Jogos Olímpicos de Atenas em 1896. No entanto, a modalidade foi retirada do programa olímpico após a edição de 1928. Somente em 1992, o futebol retornou aos Jogos Olímpicos, mas com algumas restrições, como a participação de jogadores com idade inferior a 23 anos.';

bainers[2].querySelector('h6').innerText = 'Jogadores em Destaque';
bainers[2].querySelector('img').src = 'img/atlet.jfif';
bainers[2].querySelector('p').innerText = 'Romário: O baixinho fez parte da seleção brasileira que conquistou a medalha de bronze nos Jogos Olímpicos de 1992.Neymar: O craque brasileiro liderou a seleção que conquistou a medalha de ouro nos Jogos Olímpicos de 2016, no Rio de Janeiro.';
} else if (esporte === 'skate') {
bainers[0].querySelector('h6').innerText = 'História do Skate no Brasil';
bainers[0].querySelector('img').src = 'img/chegouska.jfif';
bainers[0].querySelector('p').innerText = 'As primeiras pranchas de skate chegaram ao Brasil na década de 1970, trazidas por surfistas que buscavam uma nova forma de se divertir fora dágua. A prática se popularizou rapidamente entre os jovens, principalmente nas grandes cidades, e logo surgiram os primeiros grupos e pistas improvisadas.';

bainers[1].querySelector('h6').innerText = 'Skate nas Olimpíadas';
bainers[1].querySelector('img').src = 'img/olimpskat.jfif';
bainers[1].querySelector('p').innerText = 'O skate foi oficialmente reconhecido como esporte olímpico em 2016, fazendo sua estreia nos Jogos Olímpicos de Tóquio 2020. Essa inclusão nos Jogos Olímpicos representou um marco histórico para a modalidade, elevando o skate a um novo patamar de profissionalismo e visibilidade.';

bainers[2].querySelector('h6').innerText = 'Skatistas em Destaque';
bainers[2].querySelector('img').src = 'img/atletaskate.jfif';
bainers[2].querySelector('p').innerText = 'Leticia Bufoni: Considerada uma das melhores skatistas de street do mundo, Leticia conquistou diversos títulos internacionais e foi a primeira brasileira a se classificar para as Olimpíadas.Kelvin Hoefler: Especialista em skate vertical, Kelvin também é um dos principais nomes do skate brasileiro e já conquistou diversas medalhas em competições mundiais.';
} else {
// Default to Taekwondo
bainers[0].querySelector('h6').innerText = 'Quando chegou no Brasil';
bainers[0].querySelector('img').src = 'img/chegoutake.jfif';
bainers[0].querySelector('p').innerText = 'A modalidade foi introduzida no país em 1970, trazida por mestres coreanos como Sang Min Cho, que fundaram a primeira academia em São Paulo. A partir daí, o Taekwondo se espalhou rapidamente por todo o território nacional, conquistando adeptos de todas as idades e classes sociais.';

bainers[1].querySelector('h6').innerText = 'Virou esporte olímpico';
bainers[1].querySelector('img').src = 'img/olimptake.jfif';
bainers[1].querySelector('p').innerText = 'Em 1980, o Taekwondo foi reconhecido como esporte olímpico e, em 2000, fez sua estreia nos Jogos Olímpicos de Sydney. Essa inclusão nos Jogos Olímpicos impulsionou ainda mais a prática da modalidade em todo o mundo, inclusive no Brasil.';

bainers[2].querySelector('h6').innerText = 'Atletas em destaque';
bainers[2].querySelector('img').src = 'img/atlettake.jfif';
bainers[2].querySelector('p').innerText = 'Josiane Trevisan: Uma das principais atletas brasileiras da modalidade, Josiane participou de diversas edições dos Jogos Olímpicos e conquistou importantes títulos internacionais. Natália Falavigna: Outra grande nome do Taekwondo brasileiro, Natália também representou o país em diversas competições internacionais e conquistou medalhas importantes.';
}
 }

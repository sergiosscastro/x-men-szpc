//  esse e um comentário
//document.getElementsById('ciclope')
//poderia definir isso como variável mas não seria  a melhor forma
/*const itemCiclope=document.getElementsById('ciclope');
const itemJeanCiclope=document.getElementsById('jean-grey');
console.log(itemCiclope);
*/
// esse abaixo é melhor;
const personagens = document.querySelectorAll('.personagem');// query pode selecionar qualquer coisa
//console.log(personagens);
/// passo 02
// aqui da  um erro porque personagem é uma lista e o addEvent... não se aplica a uma lista.  Então para arruma faz o seguintw
/*personagens.addEventlistener('click', ()=> {
    console.log('clicou')
});*/
personagens.forEach((personagem)=>{
    personagem.addEventListener('mouseenter', ()=>{
    
        if(window.innerWidth < 450){
        window.scrollTo({top: 0, behavior:'smooth'});
        }



        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        personagem.classList.add('selecionado'); // pega a lista de classe do elemento
        /*verificar se ja existe personagem selecionado e mudar*/
        // objetivo 2
        // passo 1
        const imagemPersonagemGrande=document.querySelector('.personagem-grande');
        // passo 2 alterar a imagem
        const idPersonagem=personagem.attributes.id.value;
        // interpolação tamplate/string
        // `(crase) é o backtick
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
        //passo 3
        // alterar o nome
        const nomePersonagem=document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        //alterar a descrição do personagem
        const descricaoPersonagem=document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText=personagem.getAttribute('data-description');

        //fazer a refaturação
        // ou melhorar o código
        // na refaturação um conjunto de 02 ou mais linhas são transformados em função.  Vc seleciona  as linhas e com o outro botaão do mouse e seleciona refatorar. 
    })
})
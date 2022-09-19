const postsList = [
  {
    autor: "meowed",
    imgAutor: "./midias/stories/meowed.jpg",
    imgPubli: "./midias/conteudo/gato1.jpg",
    message: "Que gato mais fofíneo!",
    quemCurtiu: "respondeai",
    imgQuemCurtiu: "./midias/stories/respondeai.jpg",
    qtdeCurtidas: 101523,
  },
  {
    autor: "barked",
    imgAutor: "./midias/stories/barked.jpg",
    imgPubli: "./midias/conteudo/dog.jpg",
    message: "Soninhoo Zzzz",
    quemCurtiu: "adorable_animals",
    imgQuemCurtiu: "./midias/perfis/adorable-animals.jpg",
    qtdeCurtidas: 99159,
  },
  {
    autor: "adorable_animals",
    imgAutor: "./midias/perfis/adorable-animals.jpg",
    imgPubli: "./midias/conteudo/carinho.avif",
    message: "Campanha acaricie um doguinho de rua",
    quemCurtiu: "nathanwpyle",
    imgQuemCurtiu: "./midias/stories/nathan.jpg",
    qtdeCurtidas: 346810,
  },
  {
    autor: "respondeai",
    imgAutor: "./midias/stories/respondeai.jpg",
    imgPubli: "./midias/conteudo/html-code.avif",
    message: "Mais um Dev Driven empregado com menos de 1 mês de formação",
    quemCurtiu: "driven",
    imgQuemCurtiu: "./midias/conteudo/driven.png",
    qtdeCurtidas: 1576937,
  },
  {
    autor: "meowed",
    imgAutor: "./midias/stories/meowed.jpg",
    imgPubli: "./midias/conteudo/dog-correndo.jpg",
    message: "Dogíneo correndo passando na sua timeline",
    quemCurtiu: "wawawiwac",
    imgQuemCurtiu: "./midias/stories/wawawiwa.jpg",
    qtdeCurtidas: 453815,
  },
  {
    autor: "adorable_animals",
    imgAutor: "./midias/perfis/adorable-animals.jpg",
    imgPubli: "./midias/conteudo/dog-xao.jpg",
    message: "t-xau pessuAU!",
    quemCurtiu: "filomoderna",
    imgQuemCurtiu: "./midias/stories/filo-moderna.jpg",
    qtdeCurtidas: 279915,
  },
];

const icones = [
  "heart-outline",
  "chatbubble-outline",
  "paper-plane-outline",
  "bookmark-outline",
];

export default function Backup() {
  return (
    <>
      {postsList.map((p) => (
        <div class="post">
          <div class="autor">
            <img src={p.imgAutor} alt="Imagem do autor da publicação" />
            <p class="a500-14">{p.autor}</p>
            <p class="a500-14">...</p>
          </div>

          <img class="conteudo" src={p.imgPubli} alt="Imagem publicada" />

          <div class="icones">
            {icones.map((i) => (
              <ion-icon name={i}></ion-icon>
            ))}
          </div>
          <div class="curtido">
            <img
              src={p.imgQuemCurtiu}
              alt="Imagem de quem curtiu a publicação"
            />

            <p class="a300-14">
              Curtido por
              <b> {p.quemCurtiu}</b> e <b>outras {p.qtdeCurtidas} pessoas</b>
            </p>
          </div>
          <div class="comentario">
            <p class="a300-14">
              <b>{p.autor}</b> {p.message}
            </p>
            <ion-icon name="heart-outline"></ion-icon>
          </div>

          <div class="barra-inferior-post">
            <ion-icon name="happy-outline"></ion-icon>
            <input placeholder="Adicione um comentário..." />
            <p class="a500-14">Publicar</p>
          </div>
        </div>
      ))}
    </>
  );
}

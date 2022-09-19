import { useState } from "react";

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

const icones = ["chatbubble-outline", "paper-plane-outline"];

function Icon(props) {
  return <ion-icon name={props.name}></ion-icon>;
}

function Publi(props) {
  const [save, setSave] = useState("bookmark-outline");
  const [like, setLike] = useState("heart-outline");
  const [red, setRed] = useState("click md hydrated");
  const [qtdeLikes, setQtdeLikes] = useState(props.qtdeCurtidas)

  return (
    <div class="post">
      <div class="autor">
        <img src={props.imgAutor} alt="Imagem do autor da publicação" />
        <p class="a500-14">{props.autor}</p>
        <p class="a500-14">...</p>
      </div>

      <img
        class="conteudo"
        src={props.imgPubli}
        alt="Imagem publicada"
        onDoubleClick={() => (
          setLike(like === "heart-outline" ? "heart" : "heart"),
          setRed(
            red === "click md hydrated"
              ? "curtida md hydrated"
              : "curtida md hydrated"),
          setQtdeLikes(like === "heart" ? qtdeLikes : qtdeLikes + 1)
        )}
      />

      <div class="icones">
        <ion-icon
          name={like}
          class={red}
          onClick={() => (
            setLike(like === "heart" ? "heart-outline" : "heart"),
            setRed(
              red === "click md hydrated"
                ? "curtida md hydrated"
                : "click md hydrated"),
            setQtdeLikes(like === "heart" ? qtdeLikes - 1 : qtdeLikes + 1)
          )}
        ></ion-icon>
        {icones.map((i) => (
          <Icon name={i} />
        ))}
        <ion-icon
          name={save}
          class="click"
          onClick={() =>
            setSave(save === "bookmark" ? "bookmark-outline" : "bookmark")
          }
        ></ion-icon>
      </div>
      <div class="curtido">
        <img
          src={props.imgQuemCurtiu}
          alt="Imagem de quem curtiu a publicação"
        />

        <p class="a300-14">
          Curtido por
          <b> {props.quemCurtiu}</b> e{" "}
          <b>outras {qtdeLikes} pessoas</b>
        </p>
      </div>
      <div class="comentario">
        <p class="a300-14">
          <b>{props.autor}</b> {props.message}
        </p>
        <ion-icon name="heart-outline"></ion-icon>
      </div>

      <div class="barra-inferior-post">
        <ion-icon name="happy-outline"></ion-icon>
        <input placeholder="Adicione um comentário..." />
        <p class="a500-14">Publicar</p>
      </div>
    </div>
  );
}

export default function Posts() {
  return (
    <>
      {postsList.map((p) => (
        <Publi
          autor={p.autor}
          imgAutor={p.imgAutor}
          imgPubli={p.imgPubli}
          message={p.message}
          quemCurtiu={p.quemCurtiu}
          imgQuemCurtiu={p.imgQuemCurtiu}
          qtdeCurtidas={p.qtdeCurtidas}
        />
      ))}
    </>
  );
}

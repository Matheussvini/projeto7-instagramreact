const storiesList = [
  {
    nome: "9gag",
    foto: "./midias/stories/9gag.jpg",
  },
  {
    nome: "meowed",
    foto: "./midias/stories/meowed.jpg",
  },
  {
    nome: "barked",
    foto: "./midias/stories/barked.jpg",
  },
  {
    nome: "nathanwpyle...",
    foto: "./midias/stories/nathan.jpg",
  },
  {
    nome: "wawawiwac...",
    foto: "./midias/stories/wawawiwa.jpg",
  },
  {
    nome: "respondeai",
    foto: "./midias/stories/respondeai.jpg",
  },
  {
    nome: "filomoderna",
    foto: "./midias/stories/filo-moderna.jpg",
  },
  {
    nome: "memeriago.",
    foto: "./midias/stories/memeriagourmet.jpg",
  },
];

function Story(props) {
  return (
    <div class="caixa-story">
      <img src="./midias/stories/stories_background.jpg" />
      <img src={props.foto} />
      <p class="a400-12">{props.nome}</p>
    </div>
  );
}

export default function Stories() {
  return (
    <>
      <div class="barra-storys">
        <div class="mae-storys">
          {storiesList.map((s) => (
            <Story nome={s.nome} foto={s.foto} />
          ))}
          <div class="seta">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
      </div>
    </>
  );
}

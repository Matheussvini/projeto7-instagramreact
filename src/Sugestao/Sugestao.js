const listaSugestoes = [
  {
    usuario: "bad.vibes.memes",
    imagem: "./midias/perfis/badvibes.jpg",
  },
  {
    usuario: "chibirdart",
    imagem: "./midias/perfis/chibirdart.jpg",
  },
  {
    usuario: "razoesparaacreditar",
    imagem: "./midias/perfis/razoesparaacreditar.jpg",
  },
  {
    usuario: "adorable_animals",
    imagem: "./midias/perfis/adorable-animals.jpg",
  },
  {
    usuario: "smallcutecats",
    imagem: "./midias/perfis/smallcutecats.jpg",
  },
];

function PerfilSugerido(props) {
  return (
    <div class="perf">
      <img src={props.imagem} />
      <p class="a500-14">
        {props.usuario}
        <br /> <b>Segue você</b>
      </p>
    </div>
  );
}

export default function Sugestao() {
  return (
    <div class="sugestoes">
      <div class="suges-esq">
        <div>
          <p class="a500-12">Sugestões para você</p>
        </div>
        <div class="perfis-sugeridos">
          {listaSugestoes.map((s) => (
            <PerfilSugerido usuario={s.usuario} imagem={s.imagem} />
          ))}
        </div>
      </div>
      <div class="suges-dir">
        <p class="a500-12">Ver tudo</p>
        <p class="a500-12">Seguir</p>
        <p class="a500-12">Seguir</p>
        <p class="a500-12">Seguir</p>
        <p class="a500-12">Seguir</p>
        <p class="a500-12">Seguir</p>
      </div>
    </div>
  );
}

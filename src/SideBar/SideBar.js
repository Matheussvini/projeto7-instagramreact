import Sugestao from "../Sugestao/Sugestao";
import Usuario from "../Usuario/Usuario";

export default function SideBar() {
  return (
    <div class="dir">
      <Usuario />
      <Sugestao />
      <div class="fundo-sugest">
        <p>
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
          Localizações • Contas mais relevantes • Hashtags • Idioma
        </p>
      </div>
      <div class="fundo">
        <p>© 2021 INSTAGRAM DO FACEBOOK</p>
      </div>
    </div>
  );
}

import { useState } from "react";

export default function Usuario() {
  const [nome, setNome] = useState("Catana");
  const [image, setImage] = useState("./midias/perfis/catanacomics.jpg");

  return (
    <div class="perfil">
      <img
        src={
          image === "" || image === null
            ? setImage(prompt("Por favor, insira um URL válido"))
            : image
        }
        alt="Imagem do perfil"
        onClick={() =>
          setImage(prompt("Insira o endereço da sua foto de perfil"))
        }
      />
      <p class="300-14">
        <b>catanacomics</b>
        <br />
        {nome === "" || nome === null
          ? setNome(prompt("Por favor, insira o seu nome"))
          : nome}{" "}
        <ion-icon
          name="pencil"
          onClick={() => setNome(prompt("Insira o seu nome"))}
        ></ion-icon>
      </p>
    </div>
  );
}

const ion_icons = [
  "paper-plane-outline",
  "compass-outline",
  "heart-outline",
  "person-outline",
];

export default function NavBar() {
  return (
    <>
      <div class="topo">
        <div class="menu-principal">
          <div class="logo">
            <ion-icon class="icone-insta" name="logo-instagram"></ion-icon>
            <div class="barra-logo"></div>
            <img src="./midias/instagram-logo-1.png" alt="Logo Instagram" />
          </div>
          <div class="pesquisar">
            <input placeholder="Pesquisar" />
          </div>
          <div class="icones-topo">
            {ion_icons.map((i) => (
              <ion-icon name={i}></ion-icon>
            ))}
          </div>
        </div>
        <div class="menu-mobile">
          <ion-icon class="icone-insta" name="logo-instagram"></ion-icon>
          <img src="./midias/instagram-logo-1.png" alt="Logo Instagram" />
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
      </div>
    </>
  );
}

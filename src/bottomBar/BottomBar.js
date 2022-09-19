const icones = [
  "home",
  "search-outline",
  "add-circle-outline",
  "heart-outline",
  "person-outline",
];

export default function BottomBar() {
  return (
    <div class="barra-inferior-mobile">
      {icones.map((i) => (
        <ion-icon name={i}></ion-icon>
      ))}
    </div>
  );
}

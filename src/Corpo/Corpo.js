import BottomBar from "../bottomBar/BottomBar";
import Posts from "../Posts/Posts";
import Stories from "../Stories/Stories";
import SideBar from "../SideBar/SideBar";

export default function Corpo() {
  return (
    <div class="corpo-da-pag">
      <div class="esq">
        <Stories />
        <Posts />
        <BottomBar />
      </div>

      <div class="dir2">
        <SideBar />
      </div>
    </div>
  );
}

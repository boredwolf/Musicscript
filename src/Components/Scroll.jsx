import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomInScrollOut,
} from "react-scroll-motion";
import Home from "./Home";
import Connexion from "./Connexion";
import Location from "./Location";
import Formules from "./Formules";
import Choice from "./Choice";

const Scroll = () => {
  return (
    <div>
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky())}>
           <Location />
          </Animator>
        </ScrollPage>

        <ScrollPage page={1}>
          <Animator animation={batch(Fade(), Sticky(), MoveIn(1000, 0), MoveOut(0, -200))}>
            <Choice />
          </Animator>
        </ScrollPage>

        <ScrollPage page={2}>
          <Animator animation={batch(Fade(), Sticky(), MoveIn(1000, 0), MoveOut(0, -200))}>
            <Formules />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
      
    </div>
  );
};

export default Scroll;

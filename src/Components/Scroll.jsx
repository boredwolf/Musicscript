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
import useScrollBlock from "./useScrollBlock";

const Scroll = () => {
    const [blockScroll, allowScroll] = useScrollBlock();
    blockScroll ()
  return (
    <div>
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -400))}>
           <Location />
          </Animator>
        </ScrollPage>

        <ScrollPage page={1}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <Choice />
          </Animator>
        </ScrollPage>

        <ScrollPage page={2}>
          <Animator animation={ZoomInScrollOut}>
            <Formules />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
      
    </div>
  );
};

export default Scroll;

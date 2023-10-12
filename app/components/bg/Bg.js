import Btn from "../btn/Btn";
import "./bg.css";

function Bg(props) {
  return (
    <section className="bg flex-center">
      <div className="layer"></div>
      <article className="data flex-center-c">
        <h1> {props.name}</h1>
        <Btn />
      </article>
    </section>
  );
}

export default Bg;

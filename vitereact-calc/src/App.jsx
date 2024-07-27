import css from "./App.module.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";

function App() {
  return (
      <div className={css.calculator}>
        <Display></Display>
        <Buttons></Buttons>
      </div>
  );
}

export default App;

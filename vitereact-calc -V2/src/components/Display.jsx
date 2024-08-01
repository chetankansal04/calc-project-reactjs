import css from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <input className={css.display} type="text" value={displayValue}></input>
  );
};

export default Display;

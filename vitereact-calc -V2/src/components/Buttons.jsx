import css from "./Buttons.module.css";

const Buttons = ({ onButtonClick }) => {
  const buttonName = [
    "1",
    "2",
    "C",
    "3",
    "4",
    "+",
    "5",
    "6",
    "-",
    "7",
    "8",
    "*",
    "9",
    "0",
    "/",
    ".",
    "=",
  ];

  return (
    <div className={css.buttonContainer}>
      {buttonName.map((buttonName) => (
        <button
          className={css.buttons}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default Buttons;

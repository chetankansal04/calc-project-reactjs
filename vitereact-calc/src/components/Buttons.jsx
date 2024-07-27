import css from "./Buttons.module.css";

const Buttons = () => {
  const buttonName = [
    "C",
    "1",
    "2",
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
        <button className={css.buttons}>{buttonName}</button>
      ))}
    </div>
  );
};

export default Buttons;

import iconCheck from "../../assets/icon-check.svg";
import "./index.css";

export const ButtonDone = ({ done, onClick }) => {
  return (
    <button
      type="button"
      className={done ? "button_done active" : "button_done"}
      onClick={onClick}
    >
      {done ? <img src={iconCheck} alt="Task was done" /> : ""}
    </button>
  );
};

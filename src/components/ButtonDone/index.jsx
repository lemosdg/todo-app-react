import { useScheme } from "../../hooks/useScheme";
import iconCheck from "../../assets/icon-check.svg";
import "./index.css";

export const ButtonDone = ({ done, onClick }) => {
  const { scheme } = useScheme();

  return (
    <button
      type="button"
      className={
        done ? `button_done active ${scheme}` : `button_done ${scheme}`
      }
      onClick={onClick}
    >
      {done ? <img src={iconCheck} alt="Task was done" /> : ""}
    </button>
  );
};

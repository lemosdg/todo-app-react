import iconMoon from "../../assets/icon-moon.svg";
import { useScheme } from "../../hooks/useScheme";
import "./index.css";

export const Header = () => {
  const { scheme, changeScheme } = useScheme();

  return (
    <header className="header">
      <h1 className="header_title">T O D O</h1>
      <img
        onClick={changeScheme}
        className="header_img"
        src={iconMoon}
        alt="Icon of Moon"
      />
    </header>
  );
};

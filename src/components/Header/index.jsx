import iconMoon from "../../assets/icon-moon.svg";
import "./index.css";

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header_title">T O D O</h1>
      <img className="header_img" src={iconMoon} alt="Icon of Moon" />
    </header>
  );
};

import "./Header.css";
import logo from "../../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <div id="header">
      <img src={logo} alt="Logo Showing Money Bag" />
      <h1>React Investment Calculator</h1>
    </div>
  );
}

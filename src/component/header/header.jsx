import { logo, search } from "../../utils/svg";
import "./styles.css";

const Header = () => {
  return (
    <nav className="app-header">
      <span className="logo">{logo}</span>
      <div className="search">
        <input type="text" placeholder="Search" />
        {search}
      </div>
      <button className="request-btn">Request Quote</button>
      <button className="book-btn">Book Shipment</button>
    </nav>
  );
};

export default Header;

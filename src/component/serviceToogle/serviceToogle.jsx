import Toogle from "../toogle/toogle";
import "./styles.css";

const ServiceToogle = ({ title, description }) => {
  return (
    <div className="service-toogle">
      <Toogle />
      <div className="details">
        <span className="title">{title}</span>
        <span className="description">{description}</span>
      </div>
    </div>
  );
};

export default ServiceToogle;

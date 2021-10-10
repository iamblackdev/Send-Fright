import { string } from "prop-types";

import "./styles.css";

const ServiceTypeCard = ({ typeName, icon, selected, onClick, id }) => {
  return (
    <button
      type="button"
      onClick={() => onClick(id)}
      class={`service-type ${selected ? "selected" : ""}`}
    >
      {icon}
      {typeName}
    </button>
  );
};

export default ServiceTypeCard;

ServiceTypeCard.propTypes = {
  typeName: string.isRequired,
};

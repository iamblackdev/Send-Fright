import "./styles.css";

const ServiceTypeCard = ({ typeName, icon, selected, onClick, id }) => {
  return (
    <button
      type="button"
      onClick={() => onClick(id)}
      className={`service-type ${selected ? "selected" : ""}`}
    >
      {icon}
      {typeName}
    </button>
  );
};

export default ServiceTypeCard;

import "./styles.css";

const Toogle = () => {
  return (
    <label className="toggle">
      <input className="toggle-checkbox" type="checkbox" />
      <div className="toggle-switch"></div>
    </label>
  );
};

export default Toogle;

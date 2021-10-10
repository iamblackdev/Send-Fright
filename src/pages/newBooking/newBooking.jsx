import { useState } from "react";
import ServiceToogle from "../../component/serviceToogle/serviceToogle";
import ServiceTypeCard from "../../component/serviceTypeCard/serviceTypeCard";
import Toogle from "../../component/toogle/toogle";
import { dateIcon, infoIcon, mapPin, search } from "../../utils/svg";
import { services } from "./data";
import "./styles.css";

const NewBooking = () => {
  const [serviceSelectedId, setServiceSelectedId] = useState(null);
  const [cargoDirection, setCargoDirection] = useState(null);
  const [tabActive, setTabActive] = useState(1);
  return (
    <div className="new-booking-wrapper">
      <div className="search mobile">
        <input type="text" placeholder="Search" />
        {search}
      </div>
      <div className="mobile-top-btn">
        <button className="request-btn">Request Quote</button>
        <button className="book-btn">Book Shipment</button>
      </div>
      <div className="header-wrapper">
        <h1 className="heading">New Booking</h1>
        <span className="sub-text">
          Fill in the information below get a quote or create a new booking.
        </span>
      </div>

      {/* service selection */}
      <div className="card selection-card">
        <h4 className="section-heading">Select a service</h4>
        <div className="service-type-wrapper">
          {services.map((service) => (
            <ServiceTypeCard
              {...service}
              key={service.id}
              onClick={(id) => setServiceSelectedId(id)}
              selected={serviceSelectedId === service.id}
            />
          ))}
        </div>
      </div>

      {/* cargo location */}
      <div className="card cargo-location-details">
        <span>{infoIcon}</span>
        <div className="cargo-location">
          <div className="cargo-direction">
            <div
              className={`import ${
                cargoDirection === "import" ? "selected" : ""
              }`}
              onClick={() => setCargoDirection("import")}
            >
              Import
            </div>
            <div
              className={`export ${
                cargoDirection === "export" ? "selected" : ""
              }`}
              onClick={() => setCargoDirection("export")}
            >
              Export
            </div>
          </div>

          <div className="locations-input">
            <div className="input-append">
              {mapPin} From
              <input type="text" placeholder="city or port" />
            </div>
            <div className="input-append">
              {mapPin} To
              <input type="text" placeholder="city or port" />
            </div>
          </div>
        </div>
        <div className="cargo-status">
          <div className="input-append">
            {dateIcon}
            <input type="date" />
          </div>
          <div className="select-type">
            <select>
              <option>Incoterms</option>
              <option>Incoterms</option>
              <option>Incoterms</option>
              <option>Incoterms</option>
            </select>
          </div>
          <div className="cargo-value">
            <input type="text" placeholder="Total cargo value" />
          </div>
        </div>
      </div>

      {/* cargo details */}
      <div className="card cargo-details-wrapper">
        <div className="section-heading-wrapper">
          <h4 className="section-heading">Cargo Details</h4>
          <div className="dangerous-cargo">
            <Toogle />
            <span>
              <b>Dangerous Cargo:</b> (ex. Battery, Chemicals)
            </span>
          </div>
        </div>
        <div className="tab">
          <div className="tab-header">
            <span
              className={`tab-header-btn ${tabActive === 1 ? "selected" : ""}`}
              onClick={() => setTabActive(1)}
            >
              Total Dimention
            </span>
            <span
              className={`tab-header-btn ${tabActive === 2 ? "selected" : ""}`}
              onClick={() => setTabActive(2)}
            >
              Package Details
            </span>
          </div>
          <div className="tab-content">
            <div className="input">
              <label className="label">Total Volume</label>
              <input type="text" />
              <span className="append">cmb</span>
            </div>
            <div className="input">
              <label className="label">Total Weight</label>
              <input type="text" />
              <span className="append">kg</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card additional-services-wrapper">
        <h4 className="section-heading">Additional Services</h4>

        <div className="additional-services">
          <ServiceToogle
            title="Export Forwarding"
            description="We handle custom clearance and documentation"
          />
          <ServiceToogle
            title="Import custom clearance"
            description="We handle import customs and regulatory requirements"
          />
          <ServiceToogle
            title="Cargo insurance"
            description="Protect your cargo from logistics risks up to its full value"
          />
          <ServiceToogle
            title="Transport / Delivery"
            description="We deliver the cargo from your door step to the ports"
          />
        </div>
      </div>
    </div>
  );
};

export default NewBooking;

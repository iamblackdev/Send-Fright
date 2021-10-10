import {
  airFright,
  customerIcon,
  inlandFright,
  oceanFright,
} from "../../utils/svg";

export const services = [
  {
    id: 1,
    typeName: "Air Freight",
    icon: airFright,
  },
  {
    id: 2,
    typeName: "Ocean Freight",
    icon: oceanFright,
  },
  {
    id: 3,
    typeName: ["Inland", <br />, "Truck & Barge"],
    icon: inlandFright,
  },

  {
    id: 4,
    typeName: ["Customs", <br />, "Clearance"],
    icon: customerIcon,
  },
];

import logo from "./logo-11-02.png";

export { logo };

export const navLinks = [
  {
    id: 1,
    label: "Events",
    to: "/",
  },

  {
    id: 2,
    label: "My Tickets",
    to: "/my-tickets",
  },

  {
    id: 3,
    label: "About Project",
    to: "/about",
  },
];

export const ticketTypes = [
  {
    id: 1,
    label: "Regular Access",
    price: "Free",
    amountLeft: 20,
    short: "Reg",
  },

  {
    id: 2,
    label: "VIP Access",
    price: "$50",
    amountLeft: 20,
    short: "VIP",
  },

  {
    id: 3,
    label: "VVIP Access",
    price: "$150",
    amountLeft: 20,
    short: "VVIP",
  },

  {
    id: 4,
    label: "Exclusive",
    price: "$300",
    amountLeft: 20,
    short: "Excl.",
  },
];

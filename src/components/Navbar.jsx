import { Link, NavLink } from "react-router-dom";
import { logo, navLinks } from "../assets";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <div className="bg-[#05252C] border border-[#197686] rounded-3xl">
      <div className="flex flex-row justify-between items-center py-3 px-5">
        <Link to={"/"} className="cursor-pointer">
          <img src={logo} alt="logo" />
        </Link>

        <div className="hidden lg:flex flex-row justify-around items-center gap-x-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.to}
              className={({ isActive }) =>
                `font-merriweather text-lg ${
                  isActive ? "text-[#ffffff]" : "text-[#b3b3b3]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div>
          <Link to={"/my-tickets"}>
            <button className="bg-white py-3 px-5 rounded-xl text-[#0a0c11] font-merriweather text-sm md:text-base leading-[20px] cursor-pointer flex items-center gap-3">
              My Tickets
              <ArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

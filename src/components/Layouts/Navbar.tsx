import { Link, NavLink } from "react-router";
import { User, Search, Handbag, ChevronDown } from "lucide-react";
import Button from "../Elements/Button/button";
import CartFragment from "../Fragments/CartFragment";
import { useState } from "react";

const Navbar = () => {
  const email = localStorage.getItem("email");
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white text-black">
      <div className="flex items-center md:pl-14">
        <img src="/images/Hoseki Shops Logo.png" alt="" className="h-16" />
      </div>
      <div>
        <ul className="flex space-x-6">
          <NavLink to="/" className={"hover:font-bold active:text-green-600"}>
            HOME
          </NavLink>
          <NavLink
            to="/products"
            className={"hover:font-bold active:text-green-600 flex gap-0.5"}
          >
            PRODUCTS{" "}
            <span>
              <ChevronDown />
            </span>
          </NavLink>
          <NavLink
            to="/about"
            className={"hover:font-bold active:text-green-600"}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            className={"hover:font-bold active:text-green-600"}
          >
            CONTACT{" "}
          </NavLink>
        </ul>
      </div>
      <div className="flex space-x-3 md:p-4 items-center">
        <p>{email}</p>
        <Link to="/login">
          <User />
        </Link>
        <Search />

        <div
          className="relative"
          onMouseEnter={() => setIsCartVisible(true)}
          onMouseLeave={() => setIsCartVisible(false)}
        >
          <Handbag className="cursor-pointer" />
          <CartFragment isVisible={isCartVisible} />
        </div>

        <Button onClick={handleLogout} classname="bg-[#185839]">
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

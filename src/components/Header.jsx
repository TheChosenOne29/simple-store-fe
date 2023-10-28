import { BuildingStorefrontIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <BuildingStorefrontIcon className="w-7 h-7 black" />
          <span>Simple Store</span>
        </div>

        {/* Cart */}
        <button onClick={() => navigate("/cart")}>
          <ShoppingCartIcon className="w-7 h-7 black hover:cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default Header;

import { Link } from "react-router-dom";
import { Menubar, MenubarMenu, MenubarTrigger } from "./ui/menubar";
import { ShoppingCartIcon } from "lucide-react";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Navbar = () => {
  const { openCart, cartQunatity } = useShoppingCart();

  return (
    <nav className="sticky shadow-md flex justify-between items-center px-6 py-2 md:px-8 bg-purple-200 h-20">
      <Menubar>
        <MenubarMenu>
          <Link to="/">
            <MenubarTrigger>Home</MenubarTrigger>
          </Link>
          <Link to="/about">
            <MenubarTrigger>About</MenubarTrigger>
          </Link>
          <Link to="/store">
            <MenubarTrigger>Store</MenubarTrigger>
          </Link>
        </MenubarMenu>
      </Menubar>
      <button className="relative" onClick={openCart}>
        <ShoppingCartIcon
          className="cursor-pointer relative"
          width={25}
          height={25}
        />
        <div className="rounded-full bg-red-500 text-white absolute -right-4 -bottom-2 w-[1.5rem] h-[1.5rem] transform translate-x-1/4 translate-y-1/4">
          {cartQunatity}
        </div>
      </button>
    </nav>
  );
};

export default Navbar;

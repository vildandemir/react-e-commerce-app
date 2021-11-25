import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { MdShoppingCart, MdFavorite } from "react-icons/md";
import { useCart } from "../../context/CartContext";
import Jackets from "./Categories/Jackets";
import Pants from "./Categories/Pants";
import Bags from "./Categories/Bags";
import Dresses from "./Categories/Dresses";
import Sunglasses from "./Categories/Sunglasses";

function Navbar() {
  const { items } = useCart();
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className="logo">
          <Link to="/">E-Commerce</Link>
        </div>
        <ul>
          <li className={styles.menu}>
            <Link to="/">Products</Link>
          </li>
        </ul>
      </div>
      <ul>
        <li className="categories">
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Categories
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link to="/jackets">
                  <Jackets />
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/pants">
                  <Pants />
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/dresses">
                  <Dresses />
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/bags">
                  <Bags />
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/sunglasses">
                  <Sunglasses />
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </li>
      </ul>
      <div className="right">
        <Button colorScheme="pink" color="black" size="md">
          <Link to="/favorites">
            <MdFavorite w={8} h={8} ml={3} />
          </Link>
        </Button>

        <Button colorScheme="yellow" color="black" size="md" ml={5}>
          <Link to="/cart">
            <MdShoppingCart w={8} h={8} ml={3} color="black" />
            {items.length > 0 && <div>{items.length}</div>}
          </Link>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;

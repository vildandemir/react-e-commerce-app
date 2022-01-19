import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { MdShoppingCart, MdFavorite, MdPerson } from "react-icons/md";
import { useCart } from "../../context/CartContext";
import Jackets from "./Categories/Jackets";
import Pants from "./Categories/Pants";
import DressShirts from "./Categories/DressShirts";
import Dresses from "./Categories/Dresses";
import Sunglasses from "./Categories/Sunglasses";

function Navbar() {
  const { items } = useCart();
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Link to="/">DORADO</Link>
        </div>
        <ul>
          <li className={styles.menu}>
            <Link to="/products">Products</Link>
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
              <MenuItem onClick={() => <Jackets />}>
                <Link to="/jackets">Jackets</Link>
              </MenuItem>
              <MenuItem onClick={() => <Pants />}>
                <Link to="/pants">Pants</Link>
              </MenuItem>
              <MenuItem onClick={() => <Dresses />}>
                <Link to="/dresses">Dresses</Link>
              </MenuItem>
              <MenuItem onClick={() => <DressShirts />}>
                <Link to="/dressshirts">Dress Shirts</Link>
              </MenuItem>
              <MenuItem onClick={() => <Sunglasses />}>
                <Link to="/sunglasses">Sunglasses</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </li>
      </ul>
      <div className="right">
        <Button color="black" size="md">
          <Link to="/favorites">
            <MdFavorite className={styles.right} />
          </Link>
        </Button>

        <Button color="black" size="md" ml={5}>
          <Link to="/cart">
            <MdShoppingCart color="black" className={styles.right} />
            {items.length > 0 && <div>{items.length}</div>}
          </Link>
        </Button>

        <Button color="black" size="md" ml={4}>
          <Link to="/auth">
            <MdPerson className={styles.righttwo} />
          </Link>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;

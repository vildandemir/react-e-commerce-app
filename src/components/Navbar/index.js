import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { ChevronDownIcon, StarIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react";
import { MdShoppingCart, MdFavorite } from "react-icons/md";

function Navbar() {
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
              <MenuItem>Jackets</MenuItem>
              <MenuItem>Pants</MenuItem>
              <MenuItem>T-Shirts</MenuItem>
              <MenuItem>Bags</MenuItem>
              <MenuItem>Eye Glasses</MenuItem>
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
          </Link>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;

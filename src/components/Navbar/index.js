import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";

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
      <div className="right">
        <Button colorScheme="pink" color="black" size="md">
          <Link to="/favorites">Favorites</Link>
        </Button>
        <Button colorScheme="yellow" color="black" size="md">
          <Link to="/cart">Cart</Link>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;

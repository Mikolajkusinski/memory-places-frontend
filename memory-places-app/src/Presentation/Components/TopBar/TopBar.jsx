import React from "react";
import { Form, FormControl } from "react-bootstrap";

import styles from "./TopBar.module.scss";
import Hamburger from "hamburger-react";

const TopBar = ({ isOpen, toggleMenu }) => (
  <div className={styles.topBar}>
    <div className={styles.searchContainer}></div>

    <div className={styles.logoContainer}>
      <h1 className={styles.logo}>LOGO</h1>
    </div>

    <div className={styles.menuButtonContainer}>
      <Hamburger toggled={isOpen} toggle={toggleMenu} />
    </div>
  </div>
);

export default TopBar;

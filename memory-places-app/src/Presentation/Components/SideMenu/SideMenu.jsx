import React from "react";
import styles from "./SideMenu.module.scss";
import { IconSquarePlus, IconUser } from "@tabler/icons-react";

const SideMenu = ({ isOpen }) => (
  <div className={`${styles.sideMenu} ${isOpen ? styles.open : ""}`}>
    <div className={styles.menuHeader}>
      <a className={styles.login}>Zaloguj się</a>
      <div className={styles.avatar}>
        <IconUser stroke={2} />
      </div>
    </div>
    <div className={styles.menuBody}>
      <ul className={styles.menuOptions}>
        <li>
          <IconSquarePlus stroke={2} size={40} color="lightgray" />
          <a href="#option1" className={styles.optionItem}>
            Option 1
          </a>
        </li>
        <li>
          <IconSquarePlus stroke={2} size={40} color="lightgray" />
          <a href="#option2" className={styles.optionItem}>
            Option 2
          </a>
        </li>
        <li>
          <IconSquarePlus stroke={2} size={40} color="lightgray" />
          <a href="#option3" className={styles.optionItem}>
            Option 3
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default SideMenu;

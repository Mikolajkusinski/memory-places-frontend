import React from "react";
import { GeocodingControl } from "@maptiler/geocoding-control/react";
import styles from "./TopBar.module.scss";
import Hamburger from "hamburger-react";
import * as maptilersdk from "@maptiler/sdk";

//TODO fix layout on smaller window
const TopBar = ({ isOpen, toggleMenu, mapController }) => (
  <div className={styles.topBar}>
    <div className={styles.searchContainer}>
      {mapController && (
        <GeocodingControl
          apiKey={maptilersdk.config.apiKey}
          mapController={mapController}
        />
      )}
    </div>

    <div className={styles.logoContainer}>
      <h1 className={styles.logo}>LOGO</h1>
    </div>

    <div className={styles.menuButtonContainer}>
      <Hamburger toggled={isOpen} toggle={toggleMenu} />
    </div>
  </div>
);

export default TopBar;

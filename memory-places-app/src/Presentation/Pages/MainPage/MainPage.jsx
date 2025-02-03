import React, { useState } from "react";
import SideMenu from "../../Components/SideMenu/SideMenu";
import MapComponent from "../../Components/Map/MapComponent";
import TopBar from "../../Components/TopBar/TopBar";
import styles from "./MainPage.module.scss";
import MainFooter from "../../Components/MainFooter/MainFooter";

const MainPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      <SideMenu isOpen={menuOpen} />

      <div className={`${styles.content} ${menuOpen ? styles.open : ""}`}>
        <TopBar isOpen={menuOpen} toggleMenu={toggleMenu} />

        <MapComponent />
        <MainFooter />
      </div>
    </div>
  );
};

export default MainPage;

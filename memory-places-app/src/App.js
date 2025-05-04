import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Presentation/Pages/MainPage/MainPage";
import AddPlacePage from "./Presentation/Pages/AddPlacePage/AddPlacePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/add/place" element={<AddPlacePage />} />
    </Routes>
  );
};

export default App;

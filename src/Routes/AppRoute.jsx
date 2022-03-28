import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../screen/About";
import HomeScreen from "../screen/HomeScreen";
import AppTodoScreen from "../screen/AppTodoScreen";
import CardBreakingbadScreen from "../screen/CardBreakingbadScreen";
import NavBar from "../components/NavBar";
export default function AppRoute() {
  return (
    <Router>
      <>
        <NavBar />
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/todos" element={<AppTodoScreen />} />
            <Route path="/breaking" element={<CardBreakingbadScreen />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

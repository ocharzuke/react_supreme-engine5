import "./App.css";
import React, { useState } from "react";
import HeaderNavbar from "./HeaderNavbar";
import HeroImage from "./HeroImage";
import AboutPage from "./AboutPage";
import LandingPage from "./LandingPage";
import ProductPage from "./ProductPage";
import RegistrationPage from "./RegistrationPage";
import { Route, Switch } from "wouter";

export default function App() {
  return (
    <>
      <HeaderNavbar />
      <HeroImage />
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/shop" component={ProductPage} />
        <Route path="/register" component={RegistrationPage} />
      </Switch>
    </>
  );
}

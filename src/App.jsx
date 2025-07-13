import "./App.css";

import { Route, Switch } from "wouter";
import React, { useState } from "react";
import HeaderNavbar from "./HeaderNavbar";
import HeroImage from "./HeroImage";
import AboutPage from "./AboutPage";
import LandingPage from "./LandingPage";
import ProductPage from "./ProductPage";
import RegistrationPage from "./RegistrationPage";

import FlashMessage from "./FlashMessage";

export default function App() {
  return (
    <>
      <HeaderNavbar />
      <HeroImage />
      <FlashMessage />
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/shop" component={ProductPage} />
        <Route path="/register" component={RegistrationPage} />
      </Switch>
    </>
  );
}

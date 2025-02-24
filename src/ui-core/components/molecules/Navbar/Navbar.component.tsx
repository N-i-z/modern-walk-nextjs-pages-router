import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.component.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="homelink">
        <Link to={"/"} className="logo-container">
          <img className="logo" src="/image/logo.png" alt="logo"></img>
        </Link>
      </div>
      <div className="pagelink">
        <b>
          <Link to={"/mens-clothing"}>Men</Link>
          <Link to={"/womens-clothing"}>Women</Link>
        </b>
      </div>
      <div className="auth-buttons">
        <SignedOut>
          <div className="sign-in-button">
            <SignInButton />
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

import React from "react";
import styles from "./Navigation.module.css";

export default function Navigation() {
  console.log(styles);
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img src="/Images/logo.png" alt="logo" />
      </div>
      <ul>
        <li href="#">Home</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
    </nav>
  );
}

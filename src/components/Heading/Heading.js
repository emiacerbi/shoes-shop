import React from "react";
import styles from "./styles.module.css";

export default function Heading({ headingText }) {
  return <h1 className={styles.heading}>{headingText}</h1>;
}

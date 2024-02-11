// Numbers.js

import React from "react";
import styles from "./Numbers.module.css";

export default function Numbers(props) {
  const { name, address, rating, types, num } = props;

  return (
    <>
      <div className={styles.card}>
        <div className={styles.container}>
          <h4 className={styles.name}>
            <b>{name}</b>
          </h4>
          <h6 className={styles.rating}>
            <i className="fa fa-star"></i> {rating}
          </h6>
          <p className={styles.address}>
            <i className="fa fa-map-marker"></i> {address}
          </p>
          <p className={styles.types}>{types}</p>
          <p className={styles.num}>
            <i className="fa fa-phone"></i> {num}
          </p>
        </div>
      </div>
    </>
  );
}

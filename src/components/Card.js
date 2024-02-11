import React from "react";
import { data } from "./data";
import Numbers from "./Numbers";
import styles from './Card.module.css'

export default function Card() {
  return (
    <>
    <h2>Nearest Medical Center Contact Numbers</h2>
      <div className={styles.upperbody}>

        {data.map((item) => {
          return (
            <Numbers
              key={item.id}
              name={item.name}
              address={item.address}
              rating={item.rating}
              num={item.number}
              types={item.types.type1}
            />
          );
        })}
      </div>
    </>
  );
}

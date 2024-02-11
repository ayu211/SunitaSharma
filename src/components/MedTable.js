import React from "react";
import styles from "./MedTable.module.css";

export default function MedTable({ meds, onDeleteMed }) {
  const handleDelete = (index) => {
    onDeleteMed(index);
  };

  function addMed(time, day) {
    const matchingMeds = meds.filter((m) => m.day === day && m.time === time);
    if (matchingMeds) {
      return matchingMeds.map((med, index) => (
        <div key={index}>
          {med.medName}{" "}
          <button className={styles.del} onClick={() => handleDelete(index)}>
            Delete
          </button>
        </div>
      ));
    }
    return '';
  }
  
  return (
    <>
      <table className={styles.a}>
        <thead >
          <tr className={styles.col} >
            <th >TIME</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody >
          {['Morning', 'Afternoon', 'Night'].map((time) => (
            <tr  key={time}>
              <td>{time}</td>
              <td>{addMed(time, 'Monday')}</td>
              <td>{addMed(time, 'Tuesday')}</td>
              <td>{addMed(time, 'Wednesday')}</td>
              <td>{addMed(time, 'Thursday')}</td>
              <td>{addMed(time, 'Friday')}</td>
              <td>{addMed(time, 'Saturday')}</td>
              <td>{addMed(time, 'Sunday')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

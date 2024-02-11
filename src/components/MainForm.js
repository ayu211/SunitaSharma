import React, { useState, useEffect } from 'react';
import Form from './Form';
import MedTable from './MedTable';

const MainForm = () => {
  const [medicine, setMedicine] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('medicine')) || [];
    setMedicine(storedData);
  }, []);

  const handleAddMedicine = (newMed) => {
    setMedicine([...medicine, newMed]);
    const storedData = JSON.parse(localStorage.getItem('medicine')) || [];
    localStorage.setItem('medicine', JSON.stringify([...storedData, newMed]));
  };

  const handleDeleteMed = (index) => {
    const updatedMedicine = [...medicine];
    updatedMedicine.splice(index, 1);
    setMedicine(updatedMedicine);
    localStorage.setItem('medicine', JSON.stringify(updatedMedicine));
  };

  return (
    <>
      <h2>Medicine Tracker</h2>
      <Form onAddMed={handleAddMedicine} />
      <MedTable meds={medicine} onDeleteMed={handleDeleteMed} />
    </>
  );
};

export default MainForm;

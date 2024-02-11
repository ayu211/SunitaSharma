import React, { useState } from 'react'
import styles from './Form.module.css'

export default function Form({onAddMed}) {
    const[medName, setMedName] = useState('');
    const[time, setTime] = useState('');
    const[day, setDay] = useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();

        onAddMed({medName, time, day});

        setMedName('');
        setDay('');
        setTime('');
    }

  return (
    <>
    <form className={styles.form} onSubmit={handleSubmit}>
        <label>Medicine Name : <input type="text" name="Name" value={medName} onChange={(e)=>setMedName(e.target.value)} /></label>
        <label>Day : &nbsp;
            <select value={day} onChange={(e)=>setDay(e.target.value)}>
                <option value="">Select day</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
            </select>
        </label>
        <label>Timing : &nbsp;
            <select value={time} onChange={(e)=>setTime(e.target.value)}>
                <option value="">Select Time</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Night">Night</option>
            </select>
        </label>
        <button className={styles.add} type='submit'>Add <i class="fa fa-plus"></i></button>
    </form>
    </>
  )
}

import React, { useState, useEffect }from "react";
import styles from './styles.module.css';

export const Counter = ({ onChange = () => {}, min = 1, max = 10, defVal = 1 }) => {
  const [ value, setValue ] = useState(defVal);
  const handleAdd = () => {
    const newVal = value + 1;
    setValue(newVal > max ? max : newVal);
  }
  const handleRemove = () => {
    const newVal = value - 1;
    setValue(newVal < min ? min : newVal);
  }
  useEffect(() =>{
    onChange(value);
  }, [value]);
  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={handleRemove}>-</button>
      <span>{value}</span>
      <button className={styles.btn} onClick={handleAdd}>+</button>
    </div>
  );
}
export default Counter;
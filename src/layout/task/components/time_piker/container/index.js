import React, { useState, useEffect } from "react";
import Counter from "../counter";
import Range from '../range/range';
import styles from './styles.module.css';

const ContainerTimePiker = ({onChange = () => {}}) => {
  const [ value, setValue ] = useState({
    start: 0,
    countBefore: 1,
    point: 50,
    countAfter: 1,
    end: 100,
  });
  const handleRangeCange = (e) => {
    setValue((prev) => ({...prev, point: e?.[0]}));
  }
  const handleBeforeCount = (e) => {
    setValue((prev) => ({...prev, countBefore: e}));
  }
  const handleAfterCount = (e) => {
    setValue((prev) => ({...prev, countAfter: e}));
  }
  useEffect(() => {
    onChange(value);
  }, [value]);
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.container}>
          <div className={styles.rangeWrap}>
            <Range  onChange={(e) => { handleRangeCange(e) }} />
          </div>
          <div className={styles.item} style={{width: `${value?.point}%`}}>
            <Counter onChange={e => { handleBeforeCount(e) }}/>
          </div>
          <div className={styles.item} style={{width: `${100 - value?.point}%`}}>
            <Counter onChange={e => { handleAfterCount(e) }}/>
          </div>
        </div>
      </div>
    </>
  )
};

export default ContainerTimePiker;

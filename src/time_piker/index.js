import React from "react";
import ContainerTimePiker from './container/index';

const TimePiker = ({ onChange = () => {} }) => {
  const handleChangeData = (e) => {
    onChange(e);
    console.log(e);
  }
  return (
    <>
      <ContainerTimePiker onChange={handleChangeData}/>
    </>
  )
};

export default TimePiker;

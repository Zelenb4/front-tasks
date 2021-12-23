import { useState, useEffect } from 'react';
import './App.css';
import WeekdayPicker from './layout/WeekdayPicker';
import WorkloadOverview from './layout/WorkloadOverview';
import TimePiker from './layout/task/components/time_piker/index';

function App() {
  const [selectedDays, setSelectedDays] = useState([]);
  const days = [
    { id: 1, name: "S", fullName: 'Sunday', active: false, },
    { id: 2, name: "M", fullName: 'Monday', active: false, },
    { id: 3, name: "T", fullName: 'Tuesday', active: false, },
    { id: 4, name: "W", fullName: 'Wednesady', active: false, },
    { id: 5, name: "T", fullName: 'Thursday', active: false, },
    { id: 6, name: "F", fullName: 'Friday', active: false, },
    { id: 7, name: "S", fullName: 'Saturday', active: false, }]

  useEffect(() => {
    setSelectedDays(days)
  }, [])

  // useEffect(() => {
    // console.log('selectedDays', selectedDays);
  // }, [selectedDays])

  return (
    <div className="App">
      <TimePiker />
      <WeekdayPicker days={days} setSelectedDays={setSelectedDays} selectedDays={selectedDays} />
      <WorkloadOverview start={0} countBefore={2} point={50} countAfter={4} end={100} selectedDays={selectedDays} />
    </div>
  );
}

export default App;

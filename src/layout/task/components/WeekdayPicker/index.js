import './style.css';

const WeekdayPicker = ({ setSelectedDays, selectedDays, days }) => {

  return (
    <div className="Days">
      {
        days.map((day, index) => {
          const handleOnClick = e => {
            if ([...e.target.classList].includes('active')) {
              e.target.classList.remove("active")
              const index = selectedDays.findIndex(elem => elem.id === day.id);
              const old = selectedDays[index]
              const newItem = { ...old, active: false }
              const newArr = [...selectedDays.slice(0, index), newItem, ...selectedDays.slice(index + 1)]
              setSelectedDays(newArr)
            } else {
              e.target.classList.add("active")
              const index = selectedDays.findIndex(elem => elem.id === day.id);
              const old = selectedDays[index]
              const newItem = { ...old, active: true }
              const newArr = [...selectedDays.slice(0, index), newItem, ...selectedDays.slice(index + 1)]
              setSelectedDays(newArr)
            }
          };
          return <div key={index} onClick={handleOnClick} className="oneDay">{day.name}</div>
        })
      }
    </div >
  );
}

export default WeekdayPicker;

import React ,{useState, useEffect} from 'react';

const App = () => {
  const [weatherInput, setWeatherInput] =useState({ temperature: 25, conditions: "Sunny" });
  const [textColor, setTextColor] = useState("blue");
  useEffect(() => {
    // Set text color based on temperature threshold
    if (weatherInput.temperature > 20) {
      setTextColor("red");
    } else {
      setTextColor("blue");
    }
  }, [weatherInput.temperature]);
 
  return (
    <div>
        {/* Do not remove the main div */}
       <div >
        <div>Temperature: <span style ={{color:textColor}}>{weatherInput.temperature}</span></div>
        <div>Conditions: <span style ={{color:textColor}}>{weatherInput.conditions}</span></div>
       </div>
    </div>
  )
}


export default App
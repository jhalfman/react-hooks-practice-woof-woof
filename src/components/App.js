import React, {useState, useEffect} from "react";
import DogFilter from "./DogFilter";
import DogBar from "./DogBar";
import DogInfo from "./DogInfo";

function App() {
  const [dogs, setDogs] = useState([]);
  const [currentDog, setCurrentDog] = useState(null);
  const [filterOn, setFilterOn] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/pups")
    .then(resp => resp.json())
    .then(doggies => setDogs(doggies))
  }, [])

  function showDogInfo(dog) {
    setCurrentDog(dog);
  }

  function toggleGoodDog() {
    fetch(`http://localhost:3001/pups/${currentDog.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({isGoodDog: !currentDog.isGoodDog})
    })
    .then(resp=>resp.json())
    .then(changedDog => {
      const updatedDogs = dogs.map(dog => {
        return dog.id === changedDog.id ? changedDog : dog;
      })
      console.log(changedDog)
      setDogs(updatedDogs);
      setCurrentDog(changedDog)
    })
  }

  function changeFilter() {
    setFilterOn(!filterOn);
  }

  return (
    <div className="App">
      <DogFilter changeFilter={changeFilter} filterOn={filterOn}/>
      <DogBar dogs={dogs} showDogInfo={showDogInfo} filterOn={filterOn}/>
      {currentDog ? <DogInfo dog={currentDog} toggleGoodDog={toggleGoodDog}/> : null}
    </div>
  );
}

export default App;

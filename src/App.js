import { useState } from 'react';
import './App.css'
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
  const animals = [
  'bird',
  'cat',
  'cow',
  'dog',
  'allegator',
  'horse'
  ];
  return animals[Math.floor(Math.random() * animals.length)]
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
  setAnimals([... animals, getRandomAnimal()])
  }

  const renderedAnimals = animals.map((animal, index) => {
    return (
      <AnimalShow type={animal} key={index} />
    );
  });

  return (
    <div className="animal-adder">
      <button 
        onClick={handleClick}>
          Add Animal
      </button> 
      <div className="animal-list">
        {renderedAnimals}
      </div>
    </div>
  );
}

export default App;

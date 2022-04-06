import './App.css';
import Fighter from './components/Fighter';
import FighterScreen from './components/FighterScreen';
import SideNavigation from './components/SideNavigation';
import { useState } from 'react';

const characters = [
  {name: 'Roy', color: ['firebrick', 'lightblue']},
  {name: 'Fox', color: ['green', 'brown']},
  {name: 'Ganondorf', color: ['white', 'midnightblue']},
  {name: 'Sheik', color: ['lightskyblue', 'white']},
  {name: 'Cloud', color: ['mediumseagreen', 'gold']},
  {name: 'Falco', color: ['purple', 'lightskyblue']},
  {name: 'Byleth', color: ['teal', '#d33']},
  {name: 'Link', color: ['lightblue', 'goldenrod']},
  {name: 'Kazuya', color: ['lightblue', 'goldenrod']},
  {name: 'Sephiroth', color: ['lightblue', 'midnightblue', '#fff']},
  {name: 'Dark_Samus', color: ['lightblue', 'goldenrod']},
  {name: 'Donkey_Kong', color: ['tan', 'brown']}
]

function App() {
  const [visible, setVisible] = useState(false)
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0])
  return (
    <div className="App">
     <h1>FIGHTERS</h1>
     <div className="fighters-grid">
        {characters.map((element) => {
          return (<Fighter name={element.name} color={element.color} setVisible={setVisible} setSelectedCharacter={setSelectedCharacter} />)
        })}
     </div>
      <FighterScreen isVisible={visible} setVisible={setVisible} selectedCharacter={selectedCharacter} />
      <SideNavigation isVisible={visible} characters={characters} setSelectedCharacter={setSelectedCharacter} />
    </div>
  );
}

// const Fighter = {name: 'Roy', color: 'red'}

export default App;

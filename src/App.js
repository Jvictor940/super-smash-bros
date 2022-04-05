import './App.css';
import Fighter from './components/Fighter';

function App() {
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className='fighters-grid'>
        <Fighter name ={'Roy'} color={'red'} />
        <Fighter name ={'Fox'} color={'green'} />
        <Fighter name ={'Ganondorf'} color={'purple'} />
        <Fighter name ={'Sheik'} color={'lightskyblue'} />
      </div>
      <div>
        <div className='fighter-screen'></div>
        <h2>Roy</h2>
        <img src="https://www.smashbros.com/assets_v2/img/fighter/roy/main.png" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse alias cumque labore minima in, sed nam, sequi ipsum aut libero perspiciatis, distinctio voluptatibus corrupti! Ab qui necessitatibus quia laborum iusto.
        </p>
      </div>
    </div>
  );
}

export default App;

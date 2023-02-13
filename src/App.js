import './App.css';
import NavBar from './components/NavBar';
import QuestList from './components/QuestList.js';
import FadeIn from './components/FadeIn';

function App() {
  return (
    <div className="App">
      <NavBar />
      <FadeIn>
        <QuestList />
      </FadeIn>
    </div>
  );
}

export default App;

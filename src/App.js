import './css/echelon.css'
import Header from './Header';
import NotePanel from './NotePanel';
import WritingPanel from './WritingPanel';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="appContainer">
        <NotePanel />
        <WritingPanel />
      </div>
    </div>
  );
}

export default App;

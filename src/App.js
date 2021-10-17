import './App.css';
import Font from './components/Font';
import Aside from './components/Aside';
import AppStateProvider from './providers/AppStateProviders';

function App() {
  return (
    <AppStateProvider>
      <div className="container">
        <Font />
        <Aside />
      </div>
    </AppStateProvider>
  );
}

export default App;
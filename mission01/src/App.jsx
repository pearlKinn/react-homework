import Button from './components/Button';
import '@/styles/global.css';

function App() {
  return (
    <div className="App">
      <Button status="Default" />
      <Button status="Hover" />
      <Button status="OnClick" />
    </div>
  );
}

export default App;

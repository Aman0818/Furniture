import { useEffect } from 'react';
import './App.css';
import { Page1 } from './Pages/Page1';
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  })
  return (
    <div className="App">
      <Page1 />
    </div>
  );
}

export default App;

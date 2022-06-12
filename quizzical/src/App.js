import './Style.css';
import Main from './components/Main';
import React from 'react';
import All from './All';
import {Route, Routes} from 'react-router-dom';




function App() {



  const [show, setShow] = React.useState(true);

  function showComponent() {
    setShow(!show);
  }



  return (
    <div>
      
      <Routes>
              <Route exact path="/quiz" element={<All/>} />
      </Routes>

      <Routes>
              <Route exact path="/" element={<Main/>} />
      </Routes>
    </div>
  );
}

export default App;

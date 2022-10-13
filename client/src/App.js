import './App.css';
import ComposersDetails from './pages/ComposerDetails/ComposerDetails';
import ComposersPage from './pages/ComposersPage/ComposersPage';
import IndexPage from './pages/IndexPage/IndexPage';

import {Routes, Route} from 'react-router-dom'

function App() { //returns jsx
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<IndexPage />}/>
        <Route path='/composers' element={<ComposersPage />}/>
        <Route path='/composers/:composer_id' element={<ComposersDetails />}/>
      </Routes>
    </div>
  );
}

export default App;

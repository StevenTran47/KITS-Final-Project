import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import {Page} from './stories/Page' 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Page />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

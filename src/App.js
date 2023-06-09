import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import {Page} from './stories/Page' 
import { Admin } from './Page/Admin/Admin';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Page />}></Route>
        <Route path='/admin' element={<Admin/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

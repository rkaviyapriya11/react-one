import { Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
import Login from './component/Login';
import Certify from './component/Certify';
import { Button } from '@mui/material';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';





function App() {
  return (


    <div id='Project'>
      {/* <Button variant='contained' color="secondary" startIcon={<AccessTimeFilledIcon />}>add</Button> */}

      
      <Routes>
        <Route path='/certify' element={<Certify />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>

    </div>


  );
}

export default App;

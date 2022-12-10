import './index.css';

import Header from './components/Header';
import Employee from './components/Employee';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import Employees from './pages/Employees';
import Customers from './pages/Customers;

import {
  useState
} from 'react';
import {
  v4 as uuidv4
} from 'uuid';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path='/' element={<Employees />} />
          <Route path='/Customers' element={<Customers />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}
export default App;
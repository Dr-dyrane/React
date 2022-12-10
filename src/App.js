import './index.css';

import Header from './components/Header';
import Employee from './components/Employee';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import Employees from './pages/Employees';

import {
  useState
} from 'react';
import {
  v4 as uuidv4
} from 'uuid';

function App() {
  return(
    <Header>
      {props.Employee}
    <Header/>
  );
}
export default App;
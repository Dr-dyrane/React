import './App.css';
import Employee from './components/Employee'
import {
  useState
} from 'react';

function App() {
  const [role,
    setRole] = useState('developer');
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
      <>
      <input type='text' onChange={(e) => {
        setRole(e.target.value);
      }} />
      <Employee name="Jason" role="manager" />
      <Employee name="Mabel" role={role} />
      <Employee name="Allison" /> < />
    ): ( <p>You cannot see the employees</p>
    )}
    </div>
    );
}

export default App;
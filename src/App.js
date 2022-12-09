import './index.css';
import Employee from './components/Employee'
import {
  useState
} from 'react';

function App() {
  const [role,
    setRole] = useState('developer');
  const showEmployees = true;
  return (
    <div class="App">
      {showEmployees ? (
      <>
      <input type='text' onChange={(e) => {
        setRole(e.target.value);
      }} />
      <div class="flex flex-wrap">
        <Employee 
          name="Jason" 
          role="manager" 
          img="https://www.pexels.com/photo/man-smiling-behind-wall-220453/"/>
        <Employee 
          name="Mabel" 
          role={role}
          img="https://www.pexels.com/photo/man-smiling-behind-wall-220453/"/>
        <Employee 
          name="Allison"
          img="https://www.pexels.com/photo/man-smiling-behind-wall-220453/"/>
        <Employee 
          name="Jason" 
          role="manager" 
          img="https://www.pexels.com/photo/man-smiling-behind-wall-220453/"/>
        <Employee 
          name="Mabel" 
          role={role}
          img="https://www.pexels.com/photo/man-smiling-behind-wall-220453/"/>
        <Employee 
          name="Allison"
          img="https://www.pexels.com/photo/man-smiling-behind-wall-220453/"/>
      </div> < />
    ): (<p>
You cannot see the employees
      </p>
    )}
  </div>
);
}

export default App;
import './index.css';
import Employee from './components/Employee'
import {
  useState
} from 'react';
import {
  v4 as uuidv4
} from 'uuid';

function App() {
  const [role,
    setRole] = useState('developer');
  const [employees,
    setEmployees] = useState([{

      name: "Jason",
      role: "manager",
      img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg",
    },
      {

        name: "Mabel",
        role: "developer",
        img: "https://images.pexels.com/photos/2225298/pexels-photo-2225298.jpeg",
      },
      {

        name: "Allison",
        role: "intern",
        img: "https://images.pexels.com/photos/3831635/pexels-photo-3831635.jpeg",
      },
      {

        name: "Deli",
        role: "realtor",
        img: "https://images.pexels.com/photos/2095582/pexels-photo-2095582.jpeg",
      },
      {

        name: "Bella",
        role: "carer",
        img: "https://images.pexels.com/photos/3760583/pexels-photo-3760583.jpeg",
      },
      {

        name: "Fortune",
        role: "mariner",
        img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      },
      {

        name: "Taiwo",
        role: "designer",
        img: "https://images.pexels.com/photos/3821645/pexels-photo-3821645.jpeg",
      },
      {

        name: "Ikenna",
        role: "author",
        img: "https://images.pexels.com/photos/3831745/pexels-photo-3831745.jpeg",
      },
      {

        name: "Dyrane",
        role: "owner",
        img: "https://images.pexels.com/photos/3839645/pexels-photo-3839645.jpeg",
      },
    ]);
  const showEmployees = true;
  return (
    <div class="App">
      {showEmployees ? (
      <>
      <input type='text' onChange={(e) => {
        setRole(e.target.value);
      }} />
      <div class="flex flex-wrap justify-center">
        {employees.map((employee) => {
        return (
          <Employee
            key={uuidv4()}
            name={employee.name}
            role={employee.role}
            img={employee.img}
            alt={employee.name}
            />);
      })}
      </div> < />
    ): (<p>
You cannot see the employees
      </p>
    )}
  </div>
);
}

export default App;
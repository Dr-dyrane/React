import './index.css';
import Employee from './components/Employee'
import {
  useState
} from 'react';

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
        role: {
          role
        },
        img: "https://images.pexels.com/photos/3831646/pexels-photo-3831646.jpeg",
      },
      {
        name: "Allison",
        role: "intern",
        img: "https://images.pexels.com/photos/3831635/pexels-photo-3831635.jpeg",
      },
      {
        name: "Deli",
        role: "realtor",
        img: "https://images.pexels.com/photos/831635/pexels-photo-831635.jpeg",
      },
      {
        name: "Bella",
        role: "carer",
        img: "https://images.pexels.com/photos/2821645/pexels-photo-2821645.jpeg",
      },
      {
        name: "Fortune",
        role: "mariner",
        img: "https://images.pexels.com/photos/3831045/pexels-photo-3831045.jpeg",
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
            name={employee.name}
            role={employees.role}
            img={employee.img}
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
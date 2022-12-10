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
      id: 1,
      name: "Jason",
      role: "manager",
      img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg",
    },
      {
        id: 2,
        name: "Mabel",
        role: "developer",
        img: "https://images.pexels.com/photos/2225298/pexels-photo-2225298.jpeg",
      },
      {
        id: 3,
        name: "Allison",
        role: "intern",
        img: "https://images.pexels.com/photos/3831635/pexels-photo-3831635.jpeg",
      },
      {
        id: 4,
        name: "Deli",
        role: "realtor",
        img: "https://images.pexels.com/photos/2095582/pexels-photo-2095582.jpeg",
      },
      {
        id: 5,
        name: "Bella",
        role: "carer",
        img: "https://images.pexels.com/photos/3760583/pexels-photo-3760583.jpeg",
      },
      {
        id: 6,
        name: "Fortune",
        role: "mariner",
        img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      },
      {
        id: 7,
        name: "Taiwo",
        role: "designer",
        img: "https://images.pexels.com/photos/3821645/pexels-photo-3821645.jpeg",
      },
      {
        id: 8,
        name: "Ikenna",
        role: "author",
        img: "https://images.pexels.com/photos/3831745/pexels-photo-3831745.jpeg",
      },
      {
        id: 9,
        name: "Dyrane",
        role: "owner",
        img: "https://images.pexels.com/photos/3839645/pexels-photo-3839645.jpeg",
      },
    ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id){
        return {...employee, name: newName,  role: newRole}
      }
      
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
      <>
      <input type='text' onChange={(e) => {
        setRole(e.target.value);
      }} />
      <div className="flex flex-wrap justify-center">
        {employees.map((employee) => {
        return (
          <Employee
            key={employee.id}
            id={employee.id}
            name={employee.name}
            role={employee.role}
            img={employee.img}
            alt={employee.name}
            updateEmployee={updateEmployee}
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
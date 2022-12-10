import '../index.css';

import Header from '../components/Header';
import Employee from '../components/Employee';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';

import {
  useState
} from 'react';
import {
  v4 as uuidv4
} from 'uuid';

function Employees() {
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
    ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return {
          ...employee,
          name: newName,
          role: newRole
        };
      }

      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    }
    setEmployees([
      ...employees,
      newEmployee
    ])
  }

  const showEmployees = true;
  return (
    <div className="App bg-gray-300 min-h-screen">
      {showEmployees ? (
      <>
      <div className="flex flex-wrap justify-center my-2">
        {employees.map((employee) => {
        const editEmployee = (
          <EditEmployee
            id={employee.id}
            name={employee.name}
            role={employee.role}
            updateEmployee={updateEmployee}
            />
        );
        return (
          <Employee
            key={employee.id}
            id={employee.id}
            name={employee.name}
            role={employee.role}
            img={employee.img}
            alt={employee.name}
            editEmployee={editEmployee}
            />);
      })}
      </div>
      <AddEmployee newEmployee={newEmployee} /> < />
    ): (<p>
You cannot see the employees
      </p>
    )}
    </div>
  );
}

export default Employees;
import './index.css';
import Employee from './components/Employee'
import {
  useState
} from 'react';

function App() {
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
        img: "https://www.pexels.com/photo/woman-smiling-2709388/",
      },
      {
        name: "Allison",
        role: "intern",
        img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg",
      },
      {
        name: "Deli",
        role: "realtor",
        img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg",
      },
      {
        name: "Bella",
        role: "carer",
        img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg",
      },
      {
        name: "Fortune",
        role: "mariner",
        img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg",
      },
      {
        name: "Taiwo",
        role: "designer",
        img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg",
      },
      {
        name: "Ikenna",
        role: "author",
        img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg",
      },
      {
        name: "Dyrane",
        role: "owner",
        img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg",
      },
    ]);
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
      <div class="flex flex-wrap justify-center">
        <Employee
        name="Jason"
        role="manager"
        img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" />
        <Employee
        name="Mabel"
        role={role}
        img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" />
        <Employee
        name="Allison"
        img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" />
        <Employee
        name="Jason"
        role="manager"
        img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" />
        <Employee
        name="Mabel"
        role={role}
        img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" />
        <Employee
        name="Allison"
        img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" />
        <Employee
        name="Allison"
        img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" />
      </div> < />
    ): (<p>
You cannot see the employees
      </p>
    )}
  </div>
);
}

export default App;
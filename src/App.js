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
        img: "https://www.pexels.com/photo/woman-smiling-2709388.jpeg",
      },
      {
        name: "Allison",
        role: "intern",
        img: "https://www.pexels.com/photo/selective-focus-photography-of-woman-1239288.jpeg",
      },
      {
        name: "Deli",
        role: "realtor",
        img: "https://www.pexels.com/photo/selective-focus-photography-of-woman-holding-to-trunk-1958728.jpeg",
      },
      {
        name: "Bella",
        role: "carer",
        img: "https://www.pexels.com/photo/woman-with-red-lipstick-and-blonde-hair-4079218.jpeg",
      },
      {
        name: "Fortune",
        role: "mariner",
        img: "https://pixabay.com/photos/woman-portrait-bust-model-face-3220835.jpeg",
      },
      {
        name: "Taiwo",
        role: "designer",
        img: "https://www.pexels.com/photo/photo-of-man-wearing-leather-jacket-4048501.jpeg",
      },
      {
        name: "Ikenna",
        role: "author",
        img: "https://pixabay.com/photos/man-beard-portrait-bearded-man-657869.jpeg",
      },
      {
        name: "Dyrane",
        role: "owner",
        img: "https://www.istockphoto.com/photo/portrait-of-happy-mature-man-wearing-spectacles-and-looking-at-camera-indoor-gm1331257339-414447355.jpeg",
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
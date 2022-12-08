import './App.css';
import Employee from './components/Employee'

function App() {
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ?
      <>
      <Employee name="Jason" role="manager"/>
      <Employee name="Mabel" />
      <Employee name="Allison" /> < />: < p >
      You cannot see the employees < /p>
      }
    </div>
  );
}

export default App;
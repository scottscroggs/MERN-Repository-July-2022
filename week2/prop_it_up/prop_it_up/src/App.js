import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
        firstName={"Scott"} 
        lastName={"Scroggs"} 
        age={"27"} 
        hairColor={"Brown"} 
      />
      <PersonCard firstName={"John"} lastName={"Doe"} age={"45"} hairColor={"Black"} />
      <PersonCard firstName={"Donny"} lastName={"T"} age={"78"} hairColor={"Blonde"} />
      <PersonCard firstName={"Millard"} lastName={"Fillmore"} age={"50"} hairColor={"Brown"} />
    </div>
  );
}

export default App;

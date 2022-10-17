import Header from './Components/Header';
import AddPerson from './Components/AddPerson';
import Person from './Components/Person';
import './App.css';
import {useState} from 'react'


function App() {
  const [people,setPeople] = useState([])
  return (
    <div className="App">

    <Header />
    {/* from here in app.js we take and pass people & setPeople to AddPerson.js
    this allows us to create a new Person and add them to the People */}
    
    <div className='container'>
    <AddPerson people={people} setPeople={setPeople} />
    <hr id="line"></hr>
    <div className='resultsContainer'>
    {people.map((item,index)=>
    <Person
      key={index}
      // key=index belongs to react
      // but we can create index=index and pass it through
      // props on Person.js to have access to the index
      index={index}
      name={item.name}
      height={item.height}
      gender={item.gender}
      age={item.age}
      money={item.money}
      //to access people in Person.js (needed to assign MONEY)
      //we have to give Person.js access to people
    
      //list of people
      people={people}
      //method to update people
      setPeople={setPeople}
    />
    )}
    </div>
    </div>
    </div>
  );
}

export default App;

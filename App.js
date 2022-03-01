import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import firebase from "./firebase";


function App() {
  const [schools,setSchools] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("schools");
  <h1>welcome</h1>;

  if(loading){
    return <h1> Loading....</h1>;
  }
  return (
    <div>
      <h1> Schools List </h1>
      {schools.map((school) => (
        <div key = {school.id}>
          <h2>{school.title}</h2>
          <p>{school.description}</p>
       </div>   

      ))}
    </div>
  ); 
}

export default App;

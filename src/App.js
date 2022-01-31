import './App.css';
import React from 'react';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';

class App extends React.Component {
  render(){
    return(
      <div className="App">
    
       <h1>Hello This Home</h1>
      <StudentList/>
      <AddStudent/>
    
    </div>
    )
  }
}


export default App;

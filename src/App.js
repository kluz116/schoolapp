import './App.css';
import React from 'react';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';

class App extends React.Component {
  render(){
    return(
      <div className="App">
    
    
      <AddStudent/>
      <StudentList/>
   
    
    </div>
    )
  }
}


export default App;

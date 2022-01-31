import React,{useState} from "react";
import axios from "axios";


const AddStudent = (props)=>{
  const [student, setStudent] = useState({first_name: "",last_name:"", age:""})
 
  const handleChange = (event)=>{

    setStudent({...student,[event.target.name]: event.target.value })

  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/student',student)
         .then(res => {
           console.log(res.data)
         })
    
  }

  return(
    <div>
                
            <form onSubmit={handleSubmit}>
              <label>
                Last Name:
                <input type="text" name="first_name"   onChange={handleChange} />
              </label>
              <label>
                Last Name:
                <input type="text" name="last_name" onChange={handleChange} />
              </label>
              <label>
                age:
                <input type="number" name="age" onChange={handleChange} />
              </label>
              <button type="submit">Add</button>
            </form>
          </div>

  );
}



export default AddStudent
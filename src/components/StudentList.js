import React,{useEffect} from "react";
import axios from "axios";
import { useState } from "react/cjs/react.development";
import { Table,Button } from "reactstrap";

const StudentList = ()=>{
  const[students,setStudents] = useState([])
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/student')
          .then(res=>{
            setStudents(res.data)
          })

  },[])

  const onDeleteStudent = (id)=>{
    axios.delete(`http://127.0.0.1:8000/students/${id}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }
  return(
  

          <Table striped>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        First Name
      </th>
      <th>
        Last Name
      </th>
      <th>
        Age
      </th>
    </tr>
  </thead>
  <tbody>
      
          {students.map((student,index)=>(
                      <tr>
                       <td>{student.id}</td>
                      <td>{student.first_name}</td>
                      <td>{student.last_name}</td>
                      <td>{student.age}</td>
                      <td><Button outline color="danger" size="sm" onClick={()=>onDeleteStudent(student.id)} >Delete</Button></td>
                  
                      </tr>
                    ))}
    
  </tbody>
</Table>

  );
}

export default StudentList
import React,{useEffect} from "react";
import axios from "axios";
import { useState } from "react/cjs/react.development";

const StudentList = ()=>{
  const[students,setStudents] = useState([])
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/student')
          .then(res=>{
            setStudents(res.data)
          })

  },[])
  return(
    <div>
         <ul>
            {
              students
                .map(student =>
                  <li key={student.id}>{student.first_name} {student.last_name}  {student.age} </li>
                )
            }
          </ul>
    </div>
  );
}

export default StudentList
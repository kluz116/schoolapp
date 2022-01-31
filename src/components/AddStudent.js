import React,{useState} from "react";
import axios from "axios";
import { Button ,Form, Container,Row,Col} from 'reactstrap';


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
    <Container>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col><input type="text" placeholder="First Name" name="first_name"   onChange={handleChange} /></Col>
                <Col><input type="text"  placeholder="Last Name" name="last_name" onChange={handleChange} /></Col>
                <Col><input type="number" placeholder="Age" name="age" onChange={handleChange} /></Col>
                <Col><Button color="primary" outline type="submit">Add Student Here.</Button></Col>
              
              </Row>
            </Form>
    </Container>

  );
}



export default AddStudent
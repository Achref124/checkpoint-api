import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const Profile = () => {
  let {id}=useParams()
  const navigate=useNavigate()
  
  const[prof,setProf]=useState([])
  useEffect(() => {
    axios
    .get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
    .then((res)=>setProf(res.data[0]))
    .catch((err)=>console.log(err))
  }
  , [id])
  

  return (
    <div>
      <Card style={{ width: '18rem',marginTop:'30px' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdT-ZIN-0Ru4gIc99fsCE-ooXb5fSFVpbrVA&usqp=CAU" />
      <Card.Body>
        <Card.Title>{prof.name}</Card.Title>
        <Card.Text>
          {prof.username}
        </Card.Text>
        <Card.Text>
          {prof.email}
        </Card.Text>
        <Card.Text>
          {prof.address?.suite}
        </Card.Text>
        
        <Button onClick={()=>navigate(-1)} >Go Back</Button>

      
       
      </Card.Body>
    </Card>

      
    </div>
  )
}

export default Profile
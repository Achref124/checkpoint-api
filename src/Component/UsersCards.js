import { Button } from 'react-bootstrap'
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const UsersCards = ({user}) => {
  const navigate=useNavigate()
  return (
    <div  >
<Card style={{ width: '18rem',marginTop:'30px' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdT-ZIN-0Ru4gIc99fsCE-ooXb5fSFVpbrVA&usqp=CAU" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          {user.username}
        </Card.Text>
        <Card.Text>
          {user.email}
        </Card.Text>
        
        <Button onClick={()=>navigate(`/user/${user.id}`)} >Profile</Button>

      
       
      </Card.Body>
    </Card>

    </div>
  )
}

export default UsersCards
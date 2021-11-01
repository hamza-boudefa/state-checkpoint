import React, { Component } from 'react'
import { Card} from 'react-bootstrap'
import hamza from './hamza.jpg'
import Counter from './Counter'
export default class Profile extends Component {

  
    render() {
        return (
            <div style={{display:'flex', justifyContent:'center' , marginTop:'100px'}}>
            <Card >
  <Card.Img variant="top" src={hamza} alt="photo" style={{height:"200px", width:"200px" ,marginLeft:'550px'  }} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <div className='count' >
    <Counter />
    </div>
  </Card.Body>
</Card >


            </div>
        )
    }
}

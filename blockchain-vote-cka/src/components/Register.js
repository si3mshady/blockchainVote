import './css/Register.css'
import { Form, Col, Button } from 'react-bootstrap';

export default function Register({ip}) {
  
return (
        <div className="register">

<p>Your IP address is <span style={{color:"green"}}>{ip}</span></p> 

<Form.Group className="">
  <Form.Row>


    {/* <Form.Label column="sm" lg={2}>
      Driver's Licence
    </Form.Label> */}
    <Col>
      <Form.Control size="lg" type="text" placeholder="Drivers Licence" />
    </Col>
  </Form.Row>
  <br />
  <Form.Row>
    {/* <Form.Label column="sm"  lg={2}>
      Full Name
    </Form.Label> */}
    <Col>
      <Form.Control size="lg" type="text" placeholder="Full Name" />
    </Col>
  </Form.Row>
  <br />
  <div className="register_button">
        <Button >Register</Button>
  </div>
 
</Form.Group>
        


            
        </div>
    )
}

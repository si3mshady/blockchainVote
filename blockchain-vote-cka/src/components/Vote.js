import React from 'react'
import { Form, Col, Button } from 'react-bootstrap';
export default function Vote() {
    return (
        <div className="vote">
            <Form.Group className="">
  <Form.Row>

    <Col>
      <Form.Control size="lg" type="text" placeholder="Candidate Name" />
    </Col>
  </Form.Row>
  <br />

    
  <br />
  <div className="register_button">
        <Button >Vote</Button>
  </div>
 
</Form.Group>
        </div>
    )
}


//https://docs.alchemyapi.io/alchemy/tutorials/how-to-create-an-nft
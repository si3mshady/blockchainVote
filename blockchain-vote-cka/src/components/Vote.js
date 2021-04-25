import React from 'react'
import { Form, Col, Button } from 'react-bootstrap';
export default function Vote() {
    return (
        <div className="vote">
            <Form.Group className="">
  <Form.Row>


    {/* <Form.Label column="sm" lg={2}>
      Driver's Licence
    </Form.Label> */}
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

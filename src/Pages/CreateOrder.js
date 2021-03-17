import React from 'react'
import Row from 'react-bootstrap/esm/Row';
import Col from "react-bootstrap/Col";
import './CreateOrder.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function CreateOrder() {
    return (
        <div className='CreateOrder'>
            <div className='container '>


                <Row className='row-sm'>
                    <Col className='bnt-back' column-sm>
                        <Form.Group as={Row} className='bnt-back'>
                            <div sm={{ span: 10, offset: 2 }}>
                                <Button className='button-back' type="submit">กลับ</Button>
                            </div>
                        </Form.Group>
                    </Col>

                    <Col className='text-page-order' column-sm><span><h2>สินค้าในคลัง</h2></span></Col>


                    <Col className='bnt-search' column-sm>
                    <div class="input-group">
  <div class="form-outline">
    <input type="search" id="form1" class="form-control" />
    <label class="form-label" for="form1">Search</label>
  </div>
  <button type="button" class="btn btn-primary">
    <i class="fas fa-search"></i>
  </button>
</div>

                    </Col>
                </Row>


                <Row className='row-sm'>
                    <span><h1>sssss</h1></span>
                </Row>

                <Row className='row-sm'>
                    <h1>dddd</h1>
                </Row>
            </div>
        </div>
    )
}

export default CreateOrder;
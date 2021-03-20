import React from 'react'
import Row from 'react-bootstrap/esm/Row';
import Col from "react-bootstrap/Col";
import './CreateOrder.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Divider from "@material-ui/core/Divider";
import { BsSearch, BsCaretLeftFill } from "react-icons/bs";
import Card from "react-bootstrap/Card";

function CreateOrder() {
    return (
        <div className='CreateOrder'>
            <div className='container'>
                <div className='row'>
                    <div className='col' id='bnt-back'>
                        <Button className='button-back' type="submit"><BsCaretLeftFill />กลับ</Button>
                    </div>
                    <div className='col' id='text-page'><h2>สินค้าในคลัง</h2></div>
                    <div className='col' id='text-page'> <Form.Control type="text" placeholder="ค้นหา" /></div>
                    <div className='col' id='icon-search'>
                        <Button className='button-back' type="submit"><BsSearch /></Button>
                    </div>
                </div>

                <Divider id='line' />

                <div className='row' id='body'>
                    <div className='col'>
                        <Card id='card-product' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                    <Card.Text id='text-in-card'>
                                         Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                <Button className='bnt-in-card' variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'>
                        <Card id='card-product' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                    <Card.Text id='text-in-card'>
                                         Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                <Button className='bnt-in-card' variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'>
                        <Card id='card-product' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                        <Card.Text id='text-in-card'> 
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                    </Card.Text>
                                <Button className='bnt-in-card' variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>

                </div>


                <div className='row' id='body'>
                    <div className='col'>
                    <Card id='card-product' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                    <Card.Text id='text-in-card'>
                                         Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                <Button className='bnt-in-card' variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'>
                    <Card id='card-product' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                    <Card.Text id='text-in-card'>
                                         Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                <Button className='bnt-in-card' variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'>
                    <Card id='card-product' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                    <Card.Text id='text-in-card'>
                                         Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                <Button className='bnt-in-card' variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>


              

            </div>
        </div>
    )
}

export default CreateOrder;
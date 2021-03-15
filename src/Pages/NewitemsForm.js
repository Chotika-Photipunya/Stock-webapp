import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './NewitemsForm.css';

function NewitemsForm() {
    return (
        <div className='NewitemsForm'>

            <Row className='text-page'>
                <span><h2>ลงทะเบียนสินค้าใหม่</h2></span>
            </Row>

            <Row className='text-form'>
                <Col className='col-md-6'>
                    <div className='text-showpic' >
                        <h4>พื้นที่แสดงรูปที่อัพ</h4>
                    </div>

                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroupFileAddon01">
                                Upload
                             </span>
                        </div>
                        <div className="custom-file">
                            <input
                                type="file"
                                className="custom-file-input"
                                id="inputGroupFile01"
                                aria-describedby="inputGroupFileAddon01"
                            />
                            <label className="custom-file-label" htmlFor="inputGroupFile01">
                                Choose file
                            </label>
                        </div>
                    </div>




                    <Form>
                        <Form.Group as={Row} controlId="id-product">
                            <Form.Label column sm={3}>
                                รหัสสินค้า:
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="text" placeholder="กรอกรหัสสินค้า" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="detail-product">
                            <Form.Label column sm={3}>
                                รายละเอียด:
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="text" placeholder="กรอกรายละเอียดของสินค้า" />
                            </Col>
                        </Form.Group>


                        <Form.Group as={Row} controlId="color-product">
                            <Form.Label column sm={3}>
                                สีรองเท้า:
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="text" placeholder="กรอกสีรองเท้า" />
                            </Col>
                        </Form.Group>
                        {/* ดรอปดาว */}
                        <Form.Group as={Row} controlId="size-product">
                        <Form.Label column sm={3}>
                                ไซส์รองเท้า:
                            </Form.Label>
                            <Col xs="auto" className="my-1">
                                <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                                    Preference
                                </Form.Label>
                                <Form.Control
                                    as="select"
                                    className="mr-sm-2"
                                    id="inlineFormCustomSelect"
                                    custom
                                >
                                    <option value="0">เลือก...</option>
                                    <option value="1">35-40</option>
                                    <option value="2">36-41</option>
                                    <option value="3">37-40</option>
                                </Form.Control>
                            </Col>
                            </Form.Group>

                        <Form.Group as={Row} controlId="amount-product">
                            <Form.Label column sm={3}>
                                จำนวน(หน่วยลัง):
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="text" placeholder="กรอกจำนวนลัง" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="amount-crate-product">
                            <Form.Label column sm={3}>
                                จำนวนถุงในลัง(หน่วยโหล):
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="text" placeholder="กรอกจำนวนถุง" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="cost-price">
                            <Form.Label column sm={3}>
                                ราคาทุน(บาท):
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="text" placeholder="กรอกราคาทุน" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="sale-price">
                            <Form.Label column sm={3}>
                                ราคาขาย(บาท):
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="text" placeholder="กรอกราคาขาย" />
                            </Col>
                        </Form.Group>




                        <Form.Group as={Row} className='bnt-submit'>
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Button className='button-submit' type="submit">ยืนยันการสร้าง</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default NewitemsForm;

import React from 'react';
import Button from "react-bootstrap/Button";
import Divider from "@material-ui/core/Divider";
import { GrAddCircle, GrSubtractCircle } from "react-icons/gr";
import { FaTrashAlt } from "react-icons/fa";
import './CreateOrder.css';
import './CreateOrderListEdit.css';
import './CreateOrderList.css';
import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import 'font-awesome/css/font-awesome.css';


function CreateOrderListEdit() {
    return (
        <div className='CreateOrderListEdit'>
            <div className='container'>
                <div className='row'>
                    <h2 id='text-page'>แก้ไขข้อมูลในใบสั่งซื้อสินค้า</h2>
                </div>
                <Divider id='line' />

                <div className='row' id='table-header'>
                    <div className='col' id='text-table-header'>
                        <h5>ลำดับ</h5>
                    </div>
                    <div className='col' id='text-table-header'>
                        <h5>รูปภาพสินค้า</h5>
                    </div>
                    <div className='col' id='text-table-header'>
                        <h5>รหัสสินค้า</h5>
                    </div>
                    <div className='col' id='text-table-header'>
                        <h5>จำนวน(หน่วยลัง)</h5>
                    </div>
                    <div className='col' id='text-table-header'>
                        <h5>ราคาต่อลัง(บาท)</h5>
                    </div>
                    <div className='col' id='text-table-header'>
                        <h5>ยอดรวม(บาท)</h5>
                    </div>
                </div>


                <div className='row' id='table-header'>
                    <div className='col' id='text-table'>
                        <h5>1</h5>
                    </div>
                    <div className='col' id='text-table'>
                        <Image src="holder.js/171x180" rounded />
                    </div>
                    <div className='col' id='id-product'>
                        <Form.Control className='col-8' id='input-edit-id' type="text" placeholder="168-2" />
                    </div>
                    <div className='col' id='text-table'>
                    <InputGroup.Prepend>
                            <Button className='input-edit-amount' variant="outline-secondary">
                            <i class="fa fa-minus" aria-hidden="true"></i>
                            </Button>
                        </InputGroup.Prepend>
                        
                        <FormControl className='col-6' id='form-edit-amount' aria-describedby="basic-addon1" type="text" placeholder="350" />

                        <InputGroup.Append> 
                            <Button className='input-edit-amount'>
                                <i class="fa fa-plus" aria-hidden="true"></i>
                                </Button>
                        </InputGroup.Append>
                     
                    </div>
                    <div className='col' id='text-table'>
                        <h5>3,000</h5>
                    </div>
                    <div className='col' id='text-table'>
                        <h5>105,000</h5>
                    </div>
                    <div className='col' id='text-table'>
                        <h5>105,000</h5>
                    </div>
                    <div className='col' id='text-table'>
                        <Button className='bnt-edit' type="submit"><FaTrashAlt /></Button>
                    </div>
                </div>

                <div className='row'>
                    <div class="col-md-12 text-center">
                        <Button className='bnt-comfirm-in-orderlist' type="submit">ยืนยันการสร้าง</Button>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default CreateOrderListEdit

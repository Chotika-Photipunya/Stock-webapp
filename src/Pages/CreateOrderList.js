import React from 'react';
import Button from "react-bootstrap/Button";
import Divider from "@material-ui/core/Divider";
import { BiAddToQueue } from "react-icons/bi";
import './CreateOrder.css';
import './CreateOrderList.css';
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";

function CreateOrderList() {
    return (
        <div className='CreateOrderList'>
            <div className='container'>
                <div className='row'>
                    <h2 id='text-page'>สร้างใบสั่งซื้อสินค้าใหม่</h2>
                </div>
                <Divider id='line' />
                <div className='row'>
                    <div className='col' id='bnt-add'>
                        <Button className='button-back' type="submit"><BiAddToQueue />เพิ่มรายการสินค้า</Button>
                    </div>
                </div>

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
                    <div className='col' id='text-table'>
                        <h5>168-2</h5>
                    </div>
                    <div className='col' id='text-table'>
                        <h5>35</h5>
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
                    <Button className='bnt-edit' type="submit">แก้ไขข้อมูล</Button>
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

export default CreateOrderList

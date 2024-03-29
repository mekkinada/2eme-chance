
import React, { useState } from "react";
import {  BrowserRouter } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Form, Button } from 'react-bootstrap'

import './Footer.css'

const Footer = () => {



    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Sending...");
      const { name, email, message } = e.target.elements;
      let details = {
        name: name.value,
        email: email.value,
        message: message.value,
      };
      let response = await fetch("http://localhost:5244/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      setStatus("Submit");
      let result = await response.json();
      alert(result.status);
    };




    return (
        <BrowserRouter>
            <MDBFooter color="blue-grey" className="page-footer font-small lighten-5 pt-0">
                <div style={{ backgroundColor: "#008f11" }}>
                    <MDBContainer>
                        <MDBRow className="py-4 d-flex align-items-center">
                            <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
                                <h6 className="mb-0 " style={{ color: "white" }}>تواصل معنا على الشبكات الاجتماعية!</h6>
                            </MDBCol>
                            <MDBCol md="6" lg="7" className="text-center text-md-right">
                                <a href="https://www.facebook.com/epsrit" className="fb-ic ml-0">
                                    <i className="fab fa-facebook-f white-text mr-lg-4"> </i>
                                </a>
                                <a href="https://www.youtube.com/channel/UCZeUp2bIOQynYRRQrV2cV3g" className="fb-ic ml-0">
                                    <i className="fab fab fa-youtube white-text mr-lg-4"> </i>
                                </a>
                               
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
                <MDBContainer className="mt-5 mb-4 text-center text-md-left">
                    <MDBRow className="mt-3">
                        <MDBCol md="3" lg="3    " xl="3" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong></strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            <p>
                            تتولى مدرسة الفرصة الثانية مهام الاستقبال والتوجيه والتأهيل والمرافقة والإحاطة بالأطفال الذين تتراوح أعمارهم بين 12 و 18 سنة والذين انقطعوا عن الدراسة دون الحصول على شهادة مدرسية تختم مرحلة تعليمية أو مؤهل تكوين مهني وذلك قصد تمكينهم من مواصلة الدراسة بالمؤسسات التربوية التابعة لوزارة التربية أو الالتحاق بمنظومة التكوين المهني أو الإعداد للاندماج بسوق الشغل والحياة النشيطة.
                            </p>
                        </MDBCol>
                        
                        <MDBCol md="3" lg="3" xl="4" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>اتصل</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            <p><i className="fa fa-home mr-3" /> 24 Rue de L'Usine Charguia II 2035 </p>
                            <p><i className="fa fa-envelope mr-3" /> rafiq.e2c@gmail.com </p>
                            <p><i className="fa fa-phone mr-3" /> + 216 93 216 782</p>
                        
                        </MDBCol>
                        <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>تواصل معنا</strong>
                            </h6>
                            <Form onSubmit={handleSubmit} >
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>عنوان بريد الكتروني</Form.Label>
                                    <Form.Control type="email" placeholder="بريد الالكتروني" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>تعليق</Form.Label>
                                    <Form.Control as="textarea" rows={3} type="text" placeholder="اكتب أفكارك" />
                                </Form.Group>
                                <Button variant="primary" type="submit">أرسل رسالة </Button>
                            </Form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright:{" "}
                        Esprit
                </MDBContainer>
                </div>
            </MDBFooter>
        </BrowserRouter>
    )
}

export default Footer
